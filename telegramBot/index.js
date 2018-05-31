"use strict";
var path = require('path');
var commands = require('./comands.js');
var Text = require('./models/text.js');
var mongoose = require('mongoose');

//connect to db mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://SpanriDb:nysha2161@ds117540.mlab.com:17540/telegram_bot');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('DB connected!'));const http = require('http');

const ip = process.env.IP || 'localhost';
const port = process.env.PORT || 8080;
const url = `https://telegram.me/${process.env.CHANNEL}`;
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(`This is Sinfest bot on <a href = '${url}'>${url}</a>`)
})
server.listen(port);
console.log(`Server listening at http://${ip}:${port}/`);

