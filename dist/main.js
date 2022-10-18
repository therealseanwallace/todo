/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (21:2)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| } \\n| \\n>   const addTask = (task) => {\\n|     const newTask = task;\\n|     console.log('newTask is', newTask);\");\n\n//# sourceURL=webpack://todo/./src/appLogic.js?");

/***/ }),

/***/ "./src/buildPage.js":
/*!**************************!*\
  !*** ./src/buildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildUI\": () => (/* binding */ buildUI)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* eslint-disable no-lonely-if */\n/* eslint-disable no-template-curly-in-string */\n/* eslint-disable no-console */\n/* eslint-disable import/prefer-default-export */\n\n\n\n\n\nconst projectArray = _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.returnProjectArray;\nlet cardCounter = 1;\nconst componentFactory = (element, id, projectID) => {\n  const { // use destructuring assignment to get properties of new object\n    name, nodeType, parent, text, inputType, value, class1,\n    class2, taskID, objID, placeholder, innerHTML,\n  } = element;\n  const createDOMNode = () => {\n    // creates a DOM node according to the supplied properties\n    const parentNode = document.querySelector(parent);\n    const newDOMNode = document.createElement(nodeType);\n    if (text) {\n      newDOMNode.innerHTML = text;\n    }\n    if (inputType) {\n      newDOMNode.type = inputType;\n    }\n    if (value) {\n      newDOMNode.value = value;\n    }\n    if (class1) {\n      newDOMNode.classList.add(class1);\n    }\n    if (class2) {\n      newDOMNode.classList.add(class2);\n    }\n    if (id) {\n      newDOMNode.id = `${class1}-${id}`;\n    }\n    if (objID) {\n      newDOMNode.id = objID;\n    }\n    if (placeholder) {\n      newDOMNode.placeholder = placeholder;\n    }\n    if (innerHTML) {\n      newDOMNode.innerHTML = innerHTML;\n    }\n    parentNode.append(newDOMNode);\n  };\n  createDOMNode();\n\n  return {\n    name, nodeType, parent, text, inputType, value, class1, class2, taskID,\n  };\n};\n\nconst clearDisplay = () => {\n  const selectDisplay = document.querySelector('.display');\n  selectDisplay.innerHTML = '';\n};\n\nconst buildDisplay = () => {\n  const displayArray = Object.entries(_objects__WEBPACK_IMPORTED_MODULE_0__.displayObject);\n  for (let i = 0; i < 4; i += 1) {\n    const element = displayArray[i];\n    componentFactory(element[1]);\n  }\n};\n\n// Creates a string of project names which will be used to populate project select elements\nconst assembleProjectString = (projectNames) => {\n  let assembledString = '';\n  for (let i = 0; i < projectNames.length; i += 1) {\n    const string = projectNames[i].title;\n    const newString = ` <option value=\"${i + 1}\">${string}</option>`;\n    assembledString += newString;\n  }\n  return (assembledString);\n};\n\n// Assigns a taskID data attribute to each task card, corresponding to the task's taskID\nconst assignIDToCard = (newCard, index, isProject, task) => {\n  const cardToAssign = newCard;\n  if (isProject) {\n    cardToAssign.taskID = projectArray[index].taskID;\n  } else {\n    cardToAssign.taskID = projectArray[index].tasks[task].taskID;\n  }\n  return (cardToAssign);\n};\n\n// Sets the displayed inputs to match the corresponding value from each task\nconst assignValuesToInputs = (index, isProject, task) => {\n  if (isProject) {\n    const title = document.querySelector(`#task-title-${index + 1}`);\n    title.value = projectArray[index].title;\n    const date = document.querySelector(`#due-date-${index + 1}`);\n    date.value = projectArray[index].dueDate;\n    const notes = document.querySelector(`#notes-${index + 1}`);\n    notes.value = projectArray[index].notes;\n  } else {\n    const title = document.querySelector(`#task-title-${projectArray[index].tasks[task].taskID}`);\n    title.value = projectArray[index].tasks[task].title;\n    const date = document.querySelector(`#due-date-${projectArray[index].tasks[task].taskID}`);\n    date.value = projectArray[index].tasks[task].dueDate;\n    const notes = document.querySelector(`#notes-${projectArray[index].tasks[task].taskID}`);\n    notes.value = projectArray[index].tasks[task].notes;\n  }\n};\n\n// Composes task and project cards and their contents\nconst buildTaskCard = (reference, isProject, card) => {\n  const {\n    titleDiv, taskTitle, dueDate, prioritySelect, projectSelect, notes, innerDisplay, taskCard,\n  } = _objects__WEBPACK_IMPORTED_MODULE_0__.displayObject;\n  const assembleCard = (component) => {\n    const newComponent = component;\n    if (newComponent === taskTitle) {\n      newComponent.parent = `#title-div-${reference}`;\n    } else { newComponent.parent = `#task-card-${reference}`; }\n    return (componentFactory(newComponent, reference));\n  };\n  assembleCard(titleDiv);\n  const cardTitle = assembleCard(taskTitle);\n  assembleCard(dueDate);\n  if (!isProject) {\n    assembleCard(projectSelect);\n    const projectString = assembleProjectString(projectArray);\n    console.log('projectString is', projectString);\n    const projectSelectors = document.querySelectorAll('.project-select');\n    console.log(projectSelectors);\n    for (let i = 0; i < projectSelectors.length; i++) {\n      const element = projectSelectors[i];\n      element.innerHTML = projectString;\n    }\n  }\n  assembleCard(prioritySelect);\n  assembleCard(notes);\n  if (isProject) {\n    assembleCard(innerDisplay);\n    buildTasks(reference);\n  }\n};\n\n// Builds task cards which fill the inner-displays of the project cards\nconst buildTasks = (reference) => {\n  const {\n    taskCard,\n  } = _objects__WEBPACK_IMPORTED_MODULE_0__.displayObject;\n  const projectTasks = projectArray[reference - 1].tasks;\n  for (let i = 0; i < projectTasks.length; i += 1) {\n    const element = projectTasks[i];\n    const { project } = element;\n    const taskCardWithID = assignIDToCard(taskCard, project, false, i);\n    const parentProj = element.project;\n    const parent = `#inner-display-${parentProj + 1}`;\n    taskCardWithID.parent = parent;\n    const { taskID } = taskCardWithID;\n    componentFactory(taskCardWithID, taskID);\n    buildTaskCard(taskCardWithID.taskID, false);\n    const ID = element.taskID;\n    assignValuesToInputs(reference - 1, false, i);\n    cardCounter += 1;\n  }\n  addEventListeners();\n  addDataSrc(0);\n};\n\n// Builds cards corresponding to each project\nconst buildProjectCards = () => {\n  clearDisplay();\n  const {\n    projectCard,\n  } = _objects__WEBPACK_IMPORTED_MODULE_0__.displayObject;\n  for (let i = 0; i < projectArray.length; i += 1) {\n    const projectCardWithID = assignIDToCard(projectCard, i, true);\n    const { taskID } = projectCardWithID;\n    componentFactory(projectCardWithID, taskID);\n    buildTaskCard(projectCardWithID.taskID, true);\n    assignValuesToInputs(i, true);\n    cardCounter += 1;\n  }\n};\n\nconst buildUI = () => {\n  buildDisplay();\n  buildProjectCards();\n};\n\nconst newTaskDisplay = (type) => {\n  clearDisplay();\n  const {\n    taskTitle, dueDate, projectSelect, prioritySelect, notes, newTaskForm, submitButton,\n  } = _objects__WEBPACK_IMPORTED_MODULE_0__.displayObject;\n  componentFactory(newTaskForm);\n  const newTaskTitle = taskTitle;\n  newTaskTitle.parent = '.new-task-form';\n  componentFactory(newTaskTitle);\n  const taskDue = dueDate;\n  taskDue.parent = '.new-task-form';\n  componentFactory(taskDue);\n  const taskPrio = prioritySelect;\n  taskPrio.parent = '.new-task-form';\n  componentFactory(taskPrio);\n  const taskNotes = notes;\n  taskNotes.parent = '.new-task-form';\n  componentFactory(taskNotes);\n  if (type === 0) { // i.e. if this is a new task and not a new project\n    const newProjectSelect = projectSelect;\n    newProjectSelect.parent = '.new-task-form';\n    componentFactory(newProjectSelect);\n    const projectString = assembleProjectString(projectArray);\n    const projectSelector = document.querySelector('.project-select');\n    projectSelector.innerHTML = projectString;\n  }\n  componentFactory(submitButton);\n  if (type === 1) {\n    document.querySelector('.submit').classList.add('new-project');\n  }\n  addDataSrc(1);\n  addEventListeners();\n};\n\nlet newTask = _objects__WEBPACK_IMPORTED_MODULE_0__.emptyTask;\n\nconst assembleNewTask = (e) => {\n  // eslint-disable-next-line default-case\n  console.log('assembling new task!');\n  switch (true) {\n    // Updates newTask according to user input\n    case e.target.classList.contains('task-title'):\n      newTask.title = e.target.value;\n      break;\n    case e.target.classList.contains('due-date'):\n      newTask.dueDate = e.target.value;\n      break;\n    case e.target.classList.contains('priority-select'):\n      newTask.priority = e.target.selectedIndex;\n      break;\n    case e.target.classList.contains('notes'):\n      newTask.notes = e.target.value;\n      break;\n    case e.target.classList.contains('project-select'):\n      newTask.project = e.target.selectedIndex;\n      console.log('proj select! new proj is', newTask.project);\n      console.log(newTask);\n      break;\n    default:\n      console.log('submit button woooo!');\n      if (e.target.classList.contains('new-project')) {\n        newTask.type = 'project';\n      } else { newTask.type = 'task'; }\n      console.log()\n      _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.addTask(newTask);\n      newTask = _objects__WEBPACK_IMPORTED_MODULE_0__.emptyTask;\n      console.log('projectArray is', projectArray);\n  }\n};\n\n// Handles all user inputs received by the event listeners\nconst getInput = (e) => {\n  // Handles inputs which come from the home screen/main display\n  if (e.target.getAttribute('data-src') === 'home') {\n    if (e.target.id === 'new-task') {\n      newTaskDisplay(0);\n    }\n    if (e.target.id === 'new-project') {\n      newTaskDisplay(1);\n    }\n  }\n  // Handles all remaining inputs (i.e. those from new task/new project window)\n  else { assembleNewTask(e); }\n  \n};\n\nconst addEventListeners = () => {\n  const inputs = document.querySelectorAll('input');\n  const dropdowns = document.querySelectorAll('select');\n  for (let i = 0; i < inputs.length; i += 1) {\n    if (inputs[i].type === 'button') {\n      inputs[i].addEventListener('click', getInput);\n    } else {\n      inputs[i].addEventListener('change', getInput);\n    }\n  }\n  for (let i = 0; i < dropdowns.length; i += 1) {\n    dropdowns[i].addEventListener('change', getInput);\n  }\n};\n\n// Adds a data-src attribute of to all inputs which will\n// be used to handle user inputs\nconst addDataSrc = (func) => {\n  const inputs = document.querySelectorAll('input');\n  const dropdowns = document.querySelectorAll('select');\n  if (func === 0) { // if func === 0, this was called from buildTasks\n    //                 and so the data-src should be 'home'\n    for (let i = 0; i < inputs.length; i += 1) {\n      inputs[i].setAttribute('data-src', 'home');\n    }\n    for (let i = 0; i < dropdowns.length; i += 1) {\n      dropdowns[i].setAttribute('data-src', 'home');\n    }\n  }\n  if (func === 1) { // 1 corresponds to newTaskDisplay\n    for (let i = 0; i < inputs.length; i += 1) {\n      inputs[i].setAttribute('data-src', 'new-task');\n    }\n    for (let i = 0; i < dropdowns.length; i += 1) {\n      dropdowns[i].setAttribute('data-src', 'new-task');\n    }\n  }\n};\n\n\n//# sourceURL=webpack://todo/./src/buildPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildPage */ \"./src/buildPage.js\");\n\n\n(0,_buildPage__WEBPACK_IMPORTED_MODULE_0__.buildUI)();\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"demo\": () => (/* binding */ demo),\n/* harmony export */   \"displayObject\": () => (/* binding */ displayObject),\n/* harmony export */   \"emptyTask\": () => (/* binding */ emptyTask)\n/* harmony export */ });\nconst displayObject = {\n  pageTitle: {\n    name: 'pageTitle',\n    nodeType: 'h1',\n    parent: '#content',\n    text: 'To-Do List',\n  },\n  newTaskButton: {\n    name: 'newTaskButton',\n    nodeType: 'input',\n    parent: '#content',\n    inputType: 'button',\n    value: 'New Task',\n    objID: 'new-task',\n  },\n  newProjectButton: {\n    name: 'newTaskButton',\n    nodeType: 'input',\n    parent: '#content',\n    inputType: 'button',\n    value: 'New Project',\n    objID: 'new-project',\n  },\n  display: {\n    name: 'display',\n    nodeType: 'div',\n    parent: '#content',\n    class1: 'display',\n  },\n  projectCard: {\n    name: 'projectCard',\n    nodeType: 'div',\n    parent: '.display',\n    class1: 'task-card',\n  },\n  taskCard: {\n    name: 'taskCard',\n    nodeType: 'div',\n    class1: 'task-card',\n  },\n  titleDiv: {\n    name: 'title-div',\n    nodeType: 'div',\n    class1: 'title-div',\n  },\n  taskTitle: {\n    name: 'taskTitle',\n    nodeType: 'input',\n    inputType: 'text',\n    class1: 'task-title',\n    placeholder: 'Please enter a title for this task',\n  },\n  dueDate: {\n    name: 'dueDate',\n    nodeType: 'input',\n    inputType: 'date',\n    class1: 'due-date',\n  },\n  prioritySelect: {\n    name: 'prioritySelect',\n    nodeType: 'select',\n    class1: 'priority-select',\n    innerHTML: '<option value=\"0\">Low</option><option value=\"1\">Normal</option><option value=\"2\">Urgent</option>',\n  },\n  projectSelect: {\n    name: 'projectSelect',\n    nodeType: 'select',\n    class1: 'project-select',\n  },\n  notes: {\n    name: 'notes',\n    nodeType: 'input',\n    inputType: 'text',\n    class1: 'notes',\n    placeholder: 'Please enter any notes about this task',\n  },\n  innerDisplay: {\n    name: 'innerDisplay',\n    nodeType: 'div',\n    class1: 'inner-display',\n  },\n  newTaskForm: {\n    name: 'newTaskForm',\n    nodeType: 'fieldset',\n    class1: 'new-task-form',\n    parent: '.display',\n  },\n  submitButton: {\n    name: 'submitButton',\n    nodeType: 'input',\n    inputType: 'button',\n    class1: 'submit',\n    parent: '.new-task-form',\n    value: 'Submit',\n  },\n};\n\nconst demo = {\n  demoProject1: {\n    title: 'A demo project',\n    dueDate: '2021-12-31',\n    priority: '1',\n    notes: 'This is a test project',\n    type: 'project',\n    numberTasks: '0',\n    tasks: [],\n  },\n  demoProject2: {\n    title: 'A second demo project',\n    dueDate: '2022-01-15',\n    priority: '1',\n    notes: 'This is another test project',\n    type: 'project',\n    numberTasks: '0',\n    tasks: [],\n  },\n  demoProject3: {\n    title: 'A third demo project',\n    dueDate: '2022-02-01',\n    priority: '1',\n    notes: 'This is another test project',\n    type: 'project',\n    numberTasks: '0',\n    tasks: [],\n  },\n  demoTask1: {\n    title: 'Wash the dishes',\n    dueDate: '2021-12-30',\n    priority: '2',\n    notes: 'I hate dishes',\n    type: 'task',\n    project: 0,\n  },\n  demoTask2: {\n    title: 'Cook dinner',\n    dueDate: '2021-12-31',\n    priority: '1',\n    notes: 'Yum',\n    type: 'task',\n    project: 0,\n  },\n  demoTask3: {\n    title: 'Go shopping',\n    dueDate: '2022-01-02',\n    priority: '1',\n    notes: 'Need food',\n    type: 'task',\n    project: 1,\n  },\n  demoTask4: {\n    title: 'Play with dog',\n    dueDate: '2022-01-03',\n    priority: '2',\n    notes: 'Dogs are great',\n    type: 'task',\n    project: 1,\n  },\n  demoTask5: {\n    title: 'Go shopping',\n    dueDate: '2022-01-04',\n    priority: '1',\n    notes: 'Need food',\n    type: 'task',\n    project: 2,\n  },\n  demoTask6: {\n    title: 'Play with dog 2',\n    dueDate: '2022-01-05',\n    priority: '2',\n    notes: 'Dogs are great',\n    type: 'task',\n    project: 2,\n  },\n};\n\nconst emptyTask = {\n  title: '',\n  dueDate: '',\n  priority: '1',\n  notes: '',\n  type: '',\n  project: 0,\n}\n\n\n\n//# sourceURL=webpack://todo/./src/objects.js?");

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