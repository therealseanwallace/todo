import { tasks, toDoFactory } from './appLogic';
import { builder, clearDisplay } from './builder';

function buildTasks() {
// Creates cards corresponding to each task from taskArray
  clearDisplay();
  const test = (() => {
    if (tasks.taskArray.length === 0) {
      const demoTask = toDoFactory('test', 'this is a test', 'NOW!', 'IMPORTANT!');
      tasks.taskArray.push(demoTask);
    }
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
  builder('input', '.display', 'input-field', 'text', undefined, undefined, 'title', 'Task name');
  builder('input', '.display', 'input-field', 'date', undefined, undefined, 'due-date');
  builder('div', '.display', 'priority-div');
  builder('input', '.priority-div', 'button', 'button', 'Urgent', undefined, 'urgent');
  builder('input', '.priority-div', 'button', 'button', 'Normal', undefined, 'normal');
  builder('input', '.priority-div', 'button', 'button', 'Low', undefined, 'low');
  builder('input', '.display', 'input-field', 'text', undefined, undefined, 'notes', 'Notes');
  builder('input', '.display', 'button', 'button', 'Add subtask');
  builder('input', '.display', 'button', 'button', 'Submit');
}

export { buildTasks, newTask };
