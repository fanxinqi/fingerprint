/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fingerprint"] = factory();
	else
		root["fingerprint"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getComplexCanvasFingerprint\": () => (/* binding */ getComplexCanvasFingerprint)\n/* harmony export */ });\n/*\n *  https://browserleaks.com/canvas\n *  uniqueness 99.93%, 对于我们的场景够用了\n * */\n\n// 来源 https://browserleaks.com/js/canvas.js\n// 测试后该方法生成的指纹比较稳定\nconst getComplexCanvasFingerprint = () => {\n  // Text with lowercase/uppercase/punctuation symbols\n  const c = \"maimai.cn,com <canvas> 1.0\";\n  const canvas = document.createElement(\"canvas\");\n  canvas.setAttribute(\"width\", 220);\n  canvas.setAttribute(\"height\", 30);\n  const canvasContext = canvas.getContext(\"2d\");\n  canvasContext.textBaseline = \"top\";\n  // The most common type\n  canvasContext.font = \"14px 'Arial'\";\n  canvasContext.textBaseline = \"alphabetic\";\n  canvasContext.fillStyle = \"#f60\";\n  canvasContext.fillRect(125, 1, 62, 20);\n  // Some tricks for color mixing to increase the difference in rendering\n  canvasContext.fillStyle = \"#069\";\n  canvasContext.fillText(c, 2, 15);\n  canvasContext.fillStyle = \"rgba(102, 204, 0, 0.7)\";\n  canvasContext.fillText(c, 4, 17);\n  return canvas.toDataURL();\n};\n\n//spiltCRC32FromBase64 从  base64 中提取CRC32校验码\nfunction extractCRC32FromBase64(base64) {\n  // 移除 base64 header\n  base64 = base64.replace(\"data:image/png;base64,\", \"\");\n  const bin = window.atob(base64);\n  // 倒数16到12位是PNG数据中的CRC32校验码\n  const crc32ASKii = bin.slice(-16, -12);\n  // 转换为16进制\n  return string2Hex(crc32ASKii.toString());\n}\n\n// string2Hex 字符串转16进制\nfunction string2Hex(str) {\n  let result = \"\";\n  for (let i = 0; i < str.length; i++) {\n    let askii = str.charCodeAt(i);\n    if (askii <= 0x0f) {\n      // 小于0x0f转为16进制后在前面补零\n      result += \"0\";\n    }\n    result += askii.toString(16).toLocaleUpperCase();\n  }\n  return result;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const base64 = getComplexCanvasFingerprint();\n  // 2.提取CRC32校验码作为Canvas指纹\n  return extractCRC32FromBase64(base64);\n});\n\n\n//# sourceURL=webpack://fingerprint/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});