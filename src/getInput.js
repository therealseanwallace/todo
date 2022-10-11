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
  if (e.target.value === 'New Task') {
    newTask();
    addListeners();
  }
  if (e.target.value === 'Urgent' || e.target.value === 'Normal' || e.target.value === 'Low') {
    tempObject.priority = e.target.value;
    tempObject.altered = true;
  }
  if (e.target.value === 'Submit') {
    tasks.addTask(tempObject, 0); //When we add the task, we need to get the value of project select and assign it to the appropriate array
    tempObject = taskFactory();
    buildTasks();
  };

  /*if (e.target.target.id === 'project-select') {
    tempObject.
  }*/
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

