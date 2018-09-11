import time
import os

import urllib.request
import json
from urllib.parse import quote
import pandas as pd
import datetime

from fuzzywuzzy import fuzz

ser_main = {}
ser = {}

def start(file_input, main_bool):
    global ser
    global ser_main
    try:
        print(file_input)
        # time_connect = datetime.datetime.now()
        xl = pd.ExcelFile('./' + file_input + '.xlsx')
        df = xl.parse(xl.sheet_names[0])
        if main_bool:
            ser_main = {
                'Name': df['Name'].values.tolist(),
            }
        else:
            ser = {
                'Name': df['Название'].values.tolist(),
                'Param': df['Какие-то параметры'].values.tolist(),
            }
        # print('Соединение => ' + str(datetime.datetime.now() - 
        #     time_connect))
    except Exception as e:
        print('Ошибка! ' + str(e))


def end(file_input):
    """
    Save output file
    """
    global ser
    while(True):
        try:
            # print(self.ser)
            time_connect = datetime.datetime.now()
            res_pd = pd.DataFrame(ser)
            writer = pd.ExcelWriter('./' + file_input + '.xlsx')
            res_pd.to_excel(writer, 'List1')
            writer.save()
            print('Сохранение => ' + str(datetime.datetime.now() -
                                            time_connect))
            break
        except:
            input('Ошибка! Закройте файл input, '
                    + 'если он открыт и нажмите ENTER.')
    
def process(row):
    global ser
    for i in range(len(ser['Name'])):
        fuz = fuzz.token_sort_ratio(ser['Name'][i], row)
        if fuz > 60:
            return ser['Param'][i]
    return ""


if __name__ == '__main__':
    # global ser_main
    Param = []
    # open main file
    start('input', 1)
    # open not main file and find equip in it
    for row in ser_main['Name']:
        for file_input in ([
                'transvoc', 'incab', 'nsc', 'juniper', 
                'ciena', 'ubnt', 'intel'
                ]):
            start(file_input, 0)
            p = process(row)
            # end(file_input)
            if not p == "":
                break
        Param.append(p)
    print(Param)

    input("Нажмите ENTER для выхода.")