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

const buildTasks = () => {
  // Creates cards corresponding to each task from taskArray
  const test = (() => {
    const test = toDoFactory('test', 'this is a test', 'NOW!', 'IMPORTANT!');
    tasks.taskArray.push(test);
    console.log(tasks.taskArray);
  })();
  console.log('Building tasks!');
  for (let i = 0; i < tasks.taskArray.length; i += 1) {
    builder('div', '.task-display', `task-card-${i}`);
    builder('h3', `.task-card-${i}`, `task-${i}-title`, undefined, undefined, tasks.taskArray[i].title);
    builder('p', `.task-card-${i}`, `task-${i}-due`, undefined, undefined, tasks.taskArray[i].dueDate);
  }
};

const buildUI = (() => {
  builder('menu', '#content', 'tabs');
  builder('input', '.tabs', 'tab', 'button', 'Tasks');
  builder('input', '.tabs', 'tab', 'button', 'Projects');
  builder('main', '#content');
  builder('input', 'main', 'new-task-btn', 'button', 'New Task');
  builder('div', 'main', 'task-display');
  buildTasks();
  const buttons = document.querySelectorAll('.button');
  function working() {
    console.log('This event listener works');
  }
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', working);
  }
})();

export {
  buildUI,
  buildTasks,
};
