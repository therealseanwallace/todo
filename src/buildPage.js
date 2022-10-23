/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable no-lonely-if */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { displayObject, emptyTask } from './objects';
import { tasks } from './appLogic';

export { buildUI };

let newTask = tasks.returnEmptyTask(emptyTask);
//console.log('taskFactory complete. newTask is', newTask);

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
    //console.log('creating DOM node! parent=', parent);
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
    const newString = ` <option value="${i}">${string}</option>`;
    assembledString += newString;
  }
  return (assembledString);
};

// Assigns a taskID and project to each card object, corresponding to the task's taskID
const assignIDToCard = (newCard, index, isProject, task) => {
  //console.log('assigning ID to card! parameters are: ', newCard, index, isProject, task);
  const cardToAssign = newCard;
  const currentProjectArray = projectArray();
  if (isProject) {
    cardToAssign.taskID = currentProjectArray[index - 1].taskID;
    cardToAssign.project = currentProjectArray[index - 1].project;
  } else {
    cardToAssign.taskID = currentProjectArray[index].taskList[task].taskID;
    cardToAssign.project = currentProjectArray[index].taskList[task].project;
  }
  return (cardToAssign);
};

const assignValuesToProjectSelectors = () => {
  const projectSelectors = document.querySelectorAll('.project-select');
  //console.log('projectSelectors is', projectSelectors);
  for (let i = 0; i < projectSelectors.length; i += 1) {
    const element = projectSelectors[i];
    //console.log('element is', element);
    const taskIDNum = Number(element.getAttribute('data-taskID'));
    const task = tasks.getTaskByID(taskIDNum);
    //console.log('task is', task);
    //console.log('projectArray()[task[0]].taskList[task[1]] is', projectArray()[task[0]].taskList[task[1]]);
    element.selectedIndex = projectArray()[task[0]].taskList[task[1]].project;
  }
};

// Sets the displayed inputs to match the corresponding value from each task
const assignValuesToInputs = (taskCard, isProject, task, index) => {
  const { taskID, project } = taskCard;
  const currentProjectArray = projectArray();
  //console.log('taskID, isProject, task, index is', taskID, isProject, task, index);
  if (isProject) {
    const title = document.querySelector(`#task-title-${taskID}`);
    title.value = currentProjectArray[project - 1].title;
    const date = document.querySelector(`#due-date-${taskID}`);
    date.value = currentProjectArray[project - 1].dueDate;
    const notes = document.querySelector(`#notes-${taskID}`);
    notes.value = currentProjectArray[project - 1].notes;
    const prio = document.querySelector(`#priority-select-${taskID}`);
    prio.selectedIndex = currentProjectArray[project - 1].priority;
    const toggleComplete = document.querySelector(`#toggle-complete-${taskID}`);
    //console.log('parent card is', toggleComplete.parentElement.parentElement);
    if (!currentProjectArray[project - 1].completed) {
      toggleComplete.value = 'Mark project complete';
      toggleComplete.classList.add('incomplete-button');
    } else {
      toggleComplete.value = 'Mark project incomplete';
      toggleComplete.parentElement.parentElement.classList.add('completed-task');
    }
  } else {
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
const buildTaskCard = (reference, isProject, card) => {
  const {
    titleDiv, taskTitle, dueDate, prioritySelect,
    projectSelect, notes, innerDisplay, taskCard,
    taskAttributes, toggleCompleteButton, deleteButton,
    titleClose,
  } = displayObject;
  //console.log('building task card,', reference);
  //console.log('projectArray is', projectArray());
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
    //buildTasks(reference);
  }
};

// Builds task cards which fill the inner-displays of the project cards
const buildTasks = (reference) => {
  const {
    taskCard,
  } = displayObject;
  const currentProjectArray = projectArray();
  //console.log('building tasks!!! currentProjectArray is', currentProjectArray);
  const projectTasks = projectArray()[reference].taskList;
  //console.log('project is', projectArray()[reference]);
  //console.log('projectTasks is', projectTasks);
  const projectTaskID = currentProjectArray[reference].taskID;
  //console.log('projectTaskID is', projectTaskID);
  for (let i = 0; i < projectTasks.length; i += 1) {
    const element = projectTasks[i];
    if (!element.deleted) {
      //console.log('element is', element);
      const { project } = element;
      const taskCardWithID = assignIDToCard(taskCard, project, false, i);
      //console.log('taskCardWithID is', taskCardWithID);
      const parent = `#inner-display-${projectTaskID}`;
      taskCardWithID.parent = parent;
      const { taskID } = taskCardWithID;
      componentFactory(taskCardWithID, taskID);
      //console.log('building task card (buildTasks)');
      buildTaskCard(taskCardWithID.taskID, false);
      assignValuesToInputs(taskCardWithID, false, i);
    }
  }
};

// Builds cards corresponding to each project
const buildProjectCards = () => {
  clearDisplay();
  const {
    projectCard,
  } = displayObject;
  const currentProjectArray = projectArray();
  //console.log('building project cards! projectsArray is', projectsArray);
  //console.log('building project cards! projectsArray.length is', projectsArray.length);
  for (let i = 0; i < currentProjectArray.length; i += 1) {
    const element = currentProjectArray[i];
    if (!element.deleted) {
      //console.log('building projects. element is', element);
      //console.log('project building for loop. i is', i, 'and project is', projectsArray[i]);
      const projectCardWithID = assignIDToCard(projectCard, currentProjectArray[i].project, true);
      //console.log('projectCardWithID is', projectCardWithID);
      const { taskID, project } = projectCardWithID;
      componentFactory(projectCardWithID, taskID);
      //console.log('building task card (buildProjectCards');
      buildTaskCard(projectCardWithID.taskID, true);
      assignValuesToInputs(projectCardWithID, true, null, i);
      //console.log('prepping to buildTasks. projectsArray()[i] is', projectsArray[i]);
      buildTasks(projectCardWithID.project - 1);
    }
  }
};
// we are setting it to not draw if the project is deleted. However, we also need to modify
// the above function so that we're not using i to make the project card id numbers

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

const assembleNewTask = (e) => {
  // eslint-disable-next-line default-case
  let currentProjectArray = projectArray();
  switch (true) {
    // Updates newTask according to user input
    case e.target.classList.contains('task-title'):
      newTask.title = e.target.value;
      //console.log('task title updated. newTask is', newTask);
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
      //console.log('adding new task to array! array is', currentProjectArray);
      //console.log('about to add new task. newTask is', newTask);
      tasks.addTask(newTask);
      currentProjectArray = projectArray();
      //console.log('new task added to array! array is', currentProjectArray);
      //console.log('Resetting newTask. newTask is', newTask);
      tasks.storeTask(newTask);
      newTask = tasks.returnEmptyTask(emptyTask);
      //console.log('Reset newTask. newTask is', newTask);
      //console.log(newTask)
      rebuildDisplay();
  }
};

// Handles all user inputs received by the event listeners
const getInput = (e) => {
  // Handles inputs which come from the home screen/main display
  if (e.target.getAttribute('data-src') === 'home') {
    const taskIDNum = Number(e.target.getAttribute('data-taskID'));
    const task = tasks.getTaskByID(taskIDNum);
    if (e.target.id === 'new-task') {
      newTaskDisplay(0);
    }
    if (e.target.id === 'new-project') {
      newTaskDisplay(1);
    }
    if (e.target.classList.contains('task-title')) {
      tasks.modifyTask(task[0], task[1], 0, e.target.value);
    }
    if (e.target.classList.contains('due-date')) {
      tasks.modifyTask(task[0], task[1], 1, e.target.value);
    }
    if (e.target.classList.contains('project-select')) {
      tasks.modifyTask(task[0], task[1], 2, e.target.selectedIndex);
      rebuildDisplay();
    }
    if (e.target.classList.contains('priority-select')) {
      console.log('PRIORITY SELECT!!!');
      tasks.modifyTask(task[0], task[1], 3, e.target.selectedIndex);
    }
    if (e.target.classList.contains('notes')) {
      //console.log('modifying notes of project:task', task[0], ':', task[1]);
      tasks.modifyTask(task[0], task[1], 4, e.target.value);
    }
    if (e.target.classList.contains('toggle-complete')) {
      //console.log('modifying notes of project:task', task[0], ':', task[1]);
      tasks.modifyTask(task[0], task[1], 5);
      console.log('e.target.value is', e.target.value);
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
          //console.log('e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1]=', e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1]);
          if (toggleComplete.value === 'Mark project incomplete') {
            toggleComplete.value = 'Mark project complete';
            toggleComplete.classList.add('incomplete-button');
          }
          //console.log(toggleComplete);
          break;
      }
    }
    if (e.target.classList.contains('delete-button')) {
      tasks.modifyTask(task[0], task[1], 6);
      tasks.deleteTaskFromStorage(taskIDNum);
      rebuildDisplay();
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
