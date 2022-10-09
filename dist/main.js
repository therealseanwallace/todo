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

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasks\": () => (/* binding */ tasks),\n/* harmony export */   \"toDoFactory\": () => (/* binding */ toDoFactory)\n/* harmony export */ });\nconst tasks = (() => {\n  const taskArray = [];\n  const addTask = (newTask) => {\n    taskArray.push(newTask);\n  };\n  return {\n    addTask,\n    taskArray,\n  };\n})();\n\nconst toDoFactory = (title, description, dueDate, priority) => {\n  const subTasks = [];\n  return {\n    title, description, dueDate, priority,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/appLogic.js?");

/***/ }),

/***/ "./src/buildPage.js":
/*!**************************!*\
  !*** ./src/buildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildUI\": () => (/* binding */ buildUI),\n/* harmony export */   \"builder\": () => (/* binding */ builder)\n/* harmony export */ });\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n\n\nconst builder = (element, parent, classes, type, value, text) => {\n  // Builds and appends DOM nodes according to supplied arguments\n  const selectParent = document.querySelector(parent);\n  const makeComponent = document.createElement(element);\n  if (classes !== undefined) {\n    makeComponent.classList.add(classes);\n    if (classes === 'tab' || classes === 'new-task-btn') {\n      makeComponent.classList.add('button');\n    }\n  }\n  if (type !== undefined) {\n    makeComponent.type = type;\n  }\n  if (value !== undefined) {\n    makeComponent.value = value;\n  }\n  if (text !== undefined) {\n    makeComponent.textContent = text;\n  }\n  selectParent.append(makeComponent);\n};\n\nconst buildUI = () => {\n  // Builds the main UI\n  builder('menu', '#content', 'tabs');\n  builder('input', '.tabs', 'tab', 'button', 'Tasks');\n  builder('input', '.tabs', 'tab', 'button', 'Projects');\n  builder('main', '#content');\n  builder('input', 'main', 'new-task-btn', 'button', 'New Task');\n  builder('div', 'main', 'display');\n  \n  const buttons = document.querySelectorAll('.button');\n  function working() {\n    console.log('This event listener works');\n  }\n  for (let i = 0; i < buttons.length; i += 1) { // Adds event listeners to all buttons\n    buttons[i].addEventListener('click', working);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/buildPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildPage */ \"./src/buildPage.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n\n(0,_buildPage__WEBPACK_IMPORTED_MODULE_1__.buildUI)();\n(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.buildTasks)(); // Adds tasks to the display\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTasks\": () => (/* binding */ buildTasks)\n/* harmony export */ });\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildPage */ \"./src/buildPage.js\");\n\n\n\nfunction buildTasks() {\n// Creates cards corresponding to each task from taskArray\n  const test = (() => {\n    const test = (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.toDoFactory)('test', 'this is a test', 'NOW!', 'IMPORTANT!');\n    _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.taskArray.push(test);\n    console.log(_appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.taskArray);\n  })();\n  console.log('Building tasks!');\n  for (let i = 0; i < _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.taskArray.length; i += 1) {\n    (0,_buildPage__WEBPACK_IMPORTED_MODULE_1__.builder)('div', '.display', `task-card-${i}`);\n    (0,_buildPage__WEBPACK_IMPORTED_MODULE_1__.builder)('h3', `.task-card-${i}`, `task-${i}-title`, undefined, undefined, _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.taskArray[i].title);\n    (0,_buildPage__WEBPACK_IMPORTED_MODULE_1__.builder)('p', `.task-card-${i}`, `task-${i}-due`, undefined, undefined, _appLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.taskArray[i].dueDate);\n  }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/tasks.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;