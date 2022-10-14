/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.JPG */ \"./src/bg.JPG\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* RESET STYLES */\\n\\n*, *::before, *::after {\\n  box-sizing: border-box;\\n}\\n* {\\n  margin: 0;\\n}\\nhtml, body {\\n  height: 100%;\\n}\\n\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n}\\nimg, picture, video, canvas, svg {\\n  display: block;\\n  max-width: 100%;\\n}\\ninput, button, textarea, select {\\n  font: inherit;\\n}\\np, h1, h2, h3, h4, h5, h6 {\\n  overflow-wrap: break-word;\\n}\\n#root, #__next {\\n  isolation: isolate;\\n}\\n\\n* {\\n  font-family: 'Merriweather', serif;\\n}\\n\\n\\n/* STYLES */\\n\\nheader {\\n  background: rgba(25, 0, 1, 0.2);\\n}\\n\\n.tabs {\\n  padding: 0;\\n}\\n\\n.tab {\\n  width: 50%;\\n  border: none;\\n}\\n\\n.new-task-btn, .new-project-btn {\\n  width: 100%;\\n  border-radius: 0;\\n  border: none;\\n}\\n\\n.display {\\n  display: flex;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background: black url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\n  background-size: cover;\\n  height: 100vh;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n}\\n\\n.inner-display {\\n  display: flex;\\n}\\n\\n.new-task-div {\\n  max-width: 320px;\\n  margin: auto;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: flex-start;\\n  gap: 6px;\\n  margin-top: 20px;\\n}\\n\\n.new-task-div > input {\\n  width: 100%;\\n}\\n\\n.new-task-div > div {\\n  width: 100%;\\n}\\n\\n.new-task-div > div > label, .new-task-div > div > select {\\n  width: 100%;\\n}\\n\\n.project-card {\\n  align-self: flex-start;\\n}\\n\\n.task-card {\\n  width: 300px;\\n  height: 400px;\\n  position: relative;\\n  background: rgba(240, 240, 240, 0.8);\\n  margin: auto;\\n  margin-top: 0;\\n  margin-bottom: 20px;\\n  border-radius: 12px 12px 10px 10px;\\n  align-self: flex-end;\\n}\\n\\n.task-card:first-of-type {\\n  margin-top: 40px;\\n  \\n}\\n.task-card > p {\\n  margin-left: 20px;\\n  margin-top: 8px;\\n}\\n\\n.task-card > input {\\n  background-color: inherit;\\n  border: none;\\n  outline: none;\\n  width: 100%;\\n  height: 50%;\\n  border-radius: 0 0 10px 10px;\\n  padding: 20px 20px 20px 20px;\\n}\\n\\n.title-div {\\n  padding: 16px 0 4px 12px;\\n  border-radius: 10px 10px 0 0;\\n  height: 50%;\\n  background-color: black;\\n  color: whitesmoke;\\n  max-width: 320px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: stretch;\\n  gap: 6px;\\n  padding: 10px 16px 10px 16px;;\\n}\\n\\n.title-div > h4 {\\n  font-size: 1.2rem;\\n  font-style: bold;\\n}\\n\\n.title-div > div > label, .title-div > div > select {\\n  width: 100%;\\n}\\n\\n.title-div > input {\\n  background-color: inherit;\\n  border: none;\\n  font-weight: bold;\\n  font-size: 1.4rem;\\n  outline: none;\\n  color: whitesmoke;\\n  margin-bottom: -20px;\\n}\\n\\n.title-div > input:nth-of-type(2) {\\n  font-size: 1.1rem;\\n  margin-bottom: -30px;\\n}\\n\\n.title-div > div:first-of-type {\\n  margin-bottom: -30px;\\n}\\n\\n.title-div > div:last-of-type {\\n  margin-bottom: 40px;\\n}\\n\\nlabel {\\n\\twidth: 50px;\\n\\tdisplay: inline-block;\\n}\\n\\n.prio-urgent {\\n  background-color: #820600;\\n}\\n\\n.prio-norm {\\n  background-color: #11323D;\\n}\\n\\n.prio-low {\\n  background-color: #50754d;\\n}\\n\\n.input-field {\\n  height: 30px;\\n}\\n\\n\\n.inner-display {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.project-card {\\n  width: 80%;\\n  height: auto;\\n}\\n\\n.project-card > .title-div {\\n  max-width: none;\\n  height: 200px;\\n}\\n\\n.project-tasks {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.completed {\\n  opacity: 0.5;\\n}\\n\\n.completed-button {\\n  opacity: 0.6;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\n/* eslint-disable consistent-return */\nconst tasks = (() => {\n  const projectArray = [[]];\n  const addProject = (newProject) => {\n    if (newProject !== undefined) {\n      projectArray.push([newProject]);\n    } else {\n      projectArray.push([]);\n    }\n  };\n  const addTask = (newTask, project) => {\n    // console.log('addtask active, projectArray, project are', projectArray, ',', project);\n    if (projectArray[project] === undefined) {\n      console.log('projectArray=', projectArray);\n      addProject();\n      projectArray[projectArray.length - 1].push(newTask);\n    } else { projectArray[project].push(newTask); }\n    console.log('projectArray=', projectArray);\n  };\n  const returnProjects = projectArray;\n  const getObjectFromArray = (id) => {\n    for (let i = 0; i < projectArray.length; i++) {\n      const idCompare = Number(id);\n      const project = projectArray[i];\n      for (let index = 0; index < project.length; index++) {\n        const element = project[index];\n        const elementCompare = Number(element.taskID);\n        if (elementCompare === idCompare) {\n          return (element);\n        }\n      }\n    }\n  };\n  \n  const getIndex = (project, elementID) => {\n    const elementIDCompare = Number(elementID);\n    const index = projectArray[project].findIndex((item) => item.taskID === elementIDCompare);\n    return (index);\n  };\n\n  const changeProject = (project, elementID, newProject) => {\n    // const taskToChange = projectArray[project][elementIndex];\n    // console.log('taskToChange is', taskToChange);\n    const index = projectArray[project].findIndex((item) => item.taskID === elementID);\n    const poppedObject = projectArray[project].pop(index);\n    projectArray[newProject].push(poppedObject);\n  };\n\n  const changeTask = (project, elementID, newValue, attribute) => {\n    const index = getIndex(project, elementID);\n    if (attribute === 'title') {\n      projectArray[project][index].title = newValue;\n    }\n    if (attribute === 'date') {\n      projectArray[project][index].dueDate = newValue;\n    }\n    if (attribute === 'notes') {\n      projectArray[project][index].notes = newValue;\n    }\n  };\n\n  //return a function that modifies projectArray\n\n  \n\n  return {\n    addTask,\n    addProject,\n    returnProjects,\n    getObjectFromArray,\n    changeProject,\n    changeTask,\n  };\n})();\n\nlet taskCounter = 0;\n\nconst taskFactory = (title, notes, dueDate, priority, altered, project) => {\n  const taskID = taskCounter;\n  taskCounter += 1;\n  let completed = false;\n  const toggleComplete = () => {\n    completed = !completed;\n    return(completed);\n  }\n  return {\n    title, notes, dueDate, priority, altered, project, taskID, toggleComplete,\n  };\n};\n\n/*const projectFactory = (title) => {\n  const taskArray = [];\n  return {\n    title, taskArray,\n  };\n};*/\n\n\n\n\n//# sourceURL=webpack://todo/./src/appLogic.js?");

/***/ }),

/***/ "./src/buildPage.js":
/*!**************************!*\
  !*** ./src/buildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildUI\": () => (/* binding */ buildUI)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _getInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getInput */ \"./src/getInput.js\");\n\n\n\nconst buildUI = () => {\n  // Builds the main UI\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('menu', '#content', 'tabs');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('input', '.tabs', 'tab', 'button', 'Tasks', undefined, 'tasks');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('input', '.tabs', 'tab', 'button', 'Projects', undefined, 'projects');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('main', '#content');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('div', 'main', 'display');\n  (0,_getInput__WEBPACK_IMPORTED_MODULE_1__.addListeners)();\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/buildPage.js?");

/***/ }),

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"builder\": () => (/* binding */ builder),\n/* harmony export */   \"clearDisplay\": () => (/* binding */ clearDisplay)\n/* harmony export */ });\nconst builder = (element, parent, classes, type, value, text, id, placeholder, source) => {\n  // Builds and appends DOM nodes according to supplied arguments\n  // console.log('parent is', parent);\n  const selectParent = document.querySelector(parent);\n  const makeComponent = document.createElement(element);\n  if (classes !== undefined) {\n    makeComponent.classList.add(classes);\n    if (classes === 'tab' || classes === 'new-task-btn') {\n      makeComponent.classList.add('button');\n    }\n  }\n  if (type !== undefined) {\n    makeComponent.type = type;\n  }\n  if (value !== undefined) {\n    makeComponent.value = value;\n  }\n  if (text !== undefined) {\n    makeComponent.textContent = text;\n  }\n  if (id !== undefined) {\n    makeComponent.id = id;\n  }\n  if (placeholder !== undefined) {\n    makeComponent.placeholder = placeholder;\n  }\n  if (source !== undefined) {\n    if (source === 'new-task') {\n      makeComponent.setAttribute('data-source', 'new-task');\n    }\n    if (source === 'new-project') {\n      makeComponent.setAttribute('data-source', 'new-project');\n    }\n  }\n  selectParent.append(makeComponent);\n};\n\nconst clearDisplay = () => {\n  const selectDisplay = document.querySelector('.display');\n  selectDisplay.innerHTML = '';\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/builder.js?");

/***/ }),

/***/ "./src/getInput.js":
/*!*************************!*\
  !*** ./src/getInput.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListeners\": () => (/* binding */ addListeners)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable import/prefer-default-export */\n\n\n\n\nlet tempObject = (0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.taskFactory)();\ntempObject.altered = false;\ntempObject.project = 0;\n\nconst addListeners = () => {\n  const inputs = document.querySelectorAll('input');\n  for (let i = 0; i < inputs.length; i += 1) {\n    if (inputs[i].type === 'button') {\n      inputs[i].addEventListener('click', getMouseInput);\n    } else {\n      inputs[i].addEventListener('change', getKeybInput);\n    }\n  }\n  // Checks if the project selector has been drawn. If so, adds event listener.\n  const dropdowns = document.querySelectorAll('select');\n  for (let i = 0; i < dropdowns.length; i++) {\n    console.log('adding listeners to dropdowns');\n    const element = dropdowns[i];\n    element.addEventListener('change', getMouseInput);\n  }\n  \n  /* if (document.querySelector('.project-select') !== null) {\n    document.querySelector('.project-select').addEventListener('change', getMouseInput);\n  } */\n};\n\nconst getMouseInput = (e) => {\n  if (e.target.id === 'tasks') {\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.buildTasks)();\n  }\n  if (e.target.id === 'new-task') {\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.newTask)();\n    addListeners();\n  }\n  if (e.target.id === 'new-project') {\n    console.log('new-project clicked');\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.newProjectDisplay)();\n    addListeners();\n  }\n  if (e.target.id === 'projects') {\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.buildProjects)();\n  }\n\n  if (e.target.classList.contains('project-select')) {\n    // if this click comes from the new task display, manipulate tempObject as appropriate\n    console.log('project select');\n    if (e.target.getAttribute('data-source') === 'new-task') {\n      tempObject.project = e.target.selectedIndex;\n      tempObject.altered = true;\n    } else {\n      const ID = e.target.parentElement.parentElement.parentElement.getAttribute('data-taskid');\n      console.log('ID is', ID);\n      console.log('projectArray is', _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.returnProjects);\n      const element = _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.getObjectFromArray(ID);\n      _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.changeProject(element.project, element.taskID, e.target.selectedIndex);\n      element.project = e.target.selectedIndex;\n      console.log('projectArray is', _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.returnProjects);\n    }\n  }\n\n  if (e.target.classList.contains('priority-select')) {\n    // if this click comes from the new task display, manipulate tempObject as appropriate\n    if (e.target.getAttribute('data-source') === 'new-task' || e.target.getAttribute('data-source') === 'new-project') {\n      tempObject.priority = e.target.selectedIndex;\n      tempObject.altered = true;\n    } else {\n      const ID = e.target.parentElement.parentElement.parentElement.getAttribute('data-taskid');\n      const element = _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.getObjectFromArray(ID);\n      element.priority = e.target.selectedIndex;\n      switch (e.target.selectedIndex) {\n        case 0:\n          (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.addPriorityStyle)(e.target.parentElement.parentElement, 0);\n          break;\n        case 1:\n          (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.addPriorityStyle)(e.target.parentElement.parentElement, 1);\n          break;\n        default:\n          (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.addPriorityStyle)(e.target.parentElement.parentElement, 2);\n          break;\n      }\n    }\n  }\n\n  // Adds the new task to the appropriate array as defined by the second parameter\n  if (e.target.value === 'Submit') {\n    if (e.target.getAttribute('data-source') === 'new-task') {\n      _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.addTask(tempObject, tempObject.project);\n      tempObject = (0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.taskFactory)();\n      tempObject.altered = false;\n      tempObject.project = 0;\n      (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.buildTasks)();\n    }\n    if (e.target.getAttribute('data-source') === 'new-project') {\n      console.log(_appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.returnProjects);\n      _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.addProject(tempObject);\n      tempObject = (0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.taskFactory)();\n      tempObject.altered = false;\n      (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.buildTasks)();\n      console.log(_appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.returnProjects);\n    }\n  }\n\n  if (e.target.classList.contains('complete-btn')) {\n    console.log(e.target.parentElement.parentElement.getAttribute('data-taskid'));\n    const tasksID = e.target.parentElement.parentElement.getAttribute('data-taskid');\n    const thisTask = _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.getObjectFromArray(tasksID);\n    console.log(thisTask);\n    console.log(thisTask.toggleComplete());\n    e.target.parentElement.parentElement.classList.toggle('completed');\n    e.target.classList.toggle('completed-button');\n    console.log(e.target.value);\n    if (e.target.value === 'Complete task') {\n      console.log('if statement triggered');\n      console.log(e.target.value);\n      console.log(e.target.innerText);\n\n      e.target.value = 'Uncomplete task';\n    } else if (e.target.value === 'Uncomplete task') {\n      e.target.value = 'Complete task';\n    } else if (e.target.value === 'Complete project') {\n      e.target.value = 'Uncomplete project';\n    } else {\n      e.target.value = 'Complete project';\n    }\n  }\n};\n\nconst getKeybInput = (e) => {\n  if (e.target.getAttribute('data-source') === 'new-task' || e.target.getAttribute('data-source') === 'new-project') {\n    if (e.target.id === 'notes') {\n      tempObject.notes = e.target.value;\n      tempObject.altered = true;\n    }\n    if (e.target.id === 'title') {\n      tempObject.title = e.target.value;\n      tempObject.altered = true;\n    }\n    if (e.target.id === 'due-date') {\n      tempObject.dueDate = e.target.value;\n      tempObject.altered = true;\n    }\n  } else {\n    let ID = e.target.parentElement.parentElement.getAttribute('data-taskid');\n    if (ID === null) {\n      ID = e.target.parentElement.getAttribute('data-taskid');\n    }\n\n    const element = _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.getObjectFromArray(ID);\n    if (e.target.classList.contains('task-title')) {\n      _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.changeTask(element.project, ID, e.target.value, 'title');\n    }\n    if (e.target.classList.contains('task-due')) {\n      _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.changeTask(element.project, ID, e.target.value, 'date');\n    }\n    if (e.target.classList.contains('task-notes')) {\n      _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.changeTask(element.project, ID, e.target.value, 'notes');\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/getInput.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildPage */ \"./src/buildPage.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n(0,_buildPage__WEBPACK_IMPORTED_MODULE_1__.buildUI)();\n(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.buildTasks)(); // Adds tasks to the display\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildProjects\": () => (/* binding */ buildProjects),\n/* harmony export */   \"newProjectDisplay\": () => (/* binding */ newProjectDisplay)\n/* harmony export */ });\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _getInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getInput */ \"./src/getInput.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\nconst currentProjects = _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.returnProjects; //returns an array of all projects\n\nconst buildProjects = () => {\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();\n  const newArray = [];\n  // Constructs an array of projects i.e. all those projectArray children which ARE index 0\n  currentProjects.forEach((element) => {\n    for (let i = 0; i < 1; i += 1) {\n      newArray.push(element[i]);\n    }\n  });\n\n  const newArray2 = [];\n  // Constructs an array of tasks i.e. all those projectArray children which are NOT index 0\n  currentProjects.forEach((element) => {\n    for (let i = 1; i < element.length; i += 1) {\n      newArray2.push(element[i]);\n    }\n  });\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.display', 'new-project-btn', 'button', 'New Project', undefined, 'new-project');\n  \n  let dropboxCounter = 0;\n  let taskCardCounter = 0;\n  let innerDisplayCounter = 0;\n  for (let i = 0; i < newArray.length; i++) {\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', '.display', `inner-display-${innerDisplayCounter}`);\n    document.querySelector(`.inner-display-${innerDisplayCounter}`).classList.add('inner-display');\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', `.inner-display-${innerDisplayCounter}`, 'task-card', undefined, undefined, undefined, `task-card-${taskCardCounter}`);\n    document.querySelector(`#task-card-${taskCardCounter}`).setAttribute('data-taskID', newArray[i].taskID);\n    document.querySelector(`#task-card-${taskCardCounter}`).classList.add('project-card');\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', `#task-card-${taskCardCounter}`, 'title-div', undefined, undefined, undefined, `title-div-${taskCardCounter}`);\n    const titleDiv = document.querySelector(`#title-div-${taskCardCounter}`);\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.addPriorityStyle)(titleDiv, newArray[i].priority);\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#title-div-${taskCardCounter}`, `task-${taskCardCounter}-title`, 'text', newArray[i].title, undefined, undefined, 'Enter task name');\n    document.querySelector(`.task-${taskCardCounter}-title`).classList.add('task-title');\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#title-div-${taskCardCounter}`, `task-${taskCardCounter}-due`, 'date', newArray[i].dueDate);\n    document.querySelector(`.task-${taskCardCounter}-due`).classList.add('task-due');\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.dropbox)(`#title-div-${taskCardCounter}`, newArray[i].priority, 'priority', dropboxCounter);\n    dropboxCounter += 1;\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#title-div-${taskCardCounter}`, 'complete-btn', 'button', 'Complete project', undefined, `complete-btn-${i}`);\n    //builder('input', `#task-card-${taskCardCounter}`, `task-${taskCardCounter}-notes`, 'text', newArray[i].notes, undefined, undefined, 'Enter task notes');\n    //document.querySelector(`.task-${taskCardCounter}-notes`).classList.add('task-notes');\n    console.log(`#task-card-${taskCardCounter}`, `tasks-${taskCardCounter}`);\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', `#task-card-${taskCardCounter}`, `tasks-${taskCardCounter}`);\n    document.querySelector(`.tasks-${taskCardCounter}`).classList.add('project-tasks');\n    console.log('taskCardCounter=', taskCardCounter);\n    taskCardCounter += 1;\n    const taskCardCounterPreIncrement = taskCardCounter - 1;\n    console.log(taskCardCounter);\n    for (let index = 1; index < currentProjects[i].length; index++) {\n      console.log('task =', currentProjects[i][index]);\n      (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', `.tasks-${taskCardCounterPreIncrement}`, 'task-card', undefined, undefined, undefined, `task-card-${taskCardCounter}`);\n      document.querySelector(`#task-card-${taskCardCounter}`).setAttribute('data-taskID', currentProjects[i][index].taskID);\n      (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', `#task-card-${taskCardCounter}`, 'title-div', undefined, undefined, undefined, `title-div-${taskCardCounter}`);\n      const titleDiv = document.querySelector(`#title-div-${taskCardCounter}`);\n      (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.addPriorityStyle)(titleDiv, newArray[i].priority);\n      (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#title-div-${taskCardCounter}`, `task-${taskCardCounter}-title`, 'text', currentProjects[i][index].title, undefined, undefined, 'Enter task name');\n      document.querySelector(`.task-${taskCardCounter}-title`).classList.add('task-title');\n      (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#title-div-${taskCardCounter}`, `task-${taskCardCounter}-due`, 'date', currentProjects[i][index].dueDate);\n      document.querySelector(`.task-${taskCardCounter}-due`).classList.add('task-due');\n      (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.dropbox)(`#title-div-${taskCardCounter}`, currentProjects[i][index].priority, 'priority', dropboxCounter);\n      dropboxCounter += 1;\n      (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#title-div-${taskCardCounter}`, 'complete-btn', 'button', 'Complete task', undefined, `complete-btn-${i}`);\n      (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#task-card-${taskCardCounter}`, `task-${taskCardCounter}-notes`, 'text', currentProjects[i][index].notes, undefined, undefined, 'Enter task notes');\n      document.querySelector(`.task-${taskCardCounter}-notes`).classList.add('task-notes');\n      taskCardCounter += 1;\n      //innerDisplayConstruct = innerDisplayDefault + innerDisplayCounter;\n    }\n    innerDisplayCounter ++;\n  }\n  (0,_getInput__WEBPACK_IMPORTED_MODULE_2__.addListeners)();\n};\n\n// Draws the new project display\nconst newProjectDisplay = () => {\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', '.display', 'new-project-div');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.new-project-div', 'input-field', 'text', undefined, undefined, 'title', 'Project name', 'new-project');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.new-project-div', 'input-field', 'date', undefined, undefined, 'due-date', undefined, 'new-project');\n  (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.dropbox)('.new-project-div', 1, 'priority', 0, 'new-project');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.new-project-div', 'input-field', 'text', undefined, undefined, 'notes', 'Notes', 'new-project');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.new-project-div', 'button', 'button', 'Submit', undefined, undefined, undefined, 'new-project');\n};\n\n\n\n\n/*\nbuilder('div', '.display', 'new-task-div');\n  builder('input', '.new-task-div', 'input-field', 'text', undefined, undefined, 'title', 'Task name', 'new-task');\n  builder('input', '.new-task-div', 'input-field', 'date', undefined, undefined, 'due-date', undefined, 'new-task');\n  dropbox('.new-task-div', 0, 'project', 0, 'new-task');\n  dropbox('.new-task-div', 1, 'priority', 0, 'new-task');\n  builder('input', '.new-task-div', 'input-field', 'text', undefined, undefined, 'notes', 'Notes', 'new-task');\n  builder('input', '.new-task-div', 'button', 'button', 'Submit');*/\n\n//# sourceURL=webpack://todo/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPriorityStyle\": () => (/* binding */ addPriorityStyle),\n/* harmony export */   \"buildTasks\": () => (/* binding */ buildTasks),\n/* harmony export */   \"dropbox\": () => (/* binding */ dropbox),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _getInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getInput */ \"./src/getInput.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\n\nconst currentProjects = _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.returnProjects; //returns an array of all projects\n\n// Creates a dropdown element\nconst dropbox = (parent, selected, type, counter, source) => {\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', parent, `select-div-${type}-${counter}`);\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('label', `.select-div-${type}-${counter}`, `label-${type}-${counter}`);\n  const getLabel = document.querySelector(`.label-${type}-${counter}`);\n  getLabel.setAttribute('for', `${type}-select-${counter}`);\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('select', `.select-div-${type}-${counter}`, `${type}-select`, undefined, undefined, undefined, `${type}-select-${counter}`);\n  const getSelector = document.querySelector(`#${type}-select-${counter}`);\n  if (type === 'project') {\n    const projectNames = getProjectNames();\n    const string = assembleProjectString(projectNames);\n    getSelector.innerHTML = string;\n    getSelector.selectedIndex = selected;\n  } else {\n    getSelector.innerHTML = '<option value=\"0\">Low</option><option value=\"1\">Normal</option><option value=\"2\">Urgent</option>';\n    getSelector.selectedIndex = selected;\n  }\n  if (source === 'new-task') {\n    getSelector.setAttribute('data-source', 'new-task');\n  }\n  if (source === 'new-project') {\n    getSelector.setAttribute('data-source', 'new-project');\n  }\n};\n\nconst buildTasks = () => {\n// Creates cards corresponding to each task from projectArray's children\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();\n  const demo = (() => {\n    if (_appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.returnProjects[0].length === 0) {\n      const demoProject = (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('Default project', 'Default project', '1983-01-26', 1, false, 0);\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.addTask(demoProject, 0);\n      const demoProject2 = (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('Test project', 'this is a test project', '1929-01-26', 1, false, 1);\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.addTask(demoProject2, 1);\n      const demoTask = (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('A test task', 'this is a test task', '1983-01-26', 2, false, 0);\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.addTask(demoTask, demoTask.project);\n\n    }\n  })();\n  const newArray = [];\n  // Constructs an array of tasks i.e. all those projectArray children which are not index 0\n  currentProjects.forEach((element) => {\n    for (let i = 1; i < element.length; i += 1) {\n      newArray.push(element[i]);\n    }\n  });\n\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.display', 'new-task-btn', 'button', 'New Task', undefined, 'new-task');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', '.display', 'inner-display');\n  // Draws a task card for each project in newArray\n  let dropboxCounter = 0;\n  for (let i = 0; i < newArray.length; i += 1) {\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', '.inner-display', 'task-card', undefined, undefined, undefined, `task-card-${i}`);\n    document.querySelector(`#task-card-${i}`).setAttribute('data-taskID', newArray[i].taskID);\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', `#task-card-${i}`, 'title-div', undefined, undefined, undefined, `title-div-${i}`);\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#title-div-${i}`, `task-${i}-title`, 'text', newArray[i].title, undefined, undefined, 'Enter task name');\n    const titleDiv = document.querySelector(`#title-div-${i}`);\n    addPriorityStyle(titleDiv, newArray[i].priority);\n    document.querySelector(`.task-${i}-title`).classList.add('task-title');\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#title-div-${i}`, `task-${i}-due`, 'date', newArray[i].dueDate);\n    document.querySelector(`.task-${i}-due`).classList.add('task-due');\n    dropbox(`#title-div-${i}`, newArray[i].project, 'project', dropboxCounter);\n    dropboxCounter += 1;\n    // builder('div', `#title-div-${i}`, `task-${i}-priority`, undefined, undefined, newArray[i].priority);\n    dropbox(`#title-div-${i}`, newArray[i].priority, 'priority', dropboxCounter);\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#title-div-${i}`, 'complete-btn', 'button', 'Complete task', undefined, `complete-btn-${i}`);\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', `#task-card-${i}`, `task-${i}-notes`, 'text', newArray[i].notes, undefined, undefined, 'Enter task notes');\n    document.querySelector(`.task-${i}-notes`).classList.add('task-notes');\n  }\n  (0,_getInput__WEBPACK_IMPORTED_MODULE_2__.addListeners)();\n};\n\n// Adds a class to task cards according to priority\nconst addPriorityStyle = (task, priority) => {\n  task.classList.remove('prio-low', 'prio-norm', 'prio-urgent');\n  if (priority === 0) {\n    task.classList.add('prio-low');\n  }\n  if (priority === 1) {\n    task.classList.add('prio-norm');\n  }\n  if (priority === 2) {\n    task.classList.add('prio-urgent');\n  }\n};\n\n// Gets the names of each project i.e. the name of task 0 in each project\nconst getProjectNames = () => {\n  const newArray = [];\n  currentProjects.forEach(element => {\n    newArray.push(element[0].title);\n  });\n  return (newArray);\n};\n\n// Creates a string which will be used to populate dropdown elements\nconst assembleProjectString = (array) => {\n  let assembledString = '';\n  for (let i = 0; i < array.length; i += 1) {\n    const string = array[i];\n    const newString = ` <option value=\"${i + 1}\">${string}</option>`;\n    assembledString += newString;\n  }\n  return (assembledString);\n};\n\n// Draws the new task display\nconst newTask = () => {\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', '.display', 'new-task-div');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.new-task-div', 'input-field', 'text', undefined, undefined, 'title', 'Task name', 'new-task');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.new-task-div', 'input-field', 'date', undefined, undefined, 'due-date', undefined, 'new-task');\n  dropbox('.new-task-div', 0, 'project', 0, 'new-task');\n  dropbox('.new-task-div', 1, 'priority', 0, 'new-task');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.new-task-div', 'input-field', 'text', undefined, undefined, 'notes', 'Notes', 'new-task');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.new-task-div', 'button', 'button', 'Submit', undefined, undefined, undefined, 'new-task');\n};\n\n\n//# sourceURL=webpack://todo/./src/tasks.js?");

/***/ }),

/***/ "./src/bg.JPG":
/*!********************!*\
  !*** ./src/bg.JPG ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23a2bbb7936f5f35b841.JPG\";\n\n//# sourceURL=webpack://todo/./src/bg.JPG?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;