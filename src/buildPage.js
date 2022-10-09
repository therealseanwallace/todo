import { toDoFactory, tasks } from './appLogic';
import { builder } from './builder';

const getInput = (e) => {
  console.log(e.target);
  
};

const buildUI = () => {
  // Builds the main UI
  builder('menu', '#content', 'tabs');
  builder('input', '.tabs', 'tab', 'button', 'Tasks');
  builder('input', '.tabs', 'tab', 'button', 'Projects');
  builder('main', '#content');
  builder('input', 'main', 'new-task-btn', 'button', 'New Task');
  builder('div', 'main', 'display');
  const buttons = document.querySelectorAll('.button');
  function working() {
    console.log('This event listener works');
  }
  for (let i = 0; i < buttons.length; i += 1) { // Adds event listeners to all buttons
    buttons[i].addEventListener('click', getInput);
  }
};

export {
  buildUI,
};
