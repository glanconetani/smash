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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/App.js":
/*!***************************!*\
  !*** ./client/src/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/HomePage.jsx */ \"./client/src/pages/HomePage.jsx\");\n/* harmony import */ var _pages_About_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/About.jsx */ \"./client/src/pages/About.jsx\");\n/* harmony import */ var _pages_CharacterPage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/CharacterPage.jsx */ \"./client/src/pages/CharacterPage.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        exact: true,\n        path: \"/\",\n        component: _pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        exact: true,\n        path: \"/about\",\n        component: _pages_About_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        exact: true,\n        path: \"/:id\",\n        component: _pages_CharacterPage_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./client/src/App.js?");

/***/ }),

/***/ "./client/src/Components/NavigationBar.jsx":
/*!*************************************************!*\
  !*** ./client/src/Components/NavigationBar.jsx ***!
  \*************************************************/
/*! exports provided: NavBar, Content, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    background-color: #111;\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nbackground-color: #669;\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());\n\nvar NavigationBar =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NavigationBar, _Component);\n\n  function NavigationBar() {\n    _classCallCheck(this, NavigationBar);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NavigationBar).apply(this, arguments));\n  }\n\n  _createClass(NavigationBar, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBar, null, \"NavBar Link 1 Link 2\"));\n    }\n  }]);\n\n  return NavigationBar;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);\n\n//# sourceURL=webpack:///./client/src/Components/NavigationBar.jsx?");

/***/ }),

/***/ "./client/src/Components/SmashTable.jsx":
/*!**********************************************!*\
  !*** ./client/src/Components/SmashTable.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_thumbnails_Mario_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/thumbnails/Mario.png */ \"./images/thumbnails/Mario.png\");\n/* harmony import */ var _images_thumbnails_Mario_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_thumbnails_Mario_png__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar SmashTable =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(SmashTable, _Component);\n\n  function SmashTable() {\n    _classCallCheck(this, SmashTable);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(SmashTable).apply(this, arguments));\n  }\n\n  _createClass(SmashTable, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Mario\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: __webpack_require__(/*! ../../../images/full/Mario.png */ \"./images/full/Mario.png\"),\n        alt: \"Mario\"\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Donkey_Kong\"\n      }, \"Donkey Kong\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Link\"\n      }, \"Link\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Kirby\"\n      }, \"Kirby\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Fox\"\n      }, \"Fox\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Pikachu\"\n      }, \"Pikachu\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Luigi\"\n      }, \"Luigi\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Ness\"\n      }, \"Ness\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Captain_Falcon\"\n      }, \"Captain Falcon\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Jigglypuff\"\n      }, \"Jigglypuff\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Peach\"\n      }, \"Peach\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Daisy\"\n      }, \"Daisy\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Zelda\"\n      }, \"Zelda\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Dr._Mario\"\n      }, \"Dr. Mario\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Pichu\"\n      }, \"Pichu\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Falco\"\n      }, \"Falco\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Marth\"\n      }, \"Marth\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Lucina\"\n      }, \"Lucina\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Zero_Suit_Samus\"\n      }, \"Zero Suit Samus\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Wario\"\n      }, \"Wario\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/Snake\"\n      }, \"Snake\")))));\n    }\n  }]);\n\n  return SmashTable;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SmashTable);\n\n//# sourceURL=webpack:///./client/src/Components/SmashTable.jsx?");

/***/ }),

/***/ "./client/src/pages/About.jsx":
/*!************************************!*\
  !*** ./client/src/pages/About.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar About =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(About, _Component);\n\n  function About() {\n    _classCallCheck(this, About);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(About).apply(this, arguments));\n  }\n\n  _createClass(About, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"About us\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"This website is intended to provide relevant information for entry-level and beginner players to the video game Smash Ultimate. Other database style Smash 4 websites that provide information for players are geared towards experienced players that want very complex information. This website aims to fill the gap. Beginners can get the essential information regarding the character of their choice without feeling overwhelmed.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Group Name: Celadon\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Team Members\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Grace Anconetani\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/28059176_1556472821133744_5384015223063068067_n.jpg?_nc_cat=100&_nc_oc=AQnx6lhAvB6JuelkLNIZ5dO4h7gFfbWUEyK9CvSc1ZNud7G8pRM5teLalo1t5IpjV_0&_nc_ht=scontent.fftw1-1.fna&oh=69e4b8bfaea02e82e4fe009c82648cab&oe=5E53BFAA\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Grace is a 4th year ECE major with tech cores in Software and Academic Enrichment. Grace is responsible for front-end design. \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Grace has a total of 9 commits and 0 unit tests.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Jake Andre\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/16711644_10202879577186791_1824655584936966991_n.jpg?_nc_cat=109&_nc_oc=AQkA3x1kapQGXu2F_Dg-MT3EbqMvnUehJ1OQEsKXhqTMC3rb87GNnowCwY_fCzq3d18&_nc_ht=scontent.fftw1-1.fna&oh=cbcaf07bf4ee27bb6f5d139eb575f2b7&oe=5E5E2DDA\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Jake is 4th year ECE major with tech cores in Software and Integrated Circuits. Jake is responisble for front-end design. \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Jake has a total of 20 commits and 1 unit test\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Sakar Khadka\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-1/1907918_791566744241977_2062132824891958511_n.jpg?_nc_cat=106&_nc_oc=AQn88i1WNq1I-8TOxcXhBMmcviEaFbAlOmbCUHWb84VWtOODCEw3Jng2fgV8bSESKrQ&_nc_ht=scontent.fftw1-1.fna&oh=02a6ed019575dc3246adea64c1a1b008&oe=5E271829\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Sakar Khadka is a 4th year ECE major with tech cores in Software and Academic Enrichment. He is repsonsible for back-end design. \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Sakar has a total of 0 commits and 0 unit tests.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Shishir Khadka\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/46002440_1980562665342373_3934667561894936576_n.jpg?_nc_cat=101&_nc_oc=AQn3pzfnCKcShZhYU7WGj2pquFgI8mMzL4yqqShK1gGJZQHr3YOE9h92vF5LMlYs-Z0&_nc_ht=scontent.fftw1-1.fna&oh=0f58ec3ca9534cfbcbc1817d89f6b547&oe=5E52A814\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Shishir Khadka is a 4th year ECE major with tech cores in Software and Academic Enrichment He is responsible for back-end design. \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Shishir has a total of 0 commits and 0 unit tests.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Esha Makwana\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/14034775_1745285052411444_1249948486777613532_n.jpg?_nc_cat=110&_nc_oc=AQkFDpluYXFXgC4vmHfZGbcExpzu0IPiNWBuRJ92pu6rk6eC6awHzZ0FZTx8cjXe5Q4&_nc_ht=scontent.fftw1-1.fna&oh=f8b9d8bd1b770ef46362e994f1b475e1&oe=5E64EA34\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Esha Makwana is a 4th year ECE major with tech cores in Software and Academic Enrichment. She is responsible for front-end design.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Esha has a total of 0 commits and 0 unit tests\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Danny Maclean\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/21232060_518951681782054_3551451326518237878_n.jpg?_nc_cat=103&_nc_oc=AQldkBGyc29Wle6XaXm7JbCcN5DD4XGdI3gMxRS2_nrJozO467qhoH3ACoX87_LtMRA&_nc_ht=scontent.fftw1-1.fna&oh=64880d92b09f7ed32643a349e3f1eaef&oe=5E2204FC\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Danny Maclean is a 4th year ECE major with tech cores in Software and computer architecture. He is responsible for the back-end design.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Danny has a total of 2 commits and 0 unit tests\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Maximiliano Perez\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/22851798_1661196610597772_5777857504645349981_n.jpg?_nc_cat=100&_nc_oc=AQnLJFSI99xnG6Q8Pi_558s0DEscvRs0WE4o_gajnrtp5oweZjXT6s1F6Q294Bk_ZRY&_nc_ht=scontent.fftw1-1.fna&oh=66924c00261573630ef86f0c78b4b51d&oe=5E1895E2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Maximiliano Perez is a 4th year ECE major with tech cores in Power Systems and Software. He is responsible for the back-end design. \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Maximiliano has a total of 8 commits and 0 unit tests.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Data Used\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"All of the data that we got was retrieved from this \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://github.com/Frannsoft/FrannHammer/wiki\"\n      }, \"API\"), \". There was more information than was needed so we \\\"scraped\\\" from within our back-end server and made new tables in our data base only with the information that we needed.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Tools Used\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"The tool we used for the front-end portion of this project is React. This is a javascript library for building user interfaces. It facilitates the process of creating UIs\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"The tools we used for the back-end portion of this project are MySQL, Express, and Node.js MySQL is a database management system. This allows users to create tables that organize data related to their application. Express is a Node.js web appliaction framework that provides a set of features for web and mobile applications. Node.js is Javascript runtime environment that executes Javascript code outside of browser.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"The other tool we used is Amazon Web Services. This was used to host our database and our website.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Stats\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Total Commits:39\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Total Unit Tests: 1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Total Issues: 10 \"))));\n    }\n  }]);\n\n  return About;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/pages/About.jsx?");

/***/ }),

/***/ "./client/src/pages/CharacterPage.jsx":
/*!********************************************!*\
  !*** ./client/src/pages/CharacterPage.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CharacterPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar CharacterPage =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CharacterPage, _Component);\n\n  function CharacterPage() {\n    _classCallCheck(this, CharacterPage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CharacterPage).apply(this, arguments));\n  }\n\n  _createClass(CharacterPage, [{\n    key: \"render\",\n    value: function render() {\n      var character = this.props.location.pathname.split('/')[1];\n      console.log(this.props);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, character), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Picture\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Attributes\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Weight\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Moves\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Move Name and Damage\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Comments\"));\n    }\n  }]);\n\n  return CharacterPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/pages/CharacterPage.jsx?");

/***/ }),

/***/ "./client/src/pages/HomePage.jsx":
/*!***************************************!*\
  !*** ./client/src/pages/HomePage.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_SmashTable_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/SmashTable.jsx */ \"./client/src/Components/SmashTable.jsx\");\n/* harmony import */ var _Components_NavigationBar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/NavigationBar.jsx */ \"./client/src/Components/NavigationBar.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar HomePage =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(HomePage, _Component);\n\n  function HomePage() {\n    _classCallCheck(this, HomePage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));\n  }\n\n  _createClass(HomePage, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Welcome to SmashDB!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_NavigationBar_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/about\"\n      }, \" About Us \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SmashTable_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/pages/HomePage.jsx?");

/***/ }),

/***/ "./images/full/Mario.png":
/*!*******************************!*\
  !*** ./images/full/Mario.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./images/full/Mario.png?");

/***/ }),

/***/ "./images/thumbnails/Mario.png":
/*!*************************************!*\
  !*** ./images/thumbnails/Mario.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./images/thumbnails/Mario.png?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_src_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/src/App.js */ \"./client/src/App.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar serialize = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\"); //var db = require('./db');\n\n\nvar PORT = process.env.HTTP_PORT || 4001;\nvar app = express();\napp.use('/static', express[\"static\"](path.join(__dirname, 'public')));\nconsole.log(__dirname);\nvar characters = {};\napp.get('/*', function (req, res) {\n  var context = {};\n  var component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_src_App_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    characters: characters\n  }));\n  var ss_react = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(component);\n  res.writeHead(200, {\n    \"Content-Type\": \"text/html\"\n  });\n  res.end(htmlTemplate(component));\n});\n\nfunction htmlTemplate(component) {\n  return \"\\n        <!DOCTYPE html>\\n        <html>\\n        <head>\\n            <meta charset=\\\"utf-8\\\">\\n            <title>React SSR</title>\\n        </head>\\n\\n        <body>\\n            <div id=\\\"root\\\">\".concat(component, \"</div>\\n            <script>window.__INITIAL_DATA__ = \").concat(serialize(characters), \"</script>\\n            <script src=\\\"./static/index.js\\\"></script>\\n            <script src=\\\"./static/vendors~index.js\\\"></script>\\n        </body>\\n        </html>\\n    \");\n}\n\napp.listen(PORT, function () {\n  console.log(\"Server listening at port \".concat(PORT, \".\"));\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });