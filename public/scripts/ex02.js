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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ex02.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ex02.ts":
/*!*********************!*\
  !*** ./src/ex02.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n(function () {\n    var canvas = document.querySelector('canvas.ex01');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    var size = 300;\n    canvas.style.width = size + \"px\";\n    canvas.style.height = size + \"px\";\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, size, size);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, size - 40, size - 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex02-1');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 300;\n    canvas.width = canvasSize;\n    canvas.height = canvasSize;\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex02-2');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 300;\n    canvas.width = canvasSize;\n    canvas.height = canvasSize;\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    // CSSで見た目のサイズを設定する\n    var cssSize = 150;\n    canvas.style.width = cssSize + \"px\";\n    canvas.style.height = cssSize + \"px\";\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex03-1');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 200;\n    canvas.width = canvasSize;\n    canvas.height = canvasSize;\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    ctx.fillStyle = '#aaccff';\n    ctx.font = canvasSize - 40 + \"px Arial\";\n    ctx.textBaseline = 'top';\n    ctx.fillText('あ', 20, 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex03-2');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 200;\n    canvas.width = canvasSize;\n    canvas.height = canvasSize;\n    // CSSで見た目のサイズを設定する\n    // const cssSize = 300;\n    // canvas.style.width = cssSize + 'px';\n    // canvas.style.height = cssSize + 'px';\n    // 解像度に合わせた拡大率を指定する\n    var scale = window.devicePixelRatio;\n    ctx.scale(scale, scale);\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    ctx.fillStyle = '#aaccff';\n    ctx.font = canvasSize - 40 + \"px Arial\";\n    ctx.textBaseline = 'top';\n    ctx.fillText('あ', 20, 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex03-3');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    var scale = window.devicePixelRatio;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 200;\n    canvas.width = canvasSize * scale;\n    canvas.height = canvasSize * scale;\n    // 拡大率を指定する\n    ctx.scale(scale, scale);\n    // CSSで見た目のサイズを設定する\n    // const cssSize = 300;\n    // canvas.style.width = cssSize + 'px';\n    // canvas.style.height = cssSize + 'px';\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    ctx.fillStyle = '#aaccff';\n    ctx.font = canvasSize - 40 + \"px Arial\";\n    ctx.textBaseline = 'top';\n    ctx.fillText('あ', 20, 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex03-4');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    var scale = window.devicePixelRatio;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 200;\n    canvas.width = canvasSize * scale;\n    canvas.height = canvasSize * scale;\n    // 拡大率を指定する\n    ctx.scale(scale, scale);\n    // scaleで拡縮した見た目になったcanvasをstyleで本来のcanvasサイズに戻す\n    canvas.style.width = canvasSize + \"px\";\n    canvas.style.height = canvasSize + \"px\";\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    ctx.fillStyle = '#aaccff';\n    ctx.font = canvasSize - 40 + \"px Arial\";\n    ctx.textBaseline = 'top';\n    ctx.fillText('あ', 20, 40);\n})();\n\n\n//# sourceURL=webpack:///./src/ex02.ts?");

/***/ })

/******/ });