import re
from fuzzywuzzy import fuzz
import datetime

def start(ser):
    """
    Processing file
    """
    time_processing = datetime.datetime.now()
    Name = ser['Name']
    Version = []
    Rep = []
    Aplic = []
    All_rep = []
    Partya = []
    Ser_num = []
    Where = []
    As_a = []
    Tec_con = []
    words = ''
    for i in range(len(Name)):
        Name[i] = re.sub(r'\(\)', '', str(Name[i]))
        Name[i] = re.sub(r'(,(\s)*$)', '', str(Name[i]))
        """
        Other thing
        """
        words = str(Name[i])
        Version0, Where0, Partya0, Ser_num0, Aplic0, As_a0, Tec_con0, words = other(
            words)
        
        if not Version0 == []:
            Version += Version0
        else:
            Version.append(str(''))
        if not Where0 == []:
            Where += Where0
        else:
            Where.append(str(''))
        if not Partya0 == []:
            Partya += Partya0
        else:
            Partya.append(str(''))
        if not Ser_num0 == []:
            Ser_num += Ser_num0
        else:
            Ser_num.append(str(''))
        if not Aplic0 == []:
            Aplic += Aplic0
        else:
            Aplic.append(str(''))
        if not As_a0 == []:
            As_a += As_a0
        else:
            As_a.append(str(''))
        if not Tec_con0 == []:
            Tec_con += Tec_con0
        else:
            Tec_con.append(str(''))
        words = re.sub(r'(\(\)|\((\s)*$)', '', str(words))
        words = words.replace(' ) ', ' ')
        """
        End of other thing
        """
        Iskl = re.findall(
            r'^[а-яА-Я-,\s/]+?(?=[А-Я]{3,}|:|\(|\d|[a-zA-Z]|\"|«|$)', str(words), re.M)
        if not Iskl == []:
            if len(Iskl[0]) == 1:
                Rep.append(str(''))
            else:
                Rep.append(Iskl[0])
                words = words.replace(Iskl[0], '')
        else:
            Rep.append(str(''))
        All_rep.append(words)
        # Name[i] = re.sub(
        #     r'(\"|\s\(|\)\s|\)$|«|»|\s-|\:|\,\s$|\s$|\.$|\,$|^[:\s]*)',
        #     ' ', str(Name[i]), re.M)
    ser = {
        'Название': Name,
        'Без лишнего': All_rep,
        'Модели': Rep,
        'Версия': Version,
        'в составе согласно Приложению': Aplic,
        'Партия': Partya,
        'Номера': Ser_num,
        'Расшифровки': Where,
        'В качестве': As_a,
        'Технические условия': Tec_con
    }
    print('Процесс => ' + str(datetime.datetime.now() - time_processing))
    return ser

def other(words):
    Version0 = []
    Where0 = []
    Partya0 = []
    Ser_num0 = []
    Aplic0 = []
    As_a0 = []
    Tec_con0 = []
    # версия
    vers = []
    vers = re.findall(r'(ПО:? не классифицируется( по версиям)?)', str(words))
    if not vers == []:
        vers = vers[0][0]
    if vers == []:
        vers = re.findall(
            r'''(верси.+?(?=верси|cерийные|с функ|в составе|технич|идентифи|завод|зав.|
            партия|по заявке|выполняю|реализу|и медиаш|где|ПО (\"|«)|\)|\(|$))''', 
            str(words))
        if not vers == []:
            vers2 = vers.copy()
            vers = []
            for v in vers2:
                vers.append(v[0])
            for i in range(len(vers)):
                vers[i] = re.sub(
                    r'(верси(я|и)( ПО(:| -|))|ПО|версия( программного обеспечения)?)',
                    '', str(vers[i]))
                vers[i] = re.sub(r'(^(\s)*|(\s)*$|\)(\s)*$|;(\s)*$)', '', str(vers[i]), re.M)
            # print(vers)
    if vers == []:
        vers = re.findall(r'программное обеспечение отсутствует', str(words))
        if not vers == []:
            vers = vers[0]
    if vers == []:
        vers = re.findall(r'ПО:.+?(?=\)|$)', str(words))
    if not vers == []:
        Version0.append(vers)
        words = re.sub(r'ПО(:)? не классифицируется по версиям', '', words)
        words = re.sub(r'''(верси.+?)(?=верси|cерийные|с функ|в составе|технич|идентифи|завод|зав.|
            партия|по заявке|выполняю|реализу|и медиаш|где|ПО (\"|«)|\)|\(|$)''', '', words)
        words = re.sub(r'программное обеспечение отсутствует', '', words)
        words = re.sub(r'ПО:.+?(?=\)|$)', '', words)
        # print(Version0)
    # print(Version0)
    # в составе согласно приложению
    hhh = re.findall(
        r'''(в составе(,|) (согласно|приведенном) ((П|п)риложению|в (п|П)риложении)|
        В СОСТАВЕ пРИЛОЖЕНИЯ).+?(.|,|$)''', words)
    if not hhh == []:
        Aplic0.append(True)
        words = re.sub(
            r'''(в составе(,|) (согласно|приведенном) ((П|п)риложению|в (п|П)риложении)|
            В СОСТАВЕ пРИЛОЖЕНИЯ)''', '', words)
    # где...  177 857
    where = re.findall(r'где.+?(?=\)|;|$)', words)
    if not where == []:
        Where0.append(where)
        words = re.sub(r'где.+?(?=\)|;|$)', '', words)
    # партия
    partya0 = re.findall(r'партия.+?(?=с серийными|$)', words)
    par2 = re.findall(r'Партия', words)
    if not par2 == []:
        partya0 = re.findall(r'(?=в количестве).+$', words)
    if not partya0 == []:
        Partya0.append(partya0)
        words = re.sub(r'в количестве.+$', '', words)
        words = re.sub(r'партия.+?(?=с серийными|$)', '', words)
    # номера 5874 5875 7242 7243
    other_num = re.findall(
        r'((зав(одск(ие|ой номер))|(с |)идентификацион).+?(?=\)|;|$))', words)
    ser_num = re.findall(r'((с |)серийны.+?(?=\)|;|$))', words)
    if not ser_num == []:
        ser_num = ser_num[0][0]
    rep_num = []
    rep_num = re.findall(r'(серий.+?серий){1}', words)
    if not rep_num == []:
        ser_num = re.findall(r'серийны.+?(?=\,|;|\)|$)', words)
    if not other_num == []:
        ser_num.append(other_num[0][0])
        words = re.sub(
            r'((зав(одск(ие|ой номер))|(с |)идентификацион).+?(?=\)|;|$))', '', words)
    if not ser_num == []:
        Ser_num0.append(ser_num)
        words = re.sub(r'(с |)серийны.+?(?=\)|;|$)', '', words)
    # в качестве
    asA = re.findall(r'в качестве.+$', words)
    if not asA == []:
        As_a0.append(asA)
        words = re.sub(r'в качестве.+$', '', words)
    # технические условия
    tec_con = re.findall(r'технические условия.+?(?=;|$)', words)
    if not tec_con == []:
        Tec_con0.append(tec_con)
        words = re.sub(r'технические условия.+?(?=;|$)', '', words)
    
    return Version0, Where0, Partya0, Ser_num0, Aplic0, As_a0, Tec_con0, words


def comma(words0):
    Iskl = []
    words = words0.replace(';', ',').split(', ')
    for i, word in enumerate(words):

        if(not i == len(words)-1):
            if(abs(len(words[i]) - len(words[i+1])) > 5):
                lenn = min(len(words[i]), len(words[i+1]))
                words[i] = words[i][slice(-lenn-1, len(words[i]))]
                words[i+1] = words[i+1][slice(-lenn-1, len(words[i+1]))]
        for word2 in words:
            fuz = fuzz.token_sort_ratio(word, word2)
            if fuz > 70 and fuz < 100:
                Iskl.append(word)
                Iskl.append(word2)
        Iskl = list(set(Iskl))
    return Iskl
