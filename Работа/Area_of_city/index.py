from selenium import webdriver
import time
import os
from selenium.webdriver.common.keys import Keys

import urllib.request
import json
from urllib.parse import quote
import pandas as pd
import datetime


class Processing:
    def _init_(self):
        self.ser = []

    def start(self, file_input):
        try:
            time_connect = datetime.datetime.now()
            xl = pd.ExcelFile(file_input)
            df = xl.parse(xl.sheet_names[0])
            self.ser = {
                'Name': df['Name'].values.tolist(),
            }
            print('Соединение => ' + str(datetime.datetime.now() - 
                  time_connect))
        except Exception as e:
            print('Ошибка! ' + str(e))

    def process(self):
        time_processing = datetime.datetime.now()

        options = webdriver.ChromeOptions()
        options.binary_location = (
            'C:/Users/KozlovaAnnaS/AppData/Local/Google/'
            + 'Chrome SxS/Application/chrome.exe'
        )
        # options.headless = True
        # options.add_argument('window-size=1200x600')

        driver = webdriver.Chrome(
            executable_path='chromedriver.exe',
            chrome_options=options
        )

        driver.implicitly_wait(3)

        Name = self.ser['Name']
        Param = []
        for i in range(len(Name)):
            driver.get('https://market.yandex.ru/catalog/54554/')

            search = driver.find_element_by_id('header-search')
            # search.clear()
            search.send_keys(str(Name[i]))  
            search.send_keys(Keys.RETURN)

            try:
                login_form = driver.find_element_by_xpath(
                    "html/body/div[@class='main']"
                )
                login_form = login_form.find_element_by_class_name(
                    'n-noresult'
                )
                try:
                    driver.get(
                        'https://www.google.com/search?newwindow=1&tbm=shop'
                    )
                    search = driver.find_element_by_id('lst-ib')
                    search.clear()
                    # search.send_keys('сетевое оборудование ' + str(Name[i]))
                    search.send_keys('сетевое оборудование ' + str(Name[i]))
                    search.send_keys(Keys.RETURN)
                    res = (driver
                        .find_element_by_id('res')
                        .find_element_by_id('topstuff')
                        .value_of_css_property('height'))
                    if res == '0px':
                        print('Ничего не найдено')
                    else:
                        print('Найдено в гугле')
                        driver.save_screenshot(
                            os.getcwd() + '/images/' + str(i) + '.png'
                        )                   
                except:
                    print('Ничего не найдено всё равно')
            except:
                try:
                    search = driver.find_element_by_id('n-page-search')
                    print('Ничего не найдено')
                except:
                    print('Найдено в Яндексе')
                    driver.save_screenshot(
                        os.getcwd() + '/images/' + str(i) + '.png'
                    )

        self.ser = {
            'Название': self.ser['Name'],
            # 'Какие-то параметры': Param
        }
        print('Обработка => ' + str(datetime.datetime.now() - 
            time_processing))

    def end(self, file_output):
        while(True):
            try:
                # print(self.ser)
                time_connect = datetime.datetime.now()
                res_pd = pd.DataFrame(self.ser)
                writer = pd.ExcelWriter(file_output)
                res_pd.to_excel(writer, 'List1')
                writer.save()
                print('Сохранение => ' + str(datetime.datetime.now() - 
                    time_connect))
                input('Сделалось. Нажмите ENTER, чтобы закончить.')
                break
            except:
                input('Ошибка! Закройте файл input, '
                    + 'если он открыт и нажмите ENTER.')


if __name__ == '__main__':
    # try:
    # file_input = './input.xlsx'
    # file_output = './output.xlsx'
    file_input = './input.xlsx'
    file_output = './output.xlsx'

    processing = Processing()
    processing.start(file_input)
    processing.process()
    processing.end(file_output)
    # except Exception as e:
    #     print('Ошибка! ' + str(e))
