/* eslint-disable import/prefer-default-export */
import { buildTasks, newTask } from './tasks';
import { toDoFactory } from "./appLogic";

let tempObject = {};

const addListeners = () => {
  console.log('Adding listeners');
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) { // Adds event listeners to all buttons
    if (inputs[i].classList.contains('button')) {
      inputs[i].addEventListener('click', getMouseInput);
    } else {
      inputs[i].addEventListener('change', getKeybInput);
    }
  }
};

const getMouseInput = (e) => {
  if (e.target.value === 'New Task') {
    newTask();
    addListeners();
  }
  console.log(e.target.value);
};

const getKeybInput = (e) => {
  console.log(e.target.value);
};

export { addListeners };