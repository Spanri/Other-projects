#%% Main

# подключение модулей
import sys
import os
sys.path.append(os.path.join(sys.path[0], 'modules'))
import connect
import processing

if __name__ == '__main__':
    file_input = 'input.xlsx'
    file_output = 'output.xlsx'

    ser = connect.start(file_input)
    ser = processing.start(ser)
    connect.end(ser, file_output)

    input('Сделалось. Нажмите ENTER, чтобы закончить.')