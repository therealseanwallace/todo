import { tasks, taskFactory } from './appLogic';
import { builder, clearDisplay } from './builder';
import { addListeners } from './getInput';
import { dropbox, addPriorityStyle }from './tasks'

const currentProjects = tasks.returnProjects;

const buildProjects = () => {
  clearDisplay();
  const newArray = [];
  currentProjects.forEach((element) => {
    for (let i = 0; i < 1; i += 1) {
      newArray.push(element[i]);
    }
  });
  let dropboxCounter = 0;
  for (let i = 0; i < newArray.length; i += 1) {
    builder('div', '.display', 'task-card', undefined, undefined, undefined, `task-card-${i}`);
    document.querySelector(`#task-card-${i}`).setAttribute('data-taskID', newArray[i].taskID);
    builder('div', `#task-card-${i}`, 'title-div', undefined, undefined, undefined, `title-div-${i}`);
    const titleDiv = document.querySelector(`#title-div-${i}`);
    addPriorityStyle(titleDiv, newArray[i].priority);
    builder('input', `#title-div-${i}`, `task-${i}-title`, 'text', newArray[i].title, undefined, undefined, 'Enter task name');
    document.querySelector(`.task-${i}-title`).classList.add('task-title');
    builder('input', `#title-div-${i}`, `task-${i}-due`, 'date', newArray[i].dueDate);
    document.querySelector(`.task-${i}-due`).classList.add('task-due');
    dropboxCounter += 1;
    dropbox(`#title-div-${i}`, newArray[i].priority, 'priority', dropboxCounter);
    builder('input', `#task-card-${i}`, `task-${i}-notes`, 'text', newArray[i].notes, undefined, undefined, 'Enter task notes');
    document.querySelector(`.task-${i}-notes`).classList.add('task-notes');
  }
  console.log(newArray);
  addListeners();
};

// Draws the new project display
const newProject = () => {
  clearDisplay();
  builder('input', '.display', 'input-field', 'text', undefined, undefined, 'title', 'Project name', 'new-task');
  builder('input', '.display', 'input-field', 'date', undefined, undefined, 'due-date', undefined, 'new-task');
  dropbox('.display', 1, 'priority', 0, 'new-task');
  builder('input', '.display', 'input-field', 'text', undefined, undefined, 'notes', 'Notes', 'new-task');
  builder('input', '.display', 'button', 'button', 'Submit');
};

export { buildProjects, newProject };
