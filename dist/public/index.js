/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index.js": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/src/index.js","vendors~index.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/App.js":
/*!***************************!*\
  !*** ./client/src/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\client\\\\src\\\\App.js: Unexpected token (14:8)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mApp\\u001b[39m \\u001b[36mextends\\u001b[39m \\u001b[33mReact\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mComponent\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m  \\u001b[36mconst\\u001b[39m mapStateToProps \\u001b[33m=\\u001b[39m (state) \\u001b[33m=>\\u001b[39m ({\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m    name\\u001b[33m:\\u001b[39m state\\u001b[33m.\\u001b[39mdata\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m  })\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[0m\\n    at Object.raise (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6420:17)\\n    at Object.unexpected (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7773:16)\\n    at Object.parseClassMemberWithIsStatic (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10955:12)\\n    at Object.parseClassMember (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10851:10)\\n    at withTopicForbiddingContext (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10806:14)\\n    at Object.withTopicForbiddingContext (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9884:14)\\n    at Object.parseClassBody (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10783:10)\\n    at Object.parseClass (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10757:22)\\n    at Object.parseStatementContent (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10051:21)\\n    at Object.parseStatement (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10009:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10585:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10572:10)\\n    at Object.parseTopLevel (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9940:10)\\n    at Object.parse (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11447:17)\\n    at parse (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11483:38)\\n    at parser (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:168:34)\\n    at normalizeFile (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:102:11)\\n    at runSync (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (C:\\\\Users\\\\Jake\\\\Documents\\\\smash\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./client/src/App.js?");

/***/ }),

/***/ "./client/src/index.css":
/*!******************************!*\
  !*** ./client/src/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/index.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./client/src/index.css?");

/***/ }),

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./client/node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./client/src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./client/src/App.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./client/node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _server_store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../server/store.js */ \"./server/store.js\");\n\n\n\n\n\n\n\nvar store = Object(_server_store_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(window.REDUX);\n\nvar HydratedApp = function HydratedApp() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n};\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HydratedApp, null), document.getElementById('root')); // If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\n\n//# sourceURL=webpack:///./client/src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\r\\n  margin: '2em';\\r\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto\\\", \\\"Oxygen\\\",\\r\\n    \\\"Ubuntu\\\", \\\"Cantarell\\\", \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\",\\r\\n    sans-serif;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\ncode {\\r\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \\\"Courier New\\\",\\r\\n    monospace;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./client/src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./server/store.js":
/*!*************************!*\
  !*** ./server/store.js ***!
  \*************************/
/*! exports provided: fetchCharacters, initialize, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCharacters\", function() { return fetchCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar fetchCharacters = function fetchCharacters() {\n  return storeData({\n    \"name\": \"TestCharacter\"\n  });\n};\nvar initialize = function initialize() {\n  return {\n    type: \"INITIALIZE\"\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (initState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, initState);\n});\n\nvar storeData = function storeData(data) {\n  return {\n    type: \"STORE\",\n    data: data\n  };\n};\n\nvar reducer = function reducer(state, action) {\n  if (typeof state === \"undefined\") {\n    state = 0;\n  }\n\n  switch (action.type) {\n    case \"STORE\":\n      return action.data;\n\n    case \"INITIALIZE\":\n      return true;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./server/store.js?");

/***/ })

/******/ });