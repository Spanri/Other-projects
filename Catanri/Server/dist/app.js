/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var comSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        index: true
    },
    comment: String
}, { versionKey: false });

module.exports = mongoose.model('Comment', comSchema);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var aboutSchema = mongoose.Schema({
    fetch: {
        type: String,
        required: [true, 'Fetch is required'],
        unique: true,
        index: true
    },
    desc: String
}, { versionKey: false });

module.exports = mongoose.model('About', aboutSchema);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res, next) {
  res.json({
    name: "Catanri",
    madeBy: "Spanri"
  });
});

exports.default = router;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _comments = __webpack_require__(5);

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

router.post('/', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var comToCreate, com;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        comToCreate = {
                            username: req.body.username,
                            comment: req.body.comment
                        };
                        _context.prev = 1;
                        _context.next = 4;
                        return _comments2.default.create(comToCreate);

                    case 4:
                        com = _context.sent;
                        return _context.abrupt('return', res.status(200).send({
                            status: 'ok',
                            message: 'Comment successfuly created'
                        }));

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](1);
                        return _context.abrupt('return', res.status(400).send({
                            status: 'error',
                            message: _context.t0.name
                        }));

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[1, 8]]);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}());

router.get('/', function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
        var com;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _comments2.default.find({}).exec();

                    case 3:
                        com = _context2.sent;

                        if (com) {
                            _context2.next = 6;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).send({
                            status: 'error',
                            message: 'Comment`s not found'
                        }));

                    case 6:
                        return _context2.abrupt('return', res.status(200).send({
                            status: 'ok',
                            message: 'Comment successfuly found',
                            comments: com
                        }));

                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2['catch'](0);
                        return _context2.abrupt('return', res.status(400).send({
                            status: 'error',
                            message: _context2.t0.name,
                            desc: _context2.t0
                        }));

                    case 12:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 9]]);
    }));

    return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
}());

exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res, next) {
  res.json({
    name: "Catanri",
    madeBy: "Spanri"
  });
});

exports.default = router;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _about = __webpack_require__(6);

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

router.post('/', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var about;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _about2.default.findOne({ fetch: req.body.fetch }).exec();

                    case 3:
                        about = _context.sent;

                        if (about) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', res.status(400).send({
                            status: 'error',
                            message: 'Fetch is not found'
                        }));

                    case 6:
                        about.desc = req.body.desc;
                        _context.next = 9;
                        return about.save();

                    case 9:
                        return _context.abrupt('return', res.status(200).send({
                            status: 'ok',
                            message: 'About successfuly changed on fetch ' + req.body.fetch
                        }));

                    case 12:
                        _context.prev = 12;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', res.status(400).send({
                            status: 'error',
                            message: _context.t0.name
                        }));

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 12]]);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}());

router.get('/', function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
        var about;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _about2.default.find({}).exec();

                    case 3:
                        about = _context2.sent;

                        if (about) {
                            _context2.next = 6;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).send({
                            status: 'error',
                            message: 'About`s is not found'
                        }));

                    case 6:
                        return _context2.abrupt('return', res.status(200).send({
                            status: 'ok',
                            message: 'About successfuly found',
                            about: about
                        }));

                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2['catch'](0);
                        return _context2.abrupt('return', res.status(400).send({
                            status: 'error',
                            message: _context2.t0.name
                        }));

                    case 12:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 9]]);
    }));

    return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
}());

router.get('/:id', function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
        var about;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _about2.default.findOne({ fetch: req.params.id }).exec();

                    case 3:
                        about = _context3.sent;

                        if (about) {
                            _context3.next = 6;
                            break;
                        }

                        return _context3.abrupt('return', res.status(400).send({
                            status: 'error',
                            message: 'Fetch is not found'
                        }));

                    case 6:
                        return _context3.abrupt('return', res.status(200).send({
                            status: 'ok',
                            message: 'About successfuly found',
                            about: about
                        }));

                    case 9:
                        _context3.prev = 9;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', res.status(400).send({
                            status: 'error',
                            message: _context3.t0.name
                        }));

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 9]]);
    }));

    return function (_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
    };
}());

exports.default = router;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(12);

var _fs2 = _interopRequireDefault(_fs);

var _morgan = __webpack_require__(13);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(14);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressJwt = __webpack_require__(15);

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

var _comment = __webpack_require__(8);

var _comment2 = _interopRequireDefault(_comment);

var _site = __webpack_require__(9);

var _site2 = _interopRequireDefault(_site);

var _about = __webpack_require__(10);

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname + '/public'));
app.set('secret', '5i39Tq2wX00PC0QEuA350vi7oDB2nnq3');
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//logging
var accessLogStream = _fs2.default.createWriteStream(_path2.default.join(__dirname, 'access.log'), { flags: 'a' });
app.use((0, _morgan2.default)('combined', { stream: accessLogStream }));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));

app.use((0, _expressJwt2.default)({
  secret: app.get('secret')
}).unless({
  method: 'OPTIONS',
  path: [/\/*/, /\/comment\/*/, /\/site\/*/, /\/about\/*/]
}));

//connect to db mongoose
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://catanridb:nysha2161@ds046047.mlab.com:46047/catanridb');
// mongodb://<dbuser>:<dbpassword>@ds046047.mlab.com:46047/catanridb
var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  return console.log('DB connected!');
});

app.use('/', _routes2.default);
app.use('/comment', _comment2.default);
app.use('/site', _site2.default);
app.use('/about', _about2.default);

var http = __webpack_require__(16);

var port = normalizePort(process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || '3000');
var hostname = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.set('port', port);
app.set('hostname', hostname);

var server = http.createServer(app);

server.listen(port, hostname);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
/******/ ]);