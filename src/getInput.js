/* eslint-disable import/prefer-default-export */
import { buildTasks, newTask } from './tasks';
import { taskFactory, tasks } from "./appLogic";
export { addListeners };

let tempObject = taskFactory();
tempObject.altered = false;

const addListeners = () => {
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].classList.contains('button')) {
      inputs[i].addEventListener('click', getMouseInput);
    } else {
      inputs[i].addEventListener('change', getKeybInput);
    }
  }
  // Checks if the project selector has been drawn. If so, adds event listener.
  if (document.querySelector('.project-select') !== null) {
    document.querySelector('.project-select').addEventListener('change', getMouseInput);
  }
};

const getMouseInput = (e) => {
  //console.log(e.target.value);
  if (e.target.id === 'new-task') {
    newTask();
    addListeners();
  }
  if (e.target.id === 'urgent' || e.target.id === 'normal' || e.target.id === 'low') {
    tempObject.priority = e.target.value;
    tempObject.altered = true;
  }
  
  if (e.target.id === 'project-select') {
    tempObject.project = e.target.options[e.target.selectedIndex].value;
    tempObject.altered = true;
  }

  // Adds the new task to the appropriate array as defined by the second parameter
  if (e.target.value === 'Submit') {
    tasks.addTask(tempObject, tempObject.project);
    console.log(tempObject);
    tempObject = taskFactory();
    tempObject.altered = false;
    console.log(tempObject);
    buildTasks();
  };
}

const getKeybInput = (e) => {
  if (e.target.id === 'notes') {
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
  //console.log(tempObject);
};

