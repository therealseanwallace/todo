/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { displayObject } from './objects';
import { tasks } from './appLogic';

export { buildUI };

const projectArray = tasks.returnProjectArray;

const componentFactory = (element, id, projectID) => {
  const { // use destructuring assignment to get properties of new object
    name, type, parent, text, inputType, value, class1, class2, taskID,
  } = element;
  const createDOMNode = () => {
    // creates a DOM node according to the supplied properties
    const parentNode = document.querySelector(parent);
    const newDOMNode = document.createElement(type);
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
    name, type, parent, text, inputType,
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
  } else {
    cardToAssign.taskID = projectArray[index].tasks[task][1].taskID;
  }
  return (cardToAssign);
};

const buildTasks = (reference) => {
  const {
    taskCard,
  } = displayObject;
  const projectTasks = projectArray[reference - 1].tasks;
  console.log('projectTasks =', projectTasks);
  for (let i = 0; i < projectTasks.length; i += 1) {
    const element = projectTasks[i];
    console.log('element[1] is', element[1]);
    const { project } = element[1];
    console.log('project is', project);
    console.log('project + 1 is', project + 1);
    const taskCardWithID = assignIDToCard(taskCard, project, false, i);
    console.log('taskCardWithID = ', taskCardWithID);
    const parentProj = element[1].project;
    const parent = `#inner-display-${parentProj + 1}`;
    console.log('parent = ', parent);
    taskCardWithID.parent = parent;
    console.log('taskCardWithID = ', taskCardWithID);
    const { taskID } = taskCardWithID;
    componentFactory(taskCardWithID, taskID);
    buildTaskCard(taskCardWithID.taskID, false);
  }
};

const buildTaskCard = (reference, isProject, card) => {
  const {
    titleDiv, taskTitle, dueDate, prioritySelect, projectSelect, notes, innerDisplay, taskCard,
  } = displayObject;
  const assembleCard = (component) => {
    const newComponent = component;
    if (newComponent === taskTitle) {
      newComponent.parent = `#title-div-${reference}`;
    } else { newComponent.parent = `#task-card-${reference}`; }
    componentFactory(newComponent, reference);
  };
  assembleCard(titleDiv);
  assembleCard(taskTitle);
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


