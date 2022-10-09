import { tasks, toDoFactory } from './appLogic';
import { builder } from './buildPage';

function buildTasks() {
// Creates cards corresponding to each task from taskArray
  const test = (() => {
    const test = toDoFactory('test', 'this is a test', 'NOW!', 'IMPORTANT!');
    tasks.taskArray.push(test);
    console.log(tasks.taskArray);
  })();
  console.log('Building tasks!');
  for (let i = 0; i < tasks.taskArray.length; i += 1) {
    builder('div', '.display', `task-card-${i}`);
    builder('h3', `.task-card-${i}`, `task-${i}-title`, undefined, undefined, tasks.taskArray[i].title);
    builder('p', `.task-card-${i}`, `task-${i}-due`, undefined, undefined, tasks.taskArray[i].dueDate);
  }
}

export { buildTasks};