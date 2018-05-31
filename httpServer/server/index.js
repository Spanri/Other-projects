#!/usr/bin/env node

//дополнительно подключаем http, это сервер
//fs это модуль для работы с путями (чтобы файл читать)
//express и router. express - фреймворк для node js, его все юзают,
//я не знаю, как без него, на чистом node js запросы писать хд
var http = require("http");
const program = require('commander');
var fs = require('fs');
var express = require('express');
var router = express.Router();

//обработка запроса cat (router эт как раз для express)
router.post('/cat', function(req, res, next) {
  //читаем файл, имя которого передаем в параметре filename
  fs.readFile(res.body.filename, 'utf8', function(err, data) {
    if (err) throw err;

    console.log(data);
  });
});

var server = http.createServer(function(req, res) {
  console.log('Connect to client');
  res.write('Hello World!');
  res.end();
});

//запускаем сервер по порту 8080, то есть если в браузере, например (но не обязательно, можно через разные программы, которые позволяют
//обращаться к серверам, просто браузер - самое легкое)... крч если в браузере открыть localhost:8080, там будет результат функции-колбэка
//createServer, которая выше (Hello World! напишет)
var port = 8080;
server.listen(port,function(){
    console.log(`Server is listening on port ${port}`);
});