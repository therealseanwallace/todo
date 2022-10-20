/* eslint-disable no-lonely-if */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { displayObject, emptyTask  } from './objects';
import { tasks } from './appLogic';

export { buildUI };

const projectArray = () => {
  const currentProjectArray = tasks.returnProjectArray();
  return (currentProjectArray);
};

const componentFactory = (element, id, projectID) => {
  const { // use destructuring assignment to get properties of new object
    name, nodeType, parent, text, inputType, value, class1,
    class2, taskID, objID, placeholder, innerHTML,
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
      newDOMNode.setAttribute('data-taskID', id);
    }
    if (objID) {
      newDOMNode.id = objID;
    }
    if (placeholder) {
      newDOMNode.placeholder = placeholder;
    }
    if (innerHTML) {
      newDOMNode.innerHTML = innerHTML;
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
  for (let i = 0; i < 7; i += 1) {
    const element = displayArray[i];
    componentFactory(element[1]);
  }
};

// Creates a string of project names which will be used to populate project select elements
const assembleProjectString = (projectNames) => {
  let assembledString = '';
  for (let i = 0; i < projectNames.length; i += 1) {
    const string = projectNames[i].title;
    const newString = ` <option value="${i + 1}">${string}</option>`;
    assembledString += newString;
  }
  return (assembledString);
};

// Assigns a taskID and project to each card object, corresponding to the task's taskID
const assignIDToCard = (newCard, index, isProject, task) => {
  const cardToAssign = newCard;
  if (isProject) {
    cardToAssign.taskID = projectArray()[index].taskID;
    cardToAssign.project = projectArray()[index].project;
  } else {
    cardToAssign.taskID = projectArray()[index].taskList[task].taskID;
    cardToAssign.project = projectArray()[index].taskList[task].project;
  }
  return (cardToAssign);
};

// Sets the displayed inputs to match the corresponding value from each task
const assignValuesToInputs = (taskCard, isProject, task, index) => {
  const { taskID, project } = taskCard;
  //console.log('taskID, isProject, task, index is', taskID, isProject, task, index);
  if (isProject) {
    const title = document.querySelector(`#task-title-${taskID}`);
    title.value = projectArray()[project - 1].title;
    const date = document.querySelector(`#due-date-${taskID}`);
    date.value = projectArray()[project - 1].dueDate;
    const notes = document.querySelector(`#notes-${taskID}`);
    notes.value = projectArray()[project - 1].notes;
  } else {
    const title = document.querySelector(`#task-title-${taskID}`);
    title.value = projectArray()[project].taskList[task].title;
    const date = document.querySelector(`#due-date-${taskID}`);
    date.value = projectArray()[project].taskList[task].dueDate;
    const notes = document.querySelector(`#notes-${taskID}`);
    notes.value = projectArray()[project].taskList[task].notes;
  }
};

// Composes task and project cards and their contents
const buildTaskCard = (reference, isProject, card) => {
  const {
    titleDiv, taskTitle, dueDate, prioritySelect,
    projectSelect, notes, innerDisplay, taskCard, taskAttributes,
  } = displayObject;
  const assembleCard = (component) => {
    const newComponent = component;
    if (isProject) {
      console.log('this is a project');
      if (component === titleDiv || component === innerDisplay) {
        console.log('new component is titleDiv or innerDisplay');
        newComponent.parent = `#task-card-${reference}`;
        console.log('newComponent is', newComponent);
      }
      if (component === taskAttributes || component === notes) {
        newComponent.parent = `#title-div-${reference}`;
        console.log('newComponent is taskAttributes or notes');
      }
      if (component === taskTitle || component === dueDate || component === prioritySelect) {
        newComponent.parent = `#attributes-${reference}`;
      }
    } else {
      console.log('is not a project');
      if (component === notes || component === titleDiv) {
        newComponent.parent = `#task-card-${reference}`;
      } else {
        newComponent.parent = `#title-div-${reference}`;
      }
    }
    return (componentFactory(newComponent, reference));
  };
  assembleCard(titleDiv);
  if (isProject) {
    console.log('this is a project');
    assembleCard(taskAttributes);
  }
  assembleCard(taskTitle);
  assembleCard(dueDate);
  if (!isProject) {
    assembleCard(projectSelect);
    const projectString = assembleProjectString(projectArray());
    const projectSelectors = document.querySelectorAll('.project-select');
    for (let i = 0; i < projectSelectors.length; i += 1) {
      const element = projectSelectors[i];
      element.innerHTML = projectString;
    }
  }
  assembleCard(prioritySelect);
  assembleCard(notes);
  if (isProject) {
    assembleCard(innerDisplay);
    //buildTasks(reference);
  }
};

// Builds task cards which fill the inner-displays of the project cards
const buildTasks = (reference) => {
  const {
    taskCard,
  } = displayObject;
  const projectTasks = projectArray()[reference].taskList;
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
    assignValuesToInputs(taskCardWithID, false, i);
  }
};

// Builds cards corresponding to each project
const buildProjectCards = () => {
  clearDisplay();
  const {
    projectCard,
  } = displayObject;
  for (let i = 0; i < projectArray().length; i += 1) {
    const projectCardWithID = assignIDToCard(projectCard, i, true);
    const { taskID, project } = projectCardWithID;
    componentFactory(projectCardWithID, taskID);
    buildTaskCard(projectCardWithID.taskID, true);
    assignValuesToInputs(projectCardWithID, true, null, i);
    buildTasks(projectCardWithID.project - 1);
  }
};

const buildUI = () => {
  buildDisplay();
  clearDisplay();
  buildProjectCards();
  addDataSrc(0);
  addEventListeners();
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
    const projectString = assembleProjectString(projectArray());
    const projectSelector = document.querySelector('.project-select');
    projectSelector.innerHTML = projectString;
  }
  componentFactory(submitButton);
  if (type === 1) {
    document.querySelector('.submit').classList.add('new-project');
  }
  addDataSrc(1);
  addEventListeners();
};

let newTask = tasks.taskFactory(emptyTask);

const assembleNewTask = (e) => {
  // eslint-disable-next-line default-case
  switch (true) {
    // Updates newTask according to user input
    case e.target.classList.contains('task-title'):
      newTask.title = e.target.value;
      break;
    case e.target.classList.contains('due-date'):
      newTask.dueDate = e.target.value;
      break;
    case e.target.classList.contains('priority-select'):
      newTask.priority = e.target.selectedIndex;
      break;
    case e.target.classList.contains('notes'):
      newTask.notes = e.target.value;
      break;
    case e.target.classList.contains('project-select'):
      newTask.project = e.target.selectedIndex;
      break;
    default:
      if (e.target.classList.contains('new-project')) {
        newTask.type = 'project';
      } else { newTask.type = 'task'; }
      if (!newTask.project) {
        newTask.project = 0;
      }
      tasks.addTask(newTask);
      newTask = tasks.taskFactory(emptyTask);
      clearDisplay();
      buildProjectCards();
      addDataSrc(0);
      addEventListeners();
      
  }
};

// Handles all user inputs received by the event listeners
const getInput = (e) => {
  // Handles inputs which come from the home screen/main display
  if (e.target.getAttribute('data-src') === 'home') {
    const taskIDNum = Number(e.target.getAttribute('data-taskID'));
    const task = tasks.getTaskByID(taskIDNum);
    console.log('task is', task);
    if (e.target.id === 'new-task') {
      newTaskDisplay(0);
    }
    if (e.target.id === 'new-project') {
      newTaskDisplay(1);
    }
    if (e.target.classList.contains('task-title')) {
      console.log('task-title input. task is', task);
      console.log('result is', tasks.modifyTask(task[0], task[1], 0, e.target.value));
    }
    if (e.target.classList.contains('due-date')) {
      console.log('result is', tasks.modifyTask(task[0], task[1], 1, e.target.value));
    }
    if (e.target.classList.contains('project-select')) {
      console.log('PROJECT SELECT!!!');
    }
    if (e.target.classList.contains('priority-select')) {
      console.log('PRIORITY SELECT!!!');
      
    }
    if (e.target.classList.contains('notes')) {

      console.log('result is', tasks.modifyTask(task[0], task[1], 4, e.target.value));
    }
    
    // Handles all remaining inputs (i.e. those from new task/new project window)
  } else { assembleNewTask(e); }
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

// Adds a data-src attribute to all inputs which will
// be used to handle user inputs
const addDataSrc = (func) => {
  const inputs = document.querySelectorAll('input');
  const dropdowns = document.querySelectorAll('select');
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
