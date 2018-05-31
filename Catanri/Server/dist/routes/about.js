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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 5 */,
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
/* 7 */,
/* 8 */,
/* 9 */,
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

/***/ })
/******/ ]);