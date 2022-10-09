/* eslint-disable import/prefer-default-export */
import { buildTasks, newTask } from './tasks';
import { toDoFactory, tasks } from "./appLogic";
export { addListeners };

let tempObject = toDoFactory();
tempObject.altered = false;
console.log('tempObject is', tempObject);

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
  console.log(e.target.value);
  if (e.target.value === 'New Task') {
    newTask();
    addListeners();
  }
  if (e.target.value === 'Urgent' || e.target.value === 'Normal' || e.target.value === 'Low') {
    tempObject.priority = e.target.value;
    tempObject.altered = true;
  }
  if (e.target.value === 'Submit') {
    tasks.taskArray.push(tempObject);
    console.log(tasks.taskArray);
    buildTasks();
    tempObject = toDoFactory();
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
  console.log(tempObject);
};

