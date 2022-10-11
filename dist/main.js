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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* RESET STYLES */\\n\\n*, *::before, *::after {\\n  box-sizing: border-box;\\n}\\n* {\\n  margin: 0;\\n}\\nhtml, body {\\n  height: 100%;\\n}\\n\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n}\\nimg, picture, video, canvas, svg {\\n  display: block;\\n  max-width: 100%;\\n}\\ninput, button, textarea, select {\\n  font: inherit;\\n}\\np, h1, h2, h3, h4, h5, h6 {\\n  overflow-wrap: break-word;\\n}\\n#root, #__next {\\n  isolation: isolate;\\n}\\n\\n* {\\n  font-family: 'Merriweather', serif;\\n}\\n\\n\\n/* STYLES */\\n\\nheader {\\n  background: rgba(25, 0, 1, 0.2);\\n}\\n\\n.tabs {\\n  padding: 0;\\n}\\n\\n.tab {\\n  width: 50%;\\n  border: none;\\n}\\n\\n.new-task-btn {\\n  width: 100%;\\n  border-radius: 0;\\n  border: none;\\n}\\n\\n.task-card {\\n  width: 280px;\\n  height: 360px;\\n  position: relative;\\n  background: rgba(240, 240, 240, 0.8);\\n  margin: auto;\\n  margin-top: 40px; \\n  border-radius: 12px 12px 10px 10px;\\n}\\n\\n.task-card > p {\\n  \\n  margin-left: 20px;\\n  margin-top: 8px;\\n}\\n\\n.title-div {\\n  padding: 16px 0 4px 12px;\\n  border-radius: 10px 10px 0 0;\\n  height: 33%;\\n  background-color: black;\\n  color: whitesmoke;\\n}\\n\\n.title-div > h3 {\\n  font-size: 1.4rem;\\n  font-style: italic;\\n  font-weight: 700;\\n}\\n\\n.title-div > h4 {\\n  font-size: 1.2rem;\\n  font-style: bold;\\n}\\n\\nlabel {\\n\\twidth: 50px;\\n\\tdisplay: inline-block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\nconst tasks = (() => {\n  const projectArray = [[]];\n  const addProject = () => {\n    projectArray.push([]);\n  };\n  const addTask = (newTask, project) => {\n    if (projectArray[project] === undefined) {\n      addProject();\n    }\n    projectArray[project].push(newTask);\n    console.log('project array =', projectArray);\n  };\n  \n  const returnProjects = projectArray;\n  return {\n    addTask,\n    addProject,\n    returnProjects,\n  };\n})();\n\nconst taskFactory = (title, notes, dueDate, priority, altered, project) => {\n  const subTasks = [];\n  return {\n    title, notes, dueDate, priority, altered, subTasks,\n  };\n};\n\n/*const projectFactory = (title) => {\n  const taskArray = [];\n  return {\n    title, taskArray,\n  };\n};*/\n\n\n\n\n//# sourceURL=webpack://todo/./src/appLogic.js?");

/***/ }),

/***/ "./src/buildPage.js":
/*!**************************!*\
  !*** ./src/buildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildUI\": () => (/* binding */ buildUI)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _getInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getInput */ \"./src/getInput.js\");\n\n\n\nconst buildUI = () => {\n  // Builds the main UI\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('menu', '#content', 'tabs');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('input', '.tabs', 'tab', 'button', 'Tasks');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('input', '.tabs', 'tab', 'button', 'Projects');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('main', '#content');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('input', 'main', 'new-task-btn', 'button', 'New Task');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_0__.builder)('div', 'main', 'display');\n  (0,_getInput__WEBPACK_IMPORTED_MODULE_1__.addListeners)();\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/buildPage.js?");

/***/ }),

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"builder\": () => (/* binding */ builder),\n/* harmony export */   \"clearDisplay\": () => (/* binding */ clearDisplay)\n/* harmony export */ });\nconst builder = (element, parent, classes, type, value, text, id, placeholder) => {\n  // Builds and appends DOM nodes according to supplied arguments\n  const selectParent = document.querySelector(parent);\n  const makeComponent = document.createElement(element);\n  if (classes !== undefined) {\n    makeComponent.classList.add(classes);\n    if (classes === 'tab' || classes === 'new-task-btn') {\n      makeComponent.classList.add('button');\n    }\n  }\n  if (type !== undefined) {\n    makeComponent.type = type;\n  }\n  if (value !== undefined) {\n    makeComponent.value = value;\n  }\n  if (text !== undefined) {\n    makeComponent.textContent = text;\n  }\n  if (id !== undefined) {\n    makeComponent.id = id;\n  }\n  if (placeholder !== undefined) {\n    makeComponent.placeholder = placeholder;\n  }\n  selectParent.append(makeComponent);\n};\n\nconst clearDisplay = () => {\n  const selectDisplay = document.querySelector('.display');\n  selectDisplay.innerHTML = '';\n  console.log('Display cleared');\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/builder.js?");

/***/ }),

/***/ "./src/getInput.js":
/*!*************************!*\
  !*** ./src/getInput.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListeners\": () => (/* binding */ addListeners)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* eslint-disable import/prefer-default-export */\n\n\n\n\nlet tempObject = (0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.taskFactory)();\ntempObject.altered = false;\n\nconst addListeners = () => {\n  const inputs = document.querySelectorAll('input');\n  for (let i = 0; i < inputs.length; i += 1) {\n    if (inputs[i].classList.contains('button')) {\n      inputs[i].addEventListener('click', getMouseInput);\n    } else {\n      inputs[i].addEventListener('change', getKeybInput);\n    }\n  }\n  // Checks if the project selector has been drawn. If so, adds event listener.\n  if (document.querySelector('.project-select') !== null) {\n    document.querySelector('.project-select').addEventListener('change', getMouseInput);\n  }\n};\n\nconst getMouseInput = (e) => {\n  //console.log(e.target.value);\n  if (e.target.value === 'New Task') {\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.newTask)();\n    addListeners();\n  }\n  if (e.target.value === 'Urgent' || e.target.value === 'Normal' || e.target.value === 'Low') {\n    tempObject.priority = e.target.value;\n    tempObject.altered = true;\n  }\n  if (e.target.value === 'Submit') {\n    _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.addTask(tempObject, 0); //When we add the task, we need to get the value of project select and assign it to the appropriate array\n    tempObject = (0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.taskFactory)();\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.buildTasks)();\n  };\n\n  /*if (e.target.target.id === 'project-select') {\n    tempObject.\n  }*/\n}\n\nconst getKeybInput = (e) => {\n  if (e.target.id === 'notes') {\n    tempObject.notes = e.target.value;\n    tempObject.altered = true;\n  }\n  if (e.target.id === 'title') {\n    tempObject.title = e.target.value;\n    tempObject.altered = true;\n  }\n  if (e.target.id === 'due-date') {\n    tempObject.dueDate = e.target.value;\n    tempObject.altered = true;\n  }\n  //console.log(tempObject);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/getInput.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildPage */ \"./src/buildPage.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n(0,_buildPage__WEBPACK_IMPORTED_MODULE_1__.buildUI)();\n(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.buildTasks)(); // Adds tasks to the display\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTasks\": () => (/* binding */ buildTasks),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n\n\n\n\nconst currentProjects = _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.returnProjects;\n\nfunction buildTasks() {\n// Creates cards corresponding to each task from taskArray\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();\n  const demo = (() => {\n    if (_appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.returnProjects[0].length === 0) {\n      const demoProject = (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('fuck', 'this is a test project', 'NOW!', 'IMPORTANT!');\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.addTask(demoProject, 0);\n      const demoProject2 = (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('piss', 'this is a test project', 'NOW!', 'IMPORTANT!');\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.addTask(demoProject2, 1);\n      const demoTask = (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('test task', 'this is a test task', 'NOW!', 'IMPORTANT!');\n      _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.addTask(demoTask, 0);\n    }\n  })();\n  const newArray = [];\n  currentProjects.forEach((element) => {\n    for (let i = 1; i < element.length; i += 1) {\n      newArray.push(element[i]);\n    }\n  });\n  console.log('newArray is', newArray);\n\n  for (let i = 0; i < newArray.length; i += 1) {\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', '.display', 'task-card', undefined, undefined, undefined, `task-card-${i}`);\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', `#task-card-${i}`, 'title-div', undefined, undefined, undefined, `title-div-${i}`);\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('h3', `#title-div-${i}`, `task-${i}-title`, undefined, undefined, newArray[i].title);\n    (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('p', `#title-div-${i}`, `task-${i}-due`, undefined, undefined, newArray[i].dueDate);\n  }\n}\n\nconst getProjectNames = () => {\n  const newArray = [];\n  currentProjects.forEach(element => {\n    newArray.push(element[0].title);\n  });\n  return (newArray);\n};\n\nconst dropbox = () => {\n  console.log('dropbox running!');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', '.display', 'select-div');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('label', '.select-div');\n  const getLabel = document.querySelector('label');\n  getLabel.setAttribute('for', 'project-select');\n  getLabel.textContent = 'Select a project';\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('select', '.select-div', 'project-select', undefined, undefined, undefined, 'project-select');\n  const projectNames = getProjectNames();\n  const getSelector = document.querySelector('.project-select');\n  const string = assembleProjectString(projectNames);\n  getSelector.innerHTML = string;\n};\n\nconst assembleProjectString = (array) => {\n  let assembledString = '<option value=\"Select project\">Select project</option>';\n  for (let i = 0; i < array.length; i += 1) {\n    const string = array[i];\n    const newString = ` <option value=\"${string}\">${string}</option>`;\n    assembledString += newString;\n  }\n  return (assembledString);\n};\n\nconst newTask = () => {\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.display', 'input-field', 'text', undefined, undefined, 'title', 'Task name');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.display', 'input-field', 'date', undefined, undefined, 'due-date');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('div', '.display', 'priority-div');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.priority-div', 'button', 'button', 'Urgent', undefined, 'urgent');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.priority-div', 'button', 'button', 'Normal', undefined, 'normal');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.priority-div', 'button', 'button', 'Low', undefined, 'low');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.display', 'input-field', 'text', undefined, undefined, 'notes', 'Notes');\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.display', 'button', 'button', 'Add subtask');\n  dropbox();\n  (0,_builder__WEBPACK_IMPORTED_MODULE_1__.builder)('input', '.display', 'button', 'button', 'Submit');\n};\n\n\n//# sourceURL=webpack://todo/./src/tasks.js?");

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