import { buildTasks, newTask } from './tasks';

const getInput = (e) => {
  console.log(e.target);
  if (e.target.value === 'New Task') {
    newTask();
  }
};

const addListeners = () => {
  const buttons = document.querySelectorAll('.button');
  for (let i = 0; i < buttons.length; i += 1) { // Adds event listeners to all buttons
    buttons[i].addEventListener('click', getInput);
  }
};

export { addListeners };
