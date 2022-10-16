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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\n\n\nconst tasks = (() => {\n  const projectArray = [];\n  let taskCounter = 1;\n  const addTask = (task) => {\n    const newTask = task[1];\n    newTask.taskID = taskCounter;\n    if (newTask.type === 'project') {\n      projectArray.push(newTask);\n    }\n    if (newTask.type === 'task') {\n      const newProjectRef = newTask.project;\n      projectArray[newProjectRef].tasks.push(task);\n    }\n    taskCounter += 1;\n  };\n\n  const addDemo = (() => {\n    // Adds dummy content to projectArray\n    const demoObjects = Object.entries(_objects__WEBPACK_IMPORTED_MODULE_0__.demo);\n    for (let i = 0; i < demoObjects.length; i++) {\n      const element = demoObjects[i];\n      addTask(element);\n    }\n    /*addProject(demo.project1);\n    addProject(demo.project2);\n    addProject(demo.project3);*/\n    console.log('projectArray post-demo push is', projectArray);\n  })();\n\n  const getObjectByID = () => {\n    for (let i = 0; i < projectArray.length; i++) {\n      const element = projectArray[i];\n      console.log('element is', element);\n      \n    }\n  };\n\n  const returnProjectArray = projectArray;\n\n  return { returnProjectArray, getObjectByID };\n})();\n\n/*\nconst oldTasks = (() => {\n  const projectArray = [[]];\n  const addProject = (newProject) => {\n    if (newProject !== undefined) {\n      projectArray.push([newProject]);\n    } else {\n      projectArray.push([]);\n    }\n  };\n  const addTask = (newTask, project) => {\n    // console.log('addtask active, projectArray, project are', projectArray, ',', project);\n    if (projectArray[project] === undefined) {\n      addProject();\n      projectArray[projectArray.length - 1].push(newTask);\n    } else { projectArray[project].push(newTask); }\n  };\n\n  const deleteTask = (project, task) => {\n    console.log('project is', projectArray[project][task]);\n    try {\n      projectArray[project].pop(task);\n    } catch {console.log(\"task doesn't exist\");\n    }\n  };\n\n  const returnProjects = projectArray;\n  const getObjectFromArray = (id) => {\n    for (let i = 0; i < projectArray.length; i++) {\n      const idCompare = Number(id);\n      const project = projectArray[i];\n      for (let index = 0; index < project.length; index++) {\n        const element = project[index];\n        const elementCompare = Number(element.taskID);\n        if (elementCompare === idCompare) {\n          return (element);\n        }\n      }\n    }\n  };\n\n  const getIndex = (project, elementID) => {\n    const elementIDCompare = Number(elementID);\n    const index = projectArray[project].findIndex((item) => item.taskID === elementIDCompare);\n    return (index);\n  };\n\n  const changeProject = (project, elementID, newProject) => {\n    const index = projectArray[project].findIndex((item) => item.taskID === elementID);\n    const poppedObject = projectArray[project].pop(index);\n    projectArray[newProject].push(poppedObject);\n  };\n\n  const changeTask = (project, elementID, newValue, attribute) => {\n    const index = getIndex(project, elementID);\n    if (attribute === 'title') {\n      projectArray[project][index].title = newValue;\n    }\n    if (attribute === 'date') {\n      projectArray[project][index].dueDate = newValue;\n    }\n    if (attribute === 'notes') {\n      projectArray[project][index].notes = newValue;\n    }\n  };\n\n  return {\n    addTask,\n    addProject,\n    returnProjects,\n    getObjectFromArray,\n    changeProject,\n    changeTask,\n    deleteTask,\n  };\n})();\n\n\n*/\n\n//# sourceURL=webpack://todo/./src/appLogic.js?");

/***/ }),

/***/ "./src/buildPage.js":
/*!**************************!*\
  !*** ./src/buildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildUI\": () => (/* binding */ buildUI)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* eslint-disable no-console */\n/* eslint-disable import/prefer-default-export */\n\n\n\n\n\nconst projectArray = _appLogic__WEBPACK_IMPORTED_MODULE_1__.tasks.returnProjectArray;\n\nconst componentFactory = (element, id, projectID) => {\n  const { // use destructuring assignment to get properties of new object\n    name, type, parent, text, inputType, value, class1, class2, taskID,\n  } = element;\n  const createDOMNode = () => {\n    // creates a DOM node according to the supplied properties\n    const parentNode = document.querySelector(parent);\n    const newDOMNode = document.createElement(type);\n    if (text) {\n      newDOMNode.innerHTML = text;\n    }\n    if (inputType) {\n      newDOMNode.type = inputType;\n    }\n    if (value) {\n      newDOMNode.value = value;\n    }\n    if (class1) {\n      newDOMNode.classList.add(class1);\n    }\n    if (class2) {\n      newDOMNode.classList.add(class2);\n    }\n    if (id) {\n      newDOMNode.id = `${class1}-${id}`;\n    }\n    if (taskID) {\n      newDOMNode.setAttribute('data-taskID', taskID);\n    }\n    parentNode.append(newDOMNode);\n  };\n  createDOMNode();\n  return {\n    name, type, parent, text, inputType,\n  };\n};\n\nconst clearDisplay = () => {\n  const selectDisplay = document.querySelector('.display');\n  selectDisplay.innerHTML = '';\n};\n\nconst buildDisplay = () => {\n  const displayArray = Object.entries(_objects__WEBPACK_IMPORTED_MODULE_0__.displayObject);\n  for (let i = 0; i < 4; i += 1) {\n    const element = displayArray[i];\n    componentFactory(element[1]);\n  }\n};\n\nconst assignIDToCard = (newCard, index, isProject, task) => {\n  const cardToAssign = newCard;\n  if (isProject) {\n    cardToAssign.taskID = projectArray[index].taskID;\n  } else {\n    cardToAssign.taskID = projectArray[index].tasks[task][1].taskID;\n  }\n  return (cardToAssign);\n};\n\nconst buildTasks = (reference) => {\n  const {\n    taskCard,\n  } = _objects__WEBPACK_IMPORTED_MODULE_0__.displayObject;\n  const projectTasks = projectArray[reference - 1].tasks;\n  console.log('projectTasks =', projectTasks);\n  for (let i = 0; i < projectTasks.length; i += 1) {\n    const element = projectTasks[i];\n    console.log('element[1] is', element[1]);\n    const { project } = element[1];\n    console.log('project is', project);\n    console.log('project + 1 is', project + 1);\n    const taskCardWithID = assignIDToCard(taskCard, project, false, i);\n    console.log('taskCardWithID = ', taskCardWithID);\n    const parentProj = element[1].project;\n    const parent = `#inner-display-${parentProj + 1}`;\n    console.log('parent = ', parent);\n    taskCardWithID.parent = parent;\n    console.log('taskCardWithID = ', taskCardWithID);\n    const { taskID } = taskCardWithID;\n    componentFactory(taskCardWithID, taskID);\n    buildTaskCard(taskCardWithID.taskID, false);\n  }\n};\n\nconst buildTaskCard = (reference, isProject, card) => {\n  const {\n    titleDiv, taskTitle, dueDate, prioritySelect, projectSelect, notes, innerDisplay, taskCard,\n  } = _objects__WEBPACK_IMPORTED_MODULE_0__.displayObject;\n  const assembleCard = (component) => {\n    const newComponent = component;\n    if (newComponent === taskTitle) {\n      newComponent.parent = `#title-div-${reference}`;\n    } else { newComponent.parent = `#task-card-${reference}`; }\n    componentFactory(newComponent, reference);\n  };\n  assembleCard(titleDiv);\n  assembleCard(taskTitle);\n  assembleCard(dueDate);\n  if (!isProject) {\n    assembleCard(projectSelect);\n  }\n  assembleCard(prioritySelect);\n  assembleCard(notes);\n  if (isProject) {\n    assembleCard(innerDisplay);\n    buildTasks(reference);\n  }\n};\n\nconst buildProjectCards = () => {\n  clearDisplay();\n  const {\n    projectCard,\n  } = _objects__WEBPACK_IMPORTED_MODULE_0__.displayObject;\n  for (let i = 0; i < projectArray.length; i += 1) {\n    const projectCardWithID = assignIDToCard(projectCard, i, true);\n    const { taskID } = projectCardWithID;\n    componentFactory(projectCardWithID, taskID);\n    buildTaskCard(projectCardWithID.taskID, true);\n  }\n};\n\n/*\nconst buildProjectCards = () => {\n  clearDisplay();\n  const {\n    projectCard,\n  } = displayObject;\n  for (let i = 1; i < projectArray.length + 1; i += 1) {\n    console.log('projectArray[i - 1]=', projectArray[i - 1]);\n    const newCard = projectCard;\n    newCard.taskID = projectArray[i - 1].taskID;\n    const newCardWithID = componentFactory(newCard, cardCounter);\n    console.log('newCard=', newCard);\n    console.log('cardCounter=', cardCounter);\n    buildTaskCard(cardCounter, true);\n  }\n}; */\n\n  /*\n  let dropboxCounter = 0;\n  let taskCardCounter = 0;\n  let projectCardCounter = 0;\n  for (let i = 0; i < array.length; i++) {\n    const element = array[i];\n  }*/\n\n\nconst buildUI = () => {\n  buildDisplay();\n  buildProjectCards();\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/buildPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildPage */ \"./src/buildPage.js\");\n\n\n(0,_buildPage__WEBPACK_IMPORTED_MODULE_0__.buildUI)();\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"demo\": () => (/* binding */ demo),\n/* harmony export */   \"displayObject\": () => (/* binding */ displayObject)\n/* harmony export */ });\nconst displayObject = {\n  pageTitle: {\n    name: 'pageTitle',\n    type: 'h1',\n    parent: '#content',\n    text: 'To-Do List',\n  },\n  newTaskButton: {\n    name: 'newTaskButton',\n    type: 'input',\n    parent: '#content',\n    inputType: 'button',\n    value: 'New Task',\n  },\n  newProjectButton: {\n    name: 'newTaskButton',\n    type: 'input',\n    parent: '#content',\n    inputType: 'button',\n    value: 'New Project',\n  },\n  display: {\n    name: 'display',\n    type: 'div',\n    parent: '#content',\n    class1: 'display',\n  },\n  projectCard: {\n    name: 'projectCard',\n    type: 'div',\n    parent: '.display',\n    class1: 'task-card',\n  },\n  taskCard: {\n    name: 'taskCard',\n    type: 'div',\n    class1: 'task-card',\n  },\n  titleDiv: {\n    name: 'title-div',\n    type: 'div',\n    class1: 'title-div',\n  },\n  taskTitle: {\n    name: 'taskTitle',\n    type: 'input',\n    inputType: 'text',\n    class1: 'task-title',\n  },\n  dueDate: {\n    name: 'dueDate',\n    type: 'input',\n    inputType: 'date',\n    class1: 'due-date',\n  },\n  prioritySelect: {\n    name: 'prioritySelect',\n    type: 'select',\n    class1: 'priority-select',\n  },\n  projectSelect: {\n    name: 'projectSelect',\n    type: 'select',\n    class1: 'project-select',\n  },\n  notes: {\n    name: 'notes',\n    type: 'input',\n    inputType: 'text',\n    class1: 'notes',\n  },\n  innerDisplay: {\n    name: 'innerDisplay',\n    type: 'div',\n    class1: 'inner-display',\n  }\n};\n\nconst demo = {\n  demoProject1: {\n    title: 'A demo project',\n    dueDate: '03/29/1983',\n    priority: '1',\n    notes: 'This is a test project',\n    type: 'project',\n    numberTasks: '0',\n    tasks: [],\n  },\n  demoProject2: {\n    title: 'A second demo project',\n    dueDate: '04/29/1983',\n    priority: '1',\n    notes: 'This is another test project',\n    type: 'project',\n    numberTasks: '0',\n    tasks: [],\n  },\n  demoProject3: {\n    title: 'A third demo project',\n    dueDate: '04/29/1983',\n    priority: '1',\n    notes: 'This is another test project',\n    type: 'project',\n    numberTasks: '0',\n    tasks: [],\n  },\n  demoTask1: {\n    title: 'Wash the dishes',\n    dueDate: '01/25/1983',\n    priority: '2',\n    notes: 'I hate dishes',\n    type: 'task',\n    project: 0,\n  },\n  demoTask2: {\n    title: 'Cook dinner',\n    dueDate: '01/25/1983',\n    priority: '1',\n    notes: 'Yum',\n    type: 'task',\n    project: 0,\n  },\n  demoTask3: {\n    title: 'Go shopping',\n    dueDate: '05/15/1983',\n    priority: '1',\n    notes: 'Need food',\n    type: 'task',\n    project: 1,\n  },\n  demoTask4: {\n    title: 'Play with dog',\n    dueDate: '05/16/1983',\n    priority: '2',\n    notes: 'Dogs are great',\n    type: 'task',\n    project: 1,\n  },\n  demoTask5: {\n    title: 'Go shopping',\n    dueDate: '05/15/1983',\n    priority: '1',\n    notes: 'Need food',\n    type: 'task',\n    project: 2,\n  },\n  demoTask6: {\n    title: 'Play with dog',\n    dueDate: '05/16/1983',\n    priority: '2',\n    notes: 'Dogs are great',\n    type: 'task',\n    project: 2,\n  },\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/objects.js?");

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