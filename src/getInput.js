/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { buildTasks, newTask, addPriorityStyle } from './tasks';
import { taskFactory, tasks } from "./appLogic";
import { buildProjects } from './projects';

let tempObject = taskFactory();
tempObject.altered = false;
tempObject.project = 0;

const addListeners = () => {
  console.log('Adding listeners!')
  const inputs = document.querySelectorAll('input');
  console.log('inputs is', inputs);
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].classList.contains('button')) {
      inputs[i].addEventListener('click', getMouseInput);
    } else {
      inputs[i].addEventListener('change', getKeybInput);
    }
  }
  // Checks if the project selector has been drawn. If so, adds event listener.
  const dropdowns = document.querySelectorAll('select');
  console.log('dropdowns is', dropdowns);
  for (let i = 0; i < dropdowns.length; i++) {
    console.log('adding listeners to dropdowns');
    const element = dropdowns[i];
    element.addEventListener('change', getMouseInput);
  }
  
  /* if (document.querySelector('.project-select') !== null) {
    document.querySelector('.project-select').addEventListener('change', getMouseInput);
  } */
};

const getMouseInput = (e) => {
  //console.log(e.target.value);
  if (e.target.id === 'tasks') {
    buildTasks();
  }
  if (e.target.id === 'new-task') {
    newTask();
    addListeners();
  }
  if (e.target.id === 'projects') {
    buildProjects();
  }
  const ID = e.target.parentElement.parentElement.parentElement.getAttribute('data-taskid');
  if (e.target.classList.contains('project-select')) {
    // if this click comes from the new task display, manipulate tempObject as appropriate
    if (e.target.getAttribute('data-source') === 'new-task') {
      tempObject.project = e.target.selectedIndex;
      tempObject.altered = true;
    } else {
      console.log('ID is', ID);
      const element = tasks.getObjectFromArray(ID);
      tasks.changeProject(element.project, element.taskID, e.target.selectedIndex);
      element.project = e.target.selectedIndex;
    }
  }

  if (e.target.classList.contains('priority-select')) {
    // if this click comes from the new task display, manipulate tempObject as appropriate
    if (e.target.getAttribute('data-source') === 'new-task') {
      tempObject.priority = e.target.selectedIndex;
      tempObject.altered = true;
    } else {
      const element = tasks.getObjectFromArray(ID);
      element.priority = e.target.selectedIndex;
      console.log('changing style of', e.target.parentElement.parentElement);
      switch (e.target.selectedIndex) {
        case 0:
          addPriorityStyle(e.target.parentElement.parentElement, 0);
          break;
        case 1:
          addPriorityStyle(e.target.parentElement.parentElement, 1);
          break;
        default:
          addPriorityStyle(e.target.parentElement.parentElement, 2);
          break;
      }
    }
  }

  // Adds the new task to the appropriate array as defined by the second parameter
  if (e.target.value === 'Submit') {
    console.log('tempObject.project is', tempObject.project);
    tasks.addTask(tempObject, tempObject.project);
    console.log(tempObject);
    tempObject = taskFactory();
    tempObject.altered = false;
    tempObject.project = 0;
    console.log(tempObject);
    buildTasks();
  }
};

const getKeybInput = (e) => {
  if (e.target.getAttribute('data-source') === 'new-task') {
    if (e.target.id === 'notes') {
      console.log('HOOOORAYY!!!!!!!!!!!!!!!!!!!!!!!!!');
      tempObject.notes = e.target.value;
      tempObject.altered = true;
    }
    if (e.target.id === 'title') {
      tempObject.title = e.target.value;
      tempObject.altered = true;
    }
    if (e.target.id === 'due-date') {
      tempObject.dueDate = e.target.value;
      tempObject.altered = true;
    }
  } else {
    let ID = e.target.parentElement.parentElement.getAttribute('data-taskid');
    if (ID === null) {
      ID = e.target.parentElement.getAttribute('data-taskid');
    }

    const element = tasks.getObjectFromArray(ID);
    console.log('ID is', ID, '. element is', element);
    if (e.target.classList.contains('task-title')) {
      tasks.changeTask(element.project, ID, e.target.value, 'title');
    }
    if (e.target.classList.contains('task-due')) {
      tasks.changeTask(element.project, ID, e.target.value, 'date');
    }
    if (e.target.classList.contains('task-notes')) {
      console.log("e.target.classList.contains('task-notes')");
      tasks.changeTask(element.project, ID, e.target.value, 'notes');
    }
  }
  //console.log(tempObject);
};

export { addListeners };
