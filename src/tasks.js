import { tasks, toDoFactory } from './appLogic';
import { builder } from './builder';

const clearDisplay = () => {
  const selectDisplay = document.querySelector('.display');
  selectDisplay.innerHTML = '';
};

function buildTasks() {
// Creates cards corresponding to each task from taskArray
  clearDisplay();
  const test = (() => {
    const test = toDoFactory('test', 'this is a test', 'NOW!', 'IMPORTANT!');
    tasks.taskArray.push(test);
    console.log(tasks.taskArray);
  })();
  console.log('Building tasks!');
  for (let i = 0; i < tasks.taskArray.length; i += 1) {
    builder('div', '.display', 'task-card', undefined, undefined, undefined, `task-card-${i}`);
    builder('div', `#task-card-${i}`, 'title-div', undefined, undefined, undefined, `title-div-${i}`);
    builder('h3', `#title-div-${i}`, `task-${i}-title`, undefined, undefined, tasks.taskArray[i].title);
    builder('p', `#title-div-${i}`, `task-${i}-due`, undefined, undefined, tasks.taskArray[i].dueDate);
  }
}

function newTask() {
  clearDisplay();
  builder('input', '.display', 'task-title', 'text', undefined, undefined, undefined, 'Task name');
  builder('input', '.display', 'task-date', 'date');
  builder('div', '.display', 'priority-div');
  builder('input', '.priority-div', 'select-priority', 'button', 'Urgent', undefined, 'urgent');
  builder('input', '.priority-div', 'select-priority', 'button', 'Normal', undefined, 'normal');
  builder('input', '.priority-div', 'select-priority', 'button', 'Low', undefined, 'low');
  builder('input', '.display', 'notes', 'text', undefined, undefined, undefined, 'Notes');
  builder('input', '.display', 'subtask-btn', 'button', 'Add subtask');
}

export { buildTasks, newTask };
