import { toDoFactory, tasks } from './appLogic';

const builder = (element, parent, classes, type, value, text) => {
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
  selectParent.append(makeComponent);
};

const buildUI = () => {
  // Builds the main UI
  builder('menu', '#content', 'tabs');
  builder('input', '.tabs', 'tab', 'button', 'Tasks');
  builder('input', '.tabs', 'tab', 'button', 'Projects');
  builder('main', '#content');
  builder('input', 'main', 'new-task-btn', 'button', 'New Task');
  builder('div', 'main', 'display');
  buildTasks(); // Adds tasks to the display
  const buttons = document.querySelectorAll('.button');
  function working() {
    console.log('This event listener works');
  }
  for (let i = 0; i < buttons.length; i += 1) { // Adds event listeners to all buttons
    buttons[i].addEventListener('click', working);
  }
};

const selectDisplay = document.querySelector('.display');

export {
  buildUI,
  buildTasks,
  selectDisplay,
};
