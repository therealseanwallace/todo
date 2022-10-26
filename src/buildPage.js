/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable no-lonely-if */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { displayObject, emptyTask } from './objects';
import { tasks } from './appLogic';

let newTask = tasks.returnEmptyTask(emptyTask);

const projectArray = () => {
  const currentProjectArray = tasks.returnProjectArray();
  return (currentProjectArray);
};

const componentFactory = (element, id) => {
  const { // use destructuring assignment to get properties of new object
    name, nodeType, parent, text, inputType, value, class1,
    class2, taskID, objID, placeholder, innerHTML,
  } = element;
  //console.log('componentFactory active. parent is', parent, 'id is', id);
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
    if (id !== undefined) {
      //console.log('id!!');
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
const assembleProjectString = (currentProjectArray) => {
  let assembledString = '';
  for (let i = 0; i < currentProjectArray.length; i += 1) {
    const string = currentProjectArray[i].title;
    const id = currentProjectArray[i].taskID;
    const newString = ` <option value="${id}">${string}</option>`;
    assembledString += newString;
  }
  return (assembledString);
};

// Assigns a taskID and project to each card object, corresponding to the task's taskID
const assignIDToCard = (newCard, index, isProject, task) => {
  //console.log('assigning ID to card! params are', newCard, index, isProject, task);
  const currentProjectArray = projectArray();
  //console.log('currentProjectArray is', currentProjectArray);
  const cardToAssign = newCard;

  if (isProject) {
    cardToAssign.taskID = currentProjectArray[index].taskID;
  } else {
    //console.log('currentProjectArray, index is', currentProjectArray, index);
    cardToAssign.taskID = currentProjectArray[index].taskList[task].taskID;
  }
  return (cardToAssign);
};

const assignValuesToProjectSelectors = () => {
  const projectSelectors = document.querySelectorAll('.project-select');
  for (let i = 0; i < projectSelectors.length; i += 1) {
    const element = projectSelectors[i];
    const taskIDNum = Number(element.getAttribute('data-taskID'));
    const task = tasks.getTaskByID(taskIDNum);
    //console.log('assigning values to project selectors! task =', task);
    //console.log(projectArray()[task[0]]);
    element.selectedIndex = task[0];
  }
};

const assignValuesToInputs = (taskCard, isProject, task, project) => {
  //console.log('assigning values. params are', taskCard, isProject, task, project);
  const { taskID } = taskCard;
  const currentProjectArray = projectArray();
  //console.log('taskCard.parent is', taskCard.parentTask);
  //console.log('currentProjectArray is', currentProjectArray);
  if (isProject) {
    const title = document.querySelector(`#task-title-${taskID}`);
    title.value = currentProjectArray[project].title;
    const date = document.querySelector(`#due-date-${taskID}`);
    date.value = currentProjectArray[project].dueDate;
    const notes = document.querySelector(`#notes-${taskID}`);
    notes.value = currentProjectArray[project].notes;
    const prio = document.querySelector(`#priority-select-${taskID}`);
    prio.selectedIndex = currentProjectArray[project].priority;
    const toggleComplete = document.querySelector(`#toggle-complete-${taskID}`);
    if (!currentProjectArray[project].completed) {
      toggleComplete.value = 'Mark project complete';
      toggleComplete.classList.add('incomplete-button');
    } else {
      toggleComplete.value = 'Mark project incomplete';
      toggleComplete.parentElement.parentElement.classList.add('completed-task');
    }
  } else {
    //const currentTasks = 
    const title = document.querySelector(`#task-title-${taskID}`);
    title.value = currentProjectArray[project].taskList[task].title;
    const date = document.querySelector(`#due-date-${taskID}`);
    date.value = currentProjectArray[project].taskList[task].dueDate;
    const notes = document.querySelector(`#notes-${taskID}`);
    notes.value = currentProjectArray[project].taskList[task].notes;
    const prio = document.querySelector(`#priority-select-${taskID}`);
    prio.selectedIndex = currentProjectArray[project].taskList[task].priority;
    const toggleComplete = document.querySelector(`#toggle-complete-${taskID}`);
    if (!currentProjectArray[project].taskList[task].completed) {
      toggleComplete.value = 'Mark task complete';
      toggleComplete.classList.add('incomplete-button');
    } else {
      toggleComplete.value = 'Mark task incomplete';
    }
  }
};

// Composes task and project cards and their contents
const buildTaskCard = (reference, isProject) => {
  const {
    titleDiv, taskTitle, dueDate, prioritySelect,
    projectSelect, notes, innerDisplay, taskAttributes,
    toggleCompleteButton, deleteButton, titleClose,
  } = displayObject;
  const assembleCard = (component) => {
    const newComponent = component;
    if (isProject) {
      if (component === titleClose) {
        newComponent.parent = `#title-div-${reference}`;
      }
      if (component === titleDiv || component === innerDisplay) {
        newComponent.parent = `#task-card-${reference}`;
      }
      if (component === taskAttributes || component === notes
        || component === toggleCompleteButton) {
        newComponent.parent = `#title-div-${reference}`;
      }
      if (component === dueDate || component === prioritySelect) {
        newComponent.parent = `#attributes-${reference}`;
      }
      if (component === taskTitle || component === deleteButton) {
        newComponent.parent = `#title-close-${reference}`;
      }
    } else {
      if (component === notes || component === titleDiv) {
        newComponent.parent = `#task-card-${reference}`;
      } else if (newComponent === taskTitle || newComponent === deleteButton) {
        newComponent.parent = `#title-close-${reference}`;
      } else {
        newComponent.parent = `#title-div-${reference}`;
      }
    }
    return (componentFactory(newComponent, reference));
  };
  assembleCard(titleDiv);
  assembleCard(titleClose);
  assembleCard(taskTitle);
  assembleCard(deleteButton);
  if (isProject) {
    assembleCard(taskAttributes);
  }
  assembleCard(dueDate);
  if (!isProject) {
    assembleCard(projectSelect);
    const currentProjectArray = projectArray();
    const projectString = assembleProjectString(currentProjectArray);
    const projectSelectors = document.querySelectorAll('.project-select');
    for (let i = 0; i < projectSelectors.length; i += 1) {
      const element = projectSelectors[i];
      element.innerHTML = projectString;
    }
  }
  assembleCard(prioritySelect);
  assembleCard(toggleCompleteButton);
  assembleCard(notes);
  if (isProject) {
    assembleCard(innerDisplay);
  }
};

// Builds task cards which fill the inner-displays of the project cards
const buildTasks = (reference, parentTask) => {
  const {
    taskCard,
  } = displayObject;
  const currentProjectArray = projectArray();
  const projectTasks = projectArray()[reference].taskList;
  const projectTaskID = currentProjectArray[reference].taskID;
  //console.log('projectTaskID is', projectTaskID);
  for (let i = 0; i < projectTasks.length; i += 1) {
    const element = projectTasks[i];
    if (!element.deleted) {
      //console.log('element is', element);
      //console.log('parentTask is', parentTask);
      const tasksParent = tasks.getTaskByID(parentTask)[0];
      //console.log('tasksParent is', tasksParent);
      const taskCardWithID = assignIDToCard(taskCard, tasksParent, false, i);
      //console.log('taskCardWithID is', taskCardWithID);
      const parent = `#inner-display-${projectTaskID}`;
      taskCardWithID.parent = parent;
      const { taskID } = taskCardWithID;
      componentFactory(taskCardWithID, taskID);
      buildTaskCard(taskCardWithID.taskID, false);
      assignValuesToInputs(taskCardWithID, false, i, tasksParent);
    }
  }
};

// When we're building these tasks, we need to get the parent project
// via looking up its parentTask attribute and getting that task's
// projectArray reference

// Builds cards corresponding to each project
const buildProjectCards = () => {
  clearDisplay();
  const {
    projectCard,
  } = displayObject;
  const currentProjectArray = projectArray();
  for (let i = 0; i < currentProjectArray.length; i += 1) {
    const element = currentProjectArray[i];
    const taskID = element.taskID;
    //console.log('taskID is', taskID);
    //console.log('bPC - element is', element);
    if (!element.deleted) {
      const projectCardWithID = assignIDToCard(projectCard, i, true);
      const { taskID } = projectCardWithID;
      //console.log('taskID is', taskID);
      //console.log('projectCardWithID is', projectCardWithID);
      componentFactory(projectCardWithID, taskID);
      buildTaskCard(projectCardWithID.taskID, true);
      assignValuesToInputs(projectCardWithID, true, null, i);
      buildTasks(i, taskID);
    }
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
    const currentProjectArray = projectArray();
    const projectString = assembleProjectString(currentProjectArray);
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

// Handles all user inputs received by the event listeners
const getInput = (e) => {
  // Handles inputs which come from the home screen/main display
  if (e.target.getAttribute('data-src') === 'home') {
    const taskIDNum = Number(e.target.getAttribute('data-taskID'));
    console.log('taskIDNum is', taskIDNum);
    const task = tasks.getTaskByID(taskIDNum);
    //console.log('task is', task);
    if (e.target.id === 'new-task') {
      newTaskDisplay(0);
    }
    if (e.target.id === 'new-project') {
      newTaskDisplay(1);
    }
    if (e.target.classList.contains('task-title')) {
      tasks.modifyTask(task[0], task[1], 0, e.target.value, taskIDNum);
    }
    if (e.target.classList.contains('due-date')) {
      tasks.modifyTask(task[0], task[1], 1, e.target.value, taskIDNum);
    }
    if (e.target.classList.contains('project-select')) {
      let select = document.querySelector(`#project-select-${e.target.getAttribute('data-taskID')}`);
      let value = select.options[select.selectedIndex].value;
      tasks.modifyTask(task[0], task[1], 2, value, taskIDNum);
      //console.log("e.target.getAttribute('data-taskID')=", e.target.getAttribute('data-taskID'));
      rebuildDisplay();
    }
    if (e.target.classList.contains('priority-select')) {
      tasks.modifyTask(task[0], task[1], 3, e.target.selectedIndex, taskIDNum);
    }
    if (e.target.classList.contains('notes')) {
      tasks.modifyTask(task[0], task[1], 4, e.target.value, taskIDNum);
    }
    if (e.target.classList.contains('toggle-complete')) {
      tasks.modifyTask(task[0], task[1], 5), taskIDNum;
      switch (e.target.value) {
        case 'Mark project complete':
          e.target.value = 'Mark project incomplete';
          e.target.classList.remove('incomplete-button');
          e.target.parentElement.parentElement.classList.add('completed-task');
          break;
        case 'Mark project incomplete':
          e.target.value = 'Mark project complete';
          e.target.classList.add('incomplete-button');
          e.target.parentElement.parentElement.classList.remove('completed-task');
          break;
        case 'Mark task complete':
          e.target.value = 'Mark task incomplete';
          e.target.parentElement.parentElement.classList.add('completed-task');
          break;
        default: // e.target.value === 'Mark task incomplete'
          e.target.value = 'Mark task complete';
          e.target.parentElement.parentElement.classList.remove('completed-task');
          if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains('completed-task')) {
            e.target.parentElement.parentElement.parentElement.parentElement.classList.remove('completed-task');
          }
          const toggleComplete = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[2];
          if (toggleComplete.value === 'Mark project incomplete') {
            toggleComplete.value = 'Mark project complete';
            toggleComplete.classList.add('incomplete-button');
          }
          break;
      }
    }
    if (e.target.classList.contains('delete-button')) {
      tasks.modifyTask(task[0], task[1], 6, taskIDNum);
      tasks.deleteTaskFromStorage(taskIDNum);
      rebuildDisplay();
    }
    // Handles all remaining inputs (i.e. those from new task/new project window)
  } else { assembleNewTask(e); }
};

const rebuildDisplay = () => {
  clearDisplay();
  buildProjectCards();
  addDataSrc(0);
  addEventListeners();
  assignValuesToProjectSelectors();
};

const buildUI = () => {
  buildDisplay();
  clearDisplay();
  buildProjectCards();
  addDataSrc(0);
  addEventListeners();
  assignValuesToProjectSelectors();
};

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
      let select = document.querySelector('.project-select');
      let value = select.options[select.selectedIndex].value;
      //console.log(value);
      newTask.parentTask = value;
      break;
    default:
      if (e.target.classList.contains('new-project')) {
        newTask.isProject = true;
      } else { newTask.isProject = false; }
      console.log('newTask=', newTask);
      if (newTask.isProject === false) {
        if (newTask.parentTask === -1 || newTask.parentTask === undefined) {
          newTask.parentTask = 0;
        }
      }
      console.log('pre-adding task. task is', newTask, 'parentTask is', newTask.parentTask);
      tasks.addTask(newTask);
      newTask = tasks.returnEmptyTask(emptyTask);
      rebuildDisplay();
  }
};

export { buildUI };
