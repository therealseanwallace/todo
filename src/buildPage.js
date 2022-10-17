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
    name, nodeType, parent, text, inputType, value, class1, class2, taskID, title,
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
    if (taskID) {
      newDOMNode.setAttribute('data-taskID', taskID);
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

const assignIDToCard = (newCard, index, isProject, task) => {
  const cardToAssign = newCard;
  if (isProject) {
    cardToAssign.taskID = projectArray[index].taskID;
  } else {/* 
    console.log('is not project');
    console.log('cardToAssign is', cardToAssign);
    console.log('projectArray[index] is', projectArray[index]);
    console.log('projectArray[index].tasks[task].taskID is', projectArray[index].tasks[task].taskID);
    console.log('cardToAssign is', cardToAssign); */
    cardToAssign.taskID = projectArray[index].tasks[task].taskID;
    
  }
  return (cardToAssign);
};

const buildTasks = (reference) => {
  const {
    taskCard,
  } = displayObject;
  const projectTasks = projectArray[reference - 1].tasks;
  for (let i = 0; i < projectTasks.length; i += 1) {
    console.log('cardCounter pre-task creation = ', cardCounter);
    const element = projectTasks[i];
    console.log('element is', element);
    const { project } = element;
    console.log('project is', project);
    const taskCardWithID = assignIDToCard(taskCard, project, false, i);
    console.log('taskCardWithId is', taskCardWithID);
    const parentProj = element.project;
    const parent = `#inner-display-${parentProj + 1}`;
    taskCardWithID.parent = parent;
    const { taskID } = taskCardWithID;
    componentFactory(taskCardWithID, taskID);
    buildTaskCard(taskCardWithID.taskID, false);
    const ID = element.taskID;
    assignValuesToInputs(reference - 1, false, i);
    cardCounter += 1;
    console.log('cardCounter after task creation = ', cardCounter);
  }
};
/*
const assignValuesToInputs = (reference) => {
  console.log('reference is', reference);
  const selectTitle = document.querySelector(`#task-title-${reference}`);
  selectTitle.value = 'fuck';
}; */

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
  }
  assembleCard(prioritySelect);
  assembleCard(notes);
  if (isProject) {
    assembleCard(innerDisplay);
    buildTasks(reference);
  }
};



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

const buildProjectCards = () => {
  clearDisplay();
  const {
    projectCard,
  } = displayObject;
  for (let i = 0; i < projectArray.length; i += 1) {
    console.log('cardCounter pre-project creation = ', cardCounter);
    const projectCardWithID = assignIDToCard(projectCard, i, true);
    const { taskID } = projectCardWithID;
    componentFactory(projectCardWithID, taskID);
    buildTaskCard(projectCardWithID.taskID, true);
    assignValuesToInputs(i, true);
    cardCounter += 1;
    console.log('cardCounter after project creation = ', cardCounter);
  }
};

/*
const buildProjectCards = () => {
  clearDisplay();
  const {
    projectCard,
  } = displayObject;
  for (let i = 1; i < projectArray.length + 1; i += 1) {
    console.log('projectArray[i - 1]=', projectArray[i - 1]);
    const newCard = projectCard;
    newCard.taskID = projectArray[i - 1].taskID;
    const newCardWithID = componentFactory(newCard, cardCounter);
    console.log('newCard=', newCard);
    console.log('cardCounter=', cardCounter);
    buildTaskCard(cardCounter, true);
  }
}; */

  /*
  let dropboxCounter = 0;
  let taskCardCounter = 0;
  let projectCardCounter = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }*/


const buildUI = () => {
  buildDisplay();
  buildProjectCards();
};


