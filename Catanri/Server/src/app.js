"use strict";
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import ejwt from 'express-jwt';

const app = express();

import index from './routes';
import comment from './routes/comment';
import site from './routes/site';
import about from './routes/about';

app.use(express.static(__dirname + '/public'));
app.set('secret', '5i39Tq2wX00PC0QEuA350vi7oDB2nnq3');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//logging
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(ejwt({
  secret: app.get('secret')
}).unless({
  method: 'OPTIONS',
  path: [
    /\/*/,
    /\/comment\/*/,
    /\/site\/*/,
    /\/about\/*/
  ]
}));

//connect to db mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://catanridb:nysha2161@ds046047.mlab.com:46047/catanridb');
// mongodb://<dbuser>:<dbpassword>@ds046047.mlab.com:46047/catanridb
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('DB connected!'));

app.use('/', index);
app.use('/comment', comment);
app.use('/site', site);
app.use('/about', about);

const http = require('http');

const port = normalizePort(process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || '3000');
const hostname = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.set('port', port);
app.set('hostname', hostname);

const server = http.createServer(app);

server.listen(port, hostname);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

export default app;