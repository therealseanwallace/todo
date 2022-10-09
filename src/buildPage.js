import { toDoFactory, tasks } from './appLogic';
import { newTask } from './tasks';

const builder = (element, parent, classes, type, value, text, id, placeholder) => {
  // Builds and appends DOM nodes according to supplied arguments
  const selectParent = document.querySelector(parent);
  const makeComponent = document.createElement(element);
  if (classes !== undefined) {
    makeComponent.classList.add(classes);
    if (classes === 'tab' || classes === 'new-task-btn') {
      makeComponent.classList.add('button');
    }
  }
  if (type !== undefined) {
    makeComponent.type = type;
  }
  if (value !== undefined) {
    makeComponent.value = value;
  }
  if (text !== undefined) {
    makeComponent.textContent = text;
  }
  if (id !== undefined) {
    makeComponent.id = id;
  }
  if (placeholder !== undefined) {
    makeComponent.placeholder = placeholder;
  }
  selectParent.append(makeComponent);
};

const getInput = (e) => {
  console.log(e.target);
  newTask();
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
  builder,
};
