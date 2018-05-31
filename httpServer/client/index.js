#!/usr/bin/env node

//подключаем модуль для работы с консолью
const program = require('commander');
//это чет не робит, для связи с сервером
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//опции (например node client -t выведет 'Test successful', 
//а если написать node client --help, в описании опций будет -t|--test Test app)
program
.version('0.0.1')
.option('-t, --test', 'Test app')
.option('-g, --greeting', 'Greet with user');

//более сложное, действия, нужно для работы с вводимыми данными
//вводим sum 2 5, запускается action, выводится сумма (чисто показать на легком примере, как это работает)
program
.command('sum <a> <b>')
.alias('s')
.description('Sum 2 numbers')
.action(function(a,b){
    let sum = Number(a)+Number(b);
    console.log(`Sum: ${sum}`);
})

//не робит, надо связаться с сервером и отдать с сервера data
//щас выводит ток тож самое, что ввели
program
.command('cat <filename>')
.action(function (filename) {
    console.log('cat ' + filename);
        // var req = new XMLHttpRequest();
    // req.open('POST', 'localhost:8080/cat', true);
    // req.send("filename=" + encodeURIComponent(filename));
    // console.log(req.responseText);

    // var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    // xmlhttp.open('POST', 'localhost:8080/cat', true); // Открываем асинхронное соединение
    // xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    // xmlhttp.send("filename=" + encodeURIComponent(filename)); // Отправляем POST-запрос
    // xmlhttp.onreadystatechange = function () { // Ждём ответа от сервера
    //     if (xmlhttp.readyState == 4) { // Ответ пришёл
    //         if (xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
    //             console.log(xmlhttp.responseText); // Выводим ответ сервера
    //         }
    //     }
    // }
})

//в конце нужно ввести эту команду, так сказано в документации, это для работы с консолью
program.parse(process.argv);

//обработка опций
if (program.test) {
    console.log('Test successful!');
}
if (program.greeting) {
    console.log('Hello, my master');
}
