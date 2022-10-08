import { toDoFactory, tasks } from './appLogic';

const builder = (element, parent, classes, type, value) => {
  const selectParent = document.querySelector(parent);
  const makeComponent = document.createElement(element);
  if (classes !== undefined) {
    makeComponent.classList.add(classes);
  }
  if (type !== undefined) {
    makeComponent.type = type;
  }
  if (value !== undefined) {
    makeComponent.value = value;
  }
  selectParent.append(makeComponent);
};

const buildTasks = () => {
  const test = (() => {
    const test = toDoFactory('test', 'this is a test', 'NOW!', 'IMPORTANT!');
    tasks.taskArray.push(test);
    console.log(tasks.taskArray);
  })();
  console.log('Building tasks!');
  for (let i = 0; i < tasks.taskArray.length; i += 1) {
    const obj = tasks.taskArray[i];
    console.log('for loop active');
    const newTaskCard = builder('div', '.task-display', `task-card-${i}`);
    const taskCardH3 = builder('h3', `.task-card-${i}`, `task-${i}-title`);
    const selectTitle = document.querySelector(`.task-${i}-title`);
    selectTitle.textContent = tasks.taskArray[i].title;
    const taskDue = builder('p', `.task-card-${i}`, `task-${i}-due`);
    const selectDue = document.querySelector(`.task-${i}-due`);
    selectDue.textContent = tasks.taskArray[i].dueDate;
  }
};

const buildUI = (() => {
  builder('menu', '#content', 'tabs');
  builder('input', '.tabs', undefined, 'button', 'button', 'Tasks');
  builder('input', '.tabs', undefined, 'button', 'button', 'Projects');
  builder('main', '#content');
  builder('input', 'main', 'new-task-btn', 'button', 'New Task');
  builder('div', 'main', 'task-display');
  buildTasks();
})();

export {
  buildUI,
  buildTasks,
};
