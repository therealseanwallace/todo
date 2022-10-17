/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { displayObject } from './objects';
import { tasks } from './appLogic';

export { buildUI };

const projectArray = tasks.returnProjectArray;
let cardCounter = 1;
const componentFactory = (element, id, projectID) => {
  const { // use destructuring assignment to get properties of new object
    name, nodeType, parent, text, inputType, value, class1, class2, taskID, objID, placeholder,
  } = element;
  const createDOMNode = () => {
    // creates a DOM node according to the supplied properties
    const parentNode = document.querySelector(parent);
    const newDOMNode = document.createElement(nodeType);
    if (text) {
      newDOMNode.innerHTML = text;
    }
    if (inputType) {
      newDOMNode.type = inputType;
    }
    if (value) {
      newDOMNode.value = value;
    }
    if (class1) {
      newDOMNode.classList.add(class1);
    }
    if (class2) {
      newDOMNode.classList.add(class2);
    }
    if (id) {
      newDOMNode.id = `${class1}-${id}`;
    }
    if (objID) {
      newDOMNode.id = objID;
    }
    if (placeholder) {
      newDOMNode.placeholder = placeholder;
    }
    parentNode.append(newDOMNode);
  };
  createDOMNode();

  return {
    name, nodeType, parent, text, inputType, value, class1, class2, taskID,
  };
};

const clearDisplay = () => {
  const selectDisplay = document.querySelector('.display');
  selectDisplay.innerHTML = '';
};

const buildDisplay = () => {
  const displayArray = Object.entries(displayObject);
  for (let i = 0; i < 4; i += 1) {
    const element = displayArray[i];
    componentFactory(element[1]);
  }
};

// Creates a string of project names which will be used to populate project select elements
const assembleProjectString = (projectNames) => {
  console.log('projectNames is', projectNames);
  let assembledString = '';
  for (let i = 0; i < projectNames.length; i += 1) {
    const string = projectNames[i].title;
    console.log('string is', string);
    const newString = ` <option value="${i + 1}">${string}</option>`;
    assembledString += newString;
  }
  return (assembledString);
};

// Assigns a taskID data attribute to each task card, corresponding to the task's taskID
const assignIDToCard = (newCard, index, isProject, task) => {
  const cardToAssign = newCard;
  if (isProject) {
    cardToAssign.taskID = projectArray[index].taskID;
  } else {
    cardToAssign.taskID = projectArray[index].tasks[task].taskID;
  }
  return (cardToAssign);
};

// Sets the displayed inputs to match the corresponding value from each task
const assignValuesToInputs = (index, isProject, task) => {
  if (isProject) {
    const title = document.querySelector(`#task-title-${index + 1}`);
    title.value = projectArray[index].title;
    const date = document.querySelector(`#due-date-${index + 1}`);
    date.value = projectArray[index].dueDate;
    const notes = document.querySelector(`#notes-${index + 1}`);
    notes.value = projectArray[index].notes;
  } else {
    const title = document.querySelector(`#task-title-${projectArray[index].tasks[task].taskID}`);
    title.value = projectArray[index].tasks[task].title;
    const date = document.querySelector(`#due-date-${projectArray[index].tasks[task].taskID}`);
    date.value = projectArray[index].tasks[task].dueDate;
    const notes = document.querySelector(`#notes-${projectArray[index].tasks[task].taskID}`);
    notes.value = projectArray[index].tasks[task].notes;
  }
};

// Composes task and project cards and their contents
const buildTaskCard = (reference, isProject, card) => {
  const {
    titleDiv, taskTitle, dueDate, prioritySelect, projectSelect, notes, innerDisplay, taskCard,
  } = displayObject;
  const assembleCard = (component) => {
    const newComponent = component;
    if (newComponent === taskTitle) {
      newComponent.parent = `#title-div-${reference}`;
    } else { newComponent.parent = `#task-card-${reference}`; }
    return (componentFactory(newComponent, reference));
  };
  assembleCard(titleDiv);
  const cardTitle = assembleCard(taskTitle);
  assembleCard(dueDate);
  if (!isProject) {
    assembleCard(projectSelect);
    const projectString = assembleProjectString(projectArray);
    console.log('projectString is', projectString);
    const projectSelectors = document.querySelectorAll('.project-select');
    console.log(projectSelectors);
    for (let i = 0; i < projectSelectors.length; i++) {
      const element = projectSelectors[i];
      element.innerHTML = projectString;
    }
  }
  assembleCard(prioritySelect);
  const prioSelectors = document.querySelectorAll('.priority-select');
  for (let i = 0; i < prioSelectors.length; i++) {
    const element = prioSelectors[i];
    element.innerHTML = '<option value="0">Low</option><option value="1">Normal</option><option value="2">Urgent</option>';
  }
  assembleCard(notes);
  if (isProject) {
    assembleCard(innerDisplay);
    buildTasks(reference);
  }
};

// Builds task cards which fill the inner-displays of the project cards
const buildTasks = (reference) => {
  const {
    taskCard,
  } = displayObject;
  const projectTasks = projectArray[reference - 1].tasks;
  for (let i = 0; i < projectTasks.length; i += 1) {
    const element = projectTasks[i];
    const { project } = element;
    const taskCardWithID = assignIDToCard(taskCard, project, false, i);
    const parentProj = element.project;
    const parent = `#inner-display-${parentProj + 1}`;
    taskCardWithID.parent = parent;
    const { taskID } = taskCardWithID;
    componentFactory(taskCardWithID, taskID);
    buildTaskCard(taskCardWithID.taskID, false);
    const ID = element.taskID;
    assignValuesToInputs(reference - 1, false, i);
    cardCounter += 1;
  }
  addEventListeners();
  addDataSrc(0);
};

// Builds cards corresponding to each project
const buildProjectCards = () => {
  clearDisplay();
  const {
    projectCard,
  } = displayObject;
  for (let i = 0; i < projectArray.length; i += 1) {
    const projectCardWithID = assignIDToCard(projectCard, i, true);
    const { taskID } = projectCardWithID;
    componentFactory(projectCardWithID, taskID);
    buildTaskCard(projectCardWithID.taskID, true);
    assignValuesToInputs(i, true);
    cardCounter += 1;
  }
};

const buildUI = () => {
  buildDisplay();
  buildProjectCards();
};

const newTaskDisplay = (type) => {
  clearDisplay();
  const {
    taskTitle, dueDate, projectSelect, prioritySelect, notes, newTaskForm, submitButton,
  } = displayObject;
  componentFactory(newTaskForm);
  const newTaskTitle = taskTitle;
  newTaskTitle.parent = '.new-task-form';
  componentFactory(newTaskTitle);
  const taskDue = dueDate;
  taskDue.parent = '.new-task-form';
  componentFactory(taskDue);
  const taskPrio = prioritySelect;
  taskPrio.parent = '.new-task-form';
  componentFactory(taskPrio);
  const taskNotes = notes;
  taskNotes.parent = '.new-task-form';
  componentFactory(taskNotes);
  if (type === 0) { // i.e. if this is a new task and not a new project
    const newProjectSelect = projectSelect;
    newProjectSelect.parent = '.new-task-form';
    componentFactory(newProjectSelect);
  }
  componentFactory(submitButton);
  addDataSrc(1);
  addEventListeners();
};

// Handles all user inputs received by the event listeners
const getInput = (e) => {
  console.log('getting input!');
  console.log(e);
  if (e.target.getAttribute('data-src') === 'home') {
    if (e.target.id === 'new-task') {
      newTaskDisplay(0);
    }
    if (e.target.id === 'new-project') {
      newTaskDisplay(1);
    }
  }
};

const addEventListeners = () => {
  const inputs = document.querySelectorAll('input');
  const dropdowns = document.querySelectorAll('select');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'button') {
      inputs[i].addEventListener('click', getInput);
    } else {
      inputs[i].addEventListener('change', getInput);
    }
  }
  for (let i = 0; i < dropdowns.length; i += 1) {
    dropdowns[i].addEventListener('change', getInput);
  }
};

// Adds a data-src attribute of to all inputs which will
// be used to handle user inputs
const addDataSrc = (func) => {
  const inputs = document.querySelectorAll('input');
  const dropdowns = document.querySelectorAll('select');
  console.log('inputs and dropdowns are', inputs, dropdowns);
  if (func === 0) { // if func === 0, this was called from buildTasks
    //                 and so the data-src should be 'home'
    for (let i = 0; i < inputs.length; i += 1) {
      inputs[i].setAttribute('data-src', 'home');
    }
    for (let i = 0; i < dropdowns.length; i += 1) {
      dropdowns[i].setAttribute('data-src', 'home');
    }
  }
  if (func === 1) { // 1 corresponds to newTaskDisplay
    for (let i = 0; i < inputs.length; i += 1) {
      inputs[i].setAttribute('data-src', 'new-task');
    }
    for (let i = 0; i < dropdowns.length; i += 1) {
      dropdowns[i].setAttribute('data-src', 'new-task');
    }
  }
};
