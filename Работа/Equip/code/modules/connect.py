import xlrd
import pandas as pd
import xlsxwriter
import datetime

def start(file_input):
    """
    Return file with column 'Name'
    """
    time_connect = datetime.datetime.now()
    xl = pd.ExcelFile(file_input)
    df = xl.parse(xl.sheet_names[0])
    ser = {
        'Name': df['Name'].values.tolist(),
    }
    print('Подключение => ' + str(datetime.datetime.now() - time_connect))
    return ser


def end(ser, file_output):
    """
    Save resPd to fileName
    """
    time_connect = datetime.datetime.now()
    res_pd = pd.DataFrame(ser)
    writer = pd.ExcelWriter(file_output)
    res_pd.to_excel(writer, 'Лист1')
    writer.save()
    print('Отключение => ' + str(datetime.datetime.now() - time_connect))
