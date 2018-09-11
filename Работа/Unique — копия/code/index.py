import pandas as pd
import datetime
from fuzzywuzzy import fuzz


class Unique:
    def _init_(self):
        self.ser = {}

    def start(self, file_input1, file_input2):
        time_connect = datetime.datetime.now()
        self.ser = {}

        xl = pd.ExcelFile(file_input1)
        df = xl.parse(xl.sheet_names[0])
        self.ser['Name1__model'] = df['Модель оборудования '].values.tolist()
        self.ser['Name1__manufacturer'] = df['Производитель'].values.tolist()

        print("Первый файл подключен")

        xl = pd.ExcelFile(file_input2)
        df = xl.parse(xl.sheet_names[1])
        self.ser['Name2'] = df['Название'].values.tolist()
        print("Второй файл подключен")

        print('Подключение => ' + str(datetime.datetime.now() - time_connect))

    def process(self):
        time_processing = datetime.datetime.now()
        Name1__model = self.ser['Name1__model']
        Name1__manufacturer = self.ser['Name1__manufacturer']

        Name2 = self.ser['Name2']
        Output = []
        # per = input('На сколько процентов минимум должны совпадать строки? ')
        per = 70
        for i in range(len(Name1__model)):
            try:
                Name1 = Name1__model[i] + " " + Name1__manufacturer[i]
                if i%25==0:
                    print("Строка " + str(i))
                output_file2 = ""
                for j in range(len(Name2)):
                    fuz = fuzz.token_sort_ratio(Name1, Name2[j])
                    if fuz >= int(per):
                        print(Name1 + " || " + Name2[j])
                        output_file2 = Name1 + " || " + Name2[j]
                Output.append(output_file2)
            except:
                continue
        self.ser = {
            'Совпавшее': Output
        }
        print('Процесс => ' + str(datetime.datetime.now() - time_processing))

    def end(self, file_output):
        time_connect = datetime.datetime.now()
        res_pd = pd.DataFrame(self.ser)
        writer = pd.ExcelWriter(file_output)
        res_pd.to_excel(writer, 'Лист1')
        writer.save()
        print('Отключение => ' + str(datetime.datetime.now() - time_connect))


if __name__ == '__main__':
    file_input1 = '../input1.xlsx'
    file_input2 = '../input2.xlsx'
    file_output = '../output.xlsx'

    unique = Unique()
    unique.start(file_input1, file_input2)
    unique.process()
    unique.end(file_output)

    input("Сделалось. Нажмите ENTER, чтобы закончить.")
