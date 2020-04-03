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
eval("\n(function () {\n    var canvas = document.querySelector('canvas.ex01');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    var size = 300;\n    canvas.style.width = size + \"px\";\n    canvas.style.height = size + \"px\";\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, size, size);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, size - 40, size - 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex02-1');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 300;\n    canvas.width = canvasSize;\n    canvas.height = canvasSize;\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex02-2');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 300;\n    canvas.width = canvasSize;\n    canvas.height = canvasSize;\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    // CSSで見た目のサイズを設定する\n    var cssSize = 150;\n    canvas.style.width = cssSize + \"px\";\n    canvas.style.height = cssSize + \"px\";\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex03-1');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 200;\n    canvas.width = canvasSize;\n    canvas.height = canvasSize;\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    ctx.fillStyle = '#aaccff';\n    ctx.font = canvasSize - 40 + \"px Arial\";\n    ctx.textBaseline = 'top';\n    ctx.fillText('あ', 20, 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex03-2');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 200;\n    canvas.width = canvasSize;\n    canvas.height = canvasSize;\n    // CSSで見た目のサイズを設定する\n    // const cssSize = 300;\n    // canvas.style.width = cssSize + 'px';\n    // canvas.style.height = cssSize + 'px';\n    // 解像度に合わせた拡大率を指定する\n    var scale = window.devicePixelRatio;\n    ctx.scale(scale, scale);\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    ctx.fillStyle = '#aaccff';\n    ctx.font = canvasSize - 40 + \"px Arial\";\n    ctx.textBaseline = 'top';\n    ctx.fillText('あ', 20, 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex03-3');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    var scale = window.devicePixelRatio;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 200;\n    canvas.width = canvasSize * scale;\n    canvas.height = canvasSize * scale;\n    // 拡大率を指定する\n    ctx.scale(scale, scale);\n    // CSSで見た目のサイズを設定する\n    // const cssSize = 300;\n    // canvas.style.width = cssSize + 'px';\n    // canvas.style.height = cssSize + 'px';\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    ctx.fillStyle = '#aaccff';\n    ctx.font = canvasSize - 40 + \"px Arial\";\n    ctx.textBaseline = 'top';\n    ctx.fillText('あ', 20, 40);\n})();\n(function () {\n    var canvas = document.querySelector('canvas.ex03-4');\n    if (!canvas)\n        return;\n    var ctx = canvas.getContext('2d');\n    if (!ctx)\n        return;\n    var scale = window.devicePixelRatio;\n    // 最初に要素のサイズを固定してから...\n    var canvasSize = 200;\n    canvas.width = canvasSize * scale;\n    canvas.height = canvasSize * scale;\n    // 拡大率を指定する\n    ctx.scale(scale, scale);\n    // scaleで拡縮した見た目になったcanvasをstyleで本来のcanvasサイズに戻す\n    canvas.style.width = canvasSize + \"px\";\n    canvas.style.height = canvasSize + \"px\";\n    ctx.fillStyle = '#0055aa';\n    ctx.fillRect(0, 0, canvasSize, canvasSize);\n    ctx.fillStyle = '#557799';\n    ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n    ctx.fillStyle = '#aaccff';\n    ctx.font = canvasSize - 40 + \"px Arial\";\n    ctx.textBaseline = 'top';\n    ctx.fillText('あ', 20, 40);\n})();\n// (() => {\n//   const srcCanvas = document.querySelector('canvas.ex03-3') as HTMLCanvasElement;\n//   const distCanvas = document.querySelector('canvas.ex04-1') as HTMLCanvasElement;\n//   const distImage = document.querySelector('img.ex04-1') as HTMLImageElement;\n//   if (!srcCanvas || !distCanvas || !distImage) return;\n//   const distCtx = distCanvas.getContext('2d');\n//   if (!distCtx) return;\n//   const scale = window.devicePixelRatio;\n//   console.log(srcCanvas);\n//   // 切り出しはscale()で拡大したサイズに対して行う\n//   const srcCanvasX = 0;\n//   const srcCanvasY = 0;\n//   const srcCanvasWidth = srcCanvas.width;\n//   const srcCanvasHeight = srcCanvas.height;\n//   // 生成画像はscale()分縮小したサイズにする\n//   const distCanvasX = 0;\n//   const distCanvasY = 0;\n//   const distWidth = srcCanvas.width;\n//   const distHeight = srcCanvas.height;\n//   // 出力サイズをscale分縮小すれば、画像を原寸にしつつ若干の画質向上が得られるケースがある...?\n//   // const distWidth = srcCanvas.width / scale;\n//   // const distHeight = srcCanvas.height / scale;\n//   distCanvas.width = distWidth;\n//   distCanvas.height = distHeight;\n//   distCtx.clearRect(0, 0, distWidth, distHeight);\n//   distCtx.drawImage(\n//     srcCanvas,\n//     srcCanvasX,\n//     srcCanvasY,\n//     srcCanvasWidth,\n//     srcCanvasHeight,\n//     distCanvasX,\n//     distCanvasY,\n//     distWidth,\n//     distHeight,\n//   );\n//   distImage.src = distCanvas.toDataURL('image/png');\n//   console.log(distCanvas.toDataURL('image/png'));\n//   distImage.style.width = `${distWidth / scale}px`;\n//   distImage.style.height = `${distHeight / scale}px`;\n// })();\n// (() => {\n//   const srcCanvas = document.querySelector('canvas.ex03-4') as HTMLCanvasElement;\n//   const distCanvas = document.querySelector('canvas.ex04-2') as HTMLCanvasElement;\n//   const distImage = document.querySelector('img.ex04-2') as HTMLImageElement;\n//   if (!srcCanvas || !distCanvas || !distImage) return;\n//   const distCtx = distCanvas.getContext('2d');\n//   if (!distCtx) return;\n//   const scale = window.devicePixelRatio;\n//   // 切り出しはscale()で拡大したサイズに対して行う\n//   // 切り出し対象部分のエリアは次のように描画している\n//   //\n//   // ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);\n//   //\n//   // ここで指定している定数はscale()されてない値のため、拡大率を考慮した値で範囲を指定する\n//   const srcCanvasX = 20 * scale;\n//   const srcCanvasY = 20 * scale;\n//   const srcCanvasWidth = srcCanvas.width - 40 * scale;\n//   const srcCanvasHeight = srcCanvas.height - 40 * scale;\n//   const distCanvasX = 0;\n//   const distCanvasY = 0;\n//   const distWidth = srcCanvasWidth;\n//   const distHeight = srcCanvasHeight;\n//   distCanvas.width = distWidth;\n//   distCanvas.height = distHeight;\n//   distCtx.clearRect(0, 0, distWidth, distHeight);\n//   distCtx.drawImage(\n//     srcCanvas,\n//     srcCanvasX,\n//     srcCanvasY,\n//     srcCanvasWidth,\n//     srcCanvasHeight,\n//     distCanvasX,\n//     distCanvasY,\n//     distWidth,\n//     distHeight,\n//   );\n//   distImage.src = distCanvas.toDataURL('image/png');\n//   distImage.style.width = `${distWidth / scale}px`;\n//   distImage.style.height = `${distHeight / scale}px`;\n// })();\n// (() => {\n//   const srcCanvas = document.querySelector('canvas.ex03-4') as HTMLCanvasElement;\n//   const distCanvas = document.querySelector('canvas.ex04-1') as HTMLCanvasElement;\n//   if (!srcCanvas || !distCanvas) return;\n//   const distCtx = distCanvas.getContext('2d');\n//   // var ctx = canvas.getContext('2d');\n//   if (!distCtx) return;\n//   // distCanvas.width = this._artBoardSize.width * this.pixelRatio;\n//   // distCanvas.height = this._artBoardSize.height * this.pixelRatio;\n//   // context2d.clearRect(0, 0, distCanvas.width, distCanvas.height);\n//   const canvasSize = 200;\n//   const scale = window.devicePixelRatio;\n//   // const { width, height } = srcCanvas;\n//   const width = (canvasSize - 40) * scale;\n//   const height = (canvasSize - 40) * scale;\n//   distCanvas.width = width;\n//   distCanvas.height = height;\n//   distCanvas.style.width = `${width / scale}px`;\n//   distCanvas.style.height = `${height / scale}px`;\n//   const srcCanvasX = 20 * scale;\n//   const srcCanvasY = 20 * scale;\n//   const srcCanvasWidth = (canvasSize - 40) * scale;\n//   const srcCanvasHeight = (canvasSize - 40) * scale;\n//   distCtx.clearRect(0, 0, width, height);\n//   distCtx.drawImage(\n//     srcCanvas,\n//     srcCanvasX, //\n//     srcCanvasY, //\n//     srcCanvasWidth,\n//     srcCanvasHeight,\n//     0,\n//     0,\n//     width,\n//     height,\n//   );\n//   console.log(distCanvas.toDataURL('image/png'));\n//   //  document.querySelector('img').src = distCanvas.toDataURL('image/png');\n// })();\n// (() => {\n//   var canvas = document.querySelector(\"canvas\");\n//   if (!canvas) return;\n//   var ctx = canvas.getContext(\"2d\");\n//   if (!ctx) return;\n//   // 表示サイズを設定(CSSにおけるピクセル数です)。\n//   var size = 300;\n//   canvas.style.width = size + \"px\";\n//   canvas.style.height = size + \"px\";\n//   // メモリ上における実際のサイズを設定(ピクセル密度の分だけ倍増させます)。\n//   // var scale = window.devicePixelRatio; // レティナでこの値を1にするとぼやけたcanvasになります\n//   const { devicePixelRatio } = window;\n//   console.log(devicePixelRatio);\n//   var scale = 2; // レティナでこの値を1にするとぼやけたcanvasになります\n//   canvas.width = size * scale;\n//   canvas.height = size * scale;\n//   // canvas.width = size;\n//   // canvas.height = size;\n//   // CSS上のピクセル数を前提としているシステムに合わせます。\n//   ctx.scale(scale, scale);\n//   // ctx.fillStyle = \"#000\";\n//   // ctx.fillRect(0, 0, size, size);\n//   ctx.fillStyle = \"#ffffff\";\n//   ctx.font = \"300px Arial\";\n//   // ctx.textAlign = \"left\";\n//   ctx.textBaseline = \"top\";\n//   // var x = size / 2;\n//   var y = 25;\n//   var x = 0;\n//   // var y = 0;\n//   var textString = \"あ\";\n//   ctx.fillText(textString, x, y);\n// })();\n/*\nconst makeCanvas = (size: { width: number; height: number }) => {\n  const canvas = document.createElement(\"canvas\");\n\n  // const scale = window.devicePixelRatio; // レティナでこの値を1にするとぼやけたcanvasになります\n  // canvas.width = size.width * scale;\n  // canvas.height = size.height * scale;\n\n  // canvas.style.backgroundColor = \"#aaccff\";\n  canvas.width = size.width;\n  canvas.height = size.height;\n\n  // canvas.style.width = size.width + \"px\";\n  // canvas.style.height = size.height + \"px\";\n\n  const ctx = canvas.getContext(\"2d\");\n  if (ctx) {\n    // ctx.scale(scale, scale);\n\n    ctx.fillStyle = \"#bada55\";\n    // ctx.fillRect(10, 10, 300, 300);\n    ctx.fillRect(0, 0, 100, 100);\n\n    ctx.fillStyle = \"#000000\";\n    ctx.font = \"30px Arial\";\n    ctx.textBaseline = \"top\";\n\n    ctx.fillText(\"canvas\", 100, 0);\n  }\n\n  return canvas;\n};\n\nconst makeDiv = (size: { width: number; height: number }) => {\n  const div = document.createElement(\"div\");\n  div.style.backgroundColor = \"#cc0055\";\n  div.style.width = size.width + \"px\";\n  div.style.height = size.height + \"px\";\n  div.textContent = \"div\";\n  return div;\n};\n\nconst draw = (ctx: CanvasRenderingContext2D) => {\n  // 表示サイズを設定(CSSにおけるピクセル数です)。\n  // var size = 200;\n  // canvas.style.width = size + \"px\";\n  // canvas.style.height = size + \"px\";\n\n  // メモリ上における実際のサイズを設定(ピクセル密度の分だけ倍増させます)。\n  // var scale = window.devicePixelRatio; // レティナでこの値を1にするとぼやけたcanvasになります\n  // canvas.width = size * scale;\n  // canvas.height = size * scale;\n\n  // CSS上のピクセル数を前提としているシステムに合わせます。\n  // ctx.scale(scale, scale);\n\n  ctx.fillStyle = \"#bada55\";\n  // ctx.fillRect(10, 10, 300, 300);\n  ctx.fillRect(0, 0, 50, 50);\n  // ctx.fillStyle = \"#ffffff\";\n  // ctx.font = \"18px Arial\";\n  // ctx.textAlign = \"center\";\n  // ctx.textBaseline = \"middle\";\n\n  // var x = size / 2;\n  // var y = size / 2;\n\n  // var textString = \"I love MDN\";\n  // ctx.fillText(textString, x, y);\n};\n\nconst scale = window.devicePixelRatio; // レティナでこの値を1にするとぼやけたcanvasになります\nconsole.log(\"scale\", scale);\n\nconst size = {\n  width: 400,\n  height: 200\n};\n\nconst div = makeDiv(size);\ndocument.body.append(div);\n\nconst canvas = makeCanvas(size);\n// const ctx = canvas.getContext(\"2d\");\n// if (ctx) {\n//   draw(ctx);\n// }\n\ndocument.body.append(canvas);\n*/\n\n\n//# sourceURL=webpack:///./src/ex02.ts?");

/***/ })

/******/ });