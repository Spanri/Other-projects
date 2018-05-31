"use strict";
var path = require('path');
var add = require('./additional.js');
var Text = require('./models/text.js');

// для телеграм бота
var TelegramBot = require('node-telegram-bot-api');
var token = '573532869:AAF3JRYz74iyP33RWPm0sJCbWTRlMKrM5ag';
var bot = new TelegramBot(token, { polling: true });

/// оценка бота ///

// опции для кнопок
var options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Люблю тебя, бот', callback_data: '1' }],
            [{ text: 'Не люблю тебя, бот', callback_data: '2' }]
        ]
    })
};

// команда для оценки
bot.onText(/\/est/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Выбери чето)))))", options);    
});

// обработка нажатия на кнопку
bot.on('callback_query', async function (msg) {
    const chatId = msg.chat.id;

    if ("1" == msg.data) {
        await bot.sendMessage(chatId, 'Взаимно)))))');
    } else {
        await bot.sendMessage(chatId, 'Это потому, что я не человек??(((((');
    }
});

/// конец оценки бота ///

// создать шутку
bot.onText(/\/create (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;

    // найти все шутки, чтобы посчитать их кол-во
    var count = await Text.find().exec();

    // создать шутку
    const JokeToCreate = {
        name: count.length+1,
        text: match[1]
    };
    const joke = await Text.create(JokeToCreate);

    await bot.sendMessage(chatId, "Шутка помещена в базу шуток))))")
    menu(chatId);
});

// вывести рандомную шутку
bot.onText(/\/joke/, async (msg) => {
    const chatId = msg.chat.id;

    // найти все шутки, чтобы посчитать их кол-во
    var count = await Text.find().exec();

    //найти рандомную шутку по имени и вывести
    var joke = await Text.findOne({name: add.randomInteger(1, count.length - 1)}).exec();
    if (!joke) {
        await bot.sendMessage(chatId, "Чето пошло не так...");
        //console.log(count.length);
        //console.log(add.randomInteger(0, count.length));
    }
    else 
        await bot.sendMessage(chatId, joke.text);
    menu(chatId);
});

// эхо-запрос, прост так
bot.onText(/\/echo (.+)/, async (msg, match) => {  
    const chatId = msg.chat.id;
    const resp = match[1];
    await bot.sendMessage(chatId, resp);
    menu(chatId);
});

// старт
bot.onText(/\/start/, (msg, match) => {  
    const chatId = msg.chat.id;
    menu(chatId);
});

function menu(chatId){
    bot.sendMessage(
        chatId, 
        '/est - оценить бота\n' +
        '/echo + текст - эхо-запрос\n' +
        '/joke - вывести рандомную шутку\n' +
        '/create + текст шутки - создать шутку'
    );
}