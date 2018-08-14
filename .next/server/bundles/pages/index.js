module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Done.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\gamebank\\gamestarfaucet\\components\\Done.js";


var Done = function Done(_ref) {
  var props = _ref.props;
  var _props$state$createRe = props.state.createResult,
      active = _props$state$createRe.active,
      activePubkey = _props$state$createRe.activePubkey,
      owner = _props$state$createRe.owner,
      ownerPubkey = _props$state$createRe.ownerPubkey,
      posting = _props$state$createRe.posting,
      postingPubkey = _props$state$createRe.postingPubkey;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "\u606D\u559C\u60A8\uFF0C\u60A8\u5DF2\u5B8C\u6210\u6CE8\u518C"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "active"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, active), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "activePubkey"), activePubkey, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "owner"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, owner), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "ownerPubkey"), ownerPubkey, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "posting"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, posting), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "postingPubkey"), postingPubkey);
};

/* harmony default export */ __webpack_exports__["a"] = (Done);

/***/ }),

/***/ "./components/Email.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "D:\\gamebank\\gamestarfaucet\\components\\Email.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Eamil =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Eamil, _React$Component);

  function Eamil() {
    var _this;

    _classCallCheck(this, Eamil);

    _this = _possibleConstructorReturn(this, (Eamil.__proto__ || Object.getPrototypeOf(Eamil)).call(this));
    _this.state = {
      EamilValue: "",
      errorMessage: undefined,
      codeError: undefined
    };
    return _this;
  }

  _createClass(Eamil, [{
    key: "EamilValue",
    value: function EamilValue(event) {
      var value = event.target.value;

      if (value === '') {
        this.setState({
          errorMessage: undefined
        });
        return;
      }

      var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");

      if (reg.test(value)) {
        this.setState({
          EamilValue: value,
          errorMessage: undefined
        });
      } else {
        this.setState({
          errorMessage: '邮箱格式不正确'
        });
      }
    }
  }, {
    key: "confirmEmail",
    value: function confirmEmail() {
      var EamilValue = this.state.EamilValue.trim();

      if (!this.state.errorMessage && EamilValue) {
        this.props.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__store__["c" /* confirmEmail */])(EamilValue, this.props.props.state.user));
      }
    }
  }, {
    key: "codeValue",
    value: function codeValue(event) {
      var value = event.target.value;

      if (value === '') {
        this.setState({
          codeError: undefined
        });
        return;
      }

      var reg = /^[0-9]+.?[0-9]*$/;

      if (!reg.test(value) || value.length !== 6) {
        this.setState({
          codeError: '验证码必须是6位数字'
        });
        return;
      } else {
        this.setState({
          codeValue: value,
          codeError: undefined
        });
      }
    }
  }, {
    key: "next",
    value: function next() {
      if (!this.state.errorMessage && !this.state.codeError) {
        this.props.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__store__["b" /* confirmCode */])({
          codeValue: this.state.codeValue,
          emailValue: this.state.EamilValue,
          userName: this.props.props.state.user
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          errorMessage = _state.errorMessage,
          codeError = _state.codeError;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "\u8F93\u5165E-mail\u5730\u5740"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        style: {
          fontSize: "18px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "\u6211\u4EEC\u9700\u8981\u786E\u8BA4\u662F\u5426\u5B58\u5728"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        onChange: function onChange(event) {
          _this2.EamilValue(event);
        },
        style: {
          width: "85%",
          height: "40px",
          lineHeight: "40px",
          paddingLeft: "15px",
          boxSizing: "border-box",
          borderRadius: "5px",
          outline: "none",
          border: "1px solid #eeeeee"
        },
        type: "text",
        placeholder: "\u90AE\u7BB1\u5730\u5740",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.confirmEmail();
        },
        style: {
          width: "15%",
          height: "40px",
          cursor: "pointer",
          background: "#108ee9",
          border: "0",
          color: "#fff"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "\u53D1\u9001\u9A8C\u8BC1\u7801")), errorMessage && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, errorMessage), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        onChange: function onChange(event) {
          _this2.codeValue(event);
        },
        style: {
          width: "100%",
          height: "40px",
          lineHeight: "40px",
          paddingLeft: "15px",
          boxSizing: "border-box",
          borderRadius: "5px",
          outline: "none",
          marginTop: "15px",
          border: "1px solid #eeeeee"
        },
        type: "text",
        placeholder: "\u9A8C\u8BC1\u7801",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), codeError && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, codeError), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.next();
        },
        style: {
          cursor: "pointer",
          width: "90%",
          marginTop: "20px",
          borderRadius: "5px",
          height: "40px",
          border: "0",
          color: "#fff",
          fontSize: "18px",
          background: "#108ee9"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "\u7EE7\u7EED"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        onClick: function onClick() {
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__store__["e" /* decrementCount */])());
        },
        style: {
          cursor: "pointer",
          width: "90%",
          marginTop: "20px",
          borderRadius: "5px",
          height: "40px",
          textAlign: "center",
          color: "#108ee9",
          fontSize: "18px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "\u8FD4\u56DE"));
    }
  }]);

  return Eamil;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Eamil);

/***/ }),

/***/ "./components/Password.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "D:\\gamebank\\gamestarfaucet\\components\\Password.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Code =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code() {
    var _this;

    _classCallCheck(this, Code);

    _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this));
    _this.state = {
      errorMessage: undefined,
      password: ""
    };
    return _this;
  }

  _createClass(Code, [{
    key: "password",
    value: function password(event) {
      var value = event.target.value;
      this.setState({
        password: value,
        errorMessage: undefined
      });
    }
  }, {
    key: "confirmCode",
    value: function confirmCode() {
      this.props.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__store__["d" /* createAcount */])({
        password: this.state.password,
        userName: this.props.props.state.user,
        Email: this.props.props.state.Email
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errorMessage = this.state.errorMessage;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "\u8F93\u5165\u5BC6\u7801"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        style: {
          fontSize: "18px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "\u5BC6\u7801\u8F93\u5165"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        onChange: function onChange(event) {
          _this2.password(event);
        },
        style: {
          width: "100%",
          height: "40px",
          lineHeight: "40px",
          paddingLeft: "15px",
          boxSizing: "border-box",
          borderRadius: "5px",
          outline: "none",
          border: "1px solid #eeeeee"
        },
        type: "text",
        placeholder: "\u5BC6\u7801",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), errorMessage && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, errorMessage), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.confirmCode();
        },
        style: {
          cursor: "pointer",
          width: "90%",
          marginTop: "20px",
          borderRadius: "5px",
          height: "40px",
          border: "0",
          color: "#fff",
          fontSize: "18px",
          background: "#108ee9"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "\u7EE7\u7EED"));
    }
  }]);

  return Code;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Code);

/***/ }),

/***/ "./components/Show_desc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("./store.js");
var _jsxFileName = "D:\\gamebank\\gamestarfaucet\\components\\Show_desc.js";



var ShowDesc = function ShowDesc(_ref) {
  var props = _ref.props;
  var dispatch = props.dispatch;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Sign up options"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "gamebank is not a typical social app. It's powered by the gamebank blockchain."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "The gamebank blockchain powers many real time content apps like gamebank, and is run by community members all around the world. To help protect them against bots and name squatters, a small fee is charged to create new accounts."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "We're happy to cover this fee for you but we'll need your email and phone number to manually check that you're a real person. This process could take 1-2 weeks."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "If you'd like to skip the queue or stay anonymous, you can pay the account creation fee using a third party service."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    onClick: function onClick() {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__store__["f" /* incrementCount */])());
    },
    style: {
      color: "#fff",
      background: "#4ba2f2",
      outline: "none",
      width: "120px",
      fontSize: "16px",
      textAlign: "center",
      letterSpacing: "5px",
      border: "0",
      borderRadius: "10px",
      height: "40px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "\u7ACB\u5373\u6CE8\u518C"));
};

/* harmony default export */ __webpack_exports__["a"] = (ShowDesc);

/***/ }),

/***/ "./components/Steps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\gamebank\\gamestarfaucet\\components\\Steps.js";


var Steps = function Steps(_ref) {
  var props = _ref.props;
  var gray = {
    width: "10px",
    height: "10px",
    background: "#eff4f8",
    borderRadius: "100%",
    margin: "0 5px"
  };
  var blue = {
    width: "15px",
    height: "15px",
    background: "#4ba2f2",
    borderRadius: "100%",
    margin: "0 5px"
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/images/log.jpg",
    alt: "my image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: props.count == 0 ? blue : gray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: props.count == 1 ? blue : gray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: props.count == 2 ? blue : gray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: props.count == 3 ? blue : gray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: props.count == 4 ? blue : gray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Steps);

/***/ }),

/***/ "./components/UserName.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "D:\\gamebank\\gamestarfaucet\\components\\UserName.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var UserName =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserName, _React$Component);

  function UserName() {
    var _this;

    _classCallCheck(this, UserName);

    _this = _possibleConstructorReturn(this, (UserName.__proto__ || Object.getPrototypeOf(UserName)).call(this));
    _this.state = {
      userName: "",
      errorMessage: undefined
    };
    return _this;
  }

  _createClass(UserName, [{
    key: "changeValue",
    value: function changeValue(event) {
      var InputValue = event.target.value;

      if (InputValue.length > 0 && InputValue.length < 2) {
        this.setState({
          errorMessage: "用户名过短"
        });
      } else {
        this.setState({
          userName: InputValue,
          errorMessage: undefined
        }); // const TypeInputValue=typeof (Number(InputValue.slice(0,1)))
        // if(TypeInputValue=='number'){
        //     this.setState({
        //         errorMessage:"用户名不能已数字开头"
        //     })
        //  } else{
        //     this.setState({
        //         errorMessage:undefined
        //     })
        //  }
      }
    }
  }, {
    key: "next",
    value: function next() {
      var _state = this.state,
          errorMessage = _state.errorMessage,
          userName = _state.userName;

      if (!userName) {
        this.setState({
          errorMessage: '请输入您的用户名'
        });
      }

      if (!errorMessage && userName) {
        this.props.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* checkUserName */])(userName));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errorMessage = this.state.errorMessage;
      var repeatUserName = this.props.props.state.repeatUserName;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "\u5F00\u59CB"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        style: {
          fontSize: "18px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "\u9009\u62E9\u4E00\u4E2A\u7528\u6237\u540D. \u5B83\u662F\u4F60\u5728gamebank\u548C\u6240\u6709\u57FA\u4E8Egamebank\u5E94\u7528\u7684\u6807\u5FD7."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        onChange: function onChange(event) {
          _this2.changeValue(event);
        },
        style: {
          width: "100%",
          height: "40px",
          lineHeight: "40px",
          paddingLeft: "15px",
          boxSizing: "border-box",
          borderRadius: "5px",
          outline: "none",
          border: "1px solid #eeeeee"
        },
        type: "text",
        placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u7528\u6237\u540D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), (errorMessage || repeatUserName) && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, errorMessage || '用户名重复'), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.next();
        },
        style: {
          cursor: "pointer",
          width: "90%",
          marginTop: "20px",
          borderRadius: "5px",
          height: "40px",
          border: "0",
          color: "#fff",
          fontSize: "18px",
          background: "#108ee9"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "\u7EE7\u7EED"));
    }
  }]);

  return UserName;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (UserName);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Steps__ = __webpack_require__("./components/Steps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Show_desc__ = __webpack_require__("./components/Show_desc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_UserName__ = __webpack_require__("./components/UserName.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Email__ = __webpack_require__("./components/Email.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Password__ = __webpack_require__("./components/Password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Done__ = __webpack_require__("./components/Done.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store__ = __webpack_require__("./store.js");
var _jsxFileName = "D:\\gamebank\\gamestarfaucet\\pages\\index.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          state = _props.state;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          width: "100%",
          margin: "0 auto",
          background: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          width: "40%",
          height: "100%",
          background: "#fff",
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Steps__["a" /* default */], {
        props: state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), state.count === 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Show_desc__["a" /* default */], {
        props: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), state.count === 1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_UserName__["a" /* default */], {
        props: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), state.count === 2 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Password__["a" /* default */], {
        props: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), state.count === 3 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Done__["a" /* default */], {
        props: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req;
      reduxStore.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__store__["h" /* serverRenderClock */])(isServer));
      return {};
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    state: _objectSpread({}, state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps)(Index));

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actionTypes */
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return incrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return confirmEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createAcount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return decrementCount; });
/* unused harmony export resetCount */
/* harmony export (immutable) */ __webpack_exports__["g"] = initializeStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__untl_axios__ = __webpack_require__("./untl/axios.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var InitialState = {
  lastUpdate: 0,
  steps: ['seting', 'checkUserName', 'checkEmail', 'done'],
  light: false,
  user: undefined,
  repeatUserName: false,
  count: 0,
  Email: "",
  sendEmailError: "",
  createResult: {}
};
var actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHECKUSERNAME: "checkUserName",
  CONFIRMEMAIL: "confirmEmail",
  CONFIRMECODE: "CONFIRMECODE",
  DONE: "DONE" // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });

    case actionTypes.CHECKUSERNAME:
      if (action.payload.repeatUserName) {
        return Object.assign({}, state, {
          count: state.count,
          user: action.payload.user,
          repeatUserName: action.payload.repeatUserName
        });
      } else {
        return Object.assign({}, state, {
          count: state.count + 1,
          user: action.payload.user
        });
      }

    case actionTypes.CONFIRMEMAIL:
      return Object.assign({}, state, {
        count: state.count,
        Email: action.payload.Email,
        sendEmailError: action.payload.error
      });

    case actionTypes.CONFIRMECODE:
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case actionTypes.DONE:
      return Object.assign({}, state, {
        count: state.count + 1,
        createResult: action.payload.result
      });

    case actionTypes.ERROR:
      return Object.assign({}, state, {
        count: state.count,
        createResult: action.payload.result
      });

    default:
      return state;
  }
}; // ACTIONS

var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.TICK,
      light: !isServer,
      ts: Date.now()
    });
  };
}; // 下一步

var incrementCount = function incrementCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.INCREMENT
    });
  };
}; // 检查用户名

var checkUserName = function checkUserName(userName) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var result, repeatUserName;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__untl_axios__["a" /* fetchPost */])({
                  url: "/checkUserName",
                  data: {
                    userName: userName
                  }
                });

              case 2:
                result = _context.sent;
                repeatUserName = false;

                if (result.data.user.length > 0) {
                  repeatUserName = true;
                }

                ;
                return _context.abrupt("return", dispatch({
                  type: actionTypes.CHECKUSERNAME,
                  payload: {
                    user: userName,
                    repeatUserName: repeatUserName
                  }
                }));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}; // 发送邮件

var confirmEmail = function confirmEmail(email, userName) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__untl_axios__["a" /* fetchPost */])({
                  url: "/confirmEmil",
                  data: {
                    mail: email,
                    userName: userName
                  }
                });

              case 2:
                result = _context2.sent;

                if (!result.data.success) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", dispatch({
                  type: actionTypes.CONFIRMEMAIL,
                  payload: {
                    Email: email
                  }
                }));

              case 7:
                return _context2.abrupt("return", dispatch({
                  type: actionTypes.CONFIRMEMAIL,
                  payload: {
                    error: result.data.msg
                  }
                }));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}; //验证码验证

var confirmCode = function confirmCode(options) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch) {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__untl_axios__["a" /* fetchPost */])({
                  url: "/confirmCode",
                  data: options
                });

              case 2:
                result = _context3.sent;
                return _context3.abrupt("return", dispatch({
                  type: actionTypes.CONFIRMECODE
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}; // 创建账号

var createAcount = function createAcount(options) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(dispatch) {
        var result, fakeClick, exportRaw;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__untl_axios__["a" /* fetchPost */])({
                  url: "/createCount",
                  data: options
                });

              case 2:
                result = _context4.sent;

                if (!result.data.success) {
                  _context4.next = 10;
                  break;
                }

                fakeClick = function fakeClick(obj) {
                  var ev = document.createEvent("MouseEvents");
                  ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                  obj.dispatchEvent(ev);
                };

                exportRaw = function exportRaw(name, data) {
                  var urlObject = window.URL || window.webkitURL || window;
                  var export_blob = new Blob([data]);
                  var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                  save_link.href = urlObject.createObjectURL(export_blob);
                  save_link.download = name;
                  fakeClick(save_link);
                };

                exportRaw('密码组.txt', JSON.stringify(result.data.private));
                return _context4.abrupt("return", dispatch({
                  type: actionTypes.DONE,
                  payload: {
                    result: result.data.private
                  }
                }));

              case 10:
                return _context4.abrupt("return", dispatch({
                  type: actionTypes.ERROR,
                  payload: {
                    result: result.data.msg
                  }
                }));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var decrementCount = function decrementCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.DECREMENT
    });
  };
};
var resetCount = function resetCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RESET
    });
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a)));
}

/***/ }),

/***/ "./untl/axios.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

var fetchPost = function fetchPost(options) {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
    method: 'post',
    crossDomain: true,
    url: options.url,
    baseURL: "http://192.168.1.101:3000",
    data: options.data
  });
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map