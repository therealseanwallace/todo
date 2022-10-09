import { tasks, taskFactory } from './appLogic';
import { builder, clearDisplay } from './builder';
export { buildTasks, newTask };

function buildTasks() {
// Creates cards corresponding to each task from taskArray
  clearDisplay();
  const demo = (() => {
    if (tasks.returnProjects[0].length === 0) {
      const demoProject = taskFactory('test project', 'this is a test project', 'NOW!', 'IMPORTANT!');
      tasks.addTask(demoProject, 0);
      const demoTask = taskFactory('test task', 'this is a test task', 'NOW!', 'IMPORTANT!');
      tasks.addTask(demoTask, 0);
    }
  })();
   const projectArray = tasks.returnProjects;
   let newArray = [];
   console.log('projectArray is', projectArray);
   projectArray.forEach((element) => {
    console.log('element is', element);
    console.log(element[1]);
    newArray.push(element[1]);
   });
   console.log('newArray is', newArray);
   
  for (let i = 0; i < newArray.length; i += 1) {
    builder('div', '.display', 'task-card', undefined, undefined, undefined, `task-card-${i}`);
    builder('div', `#task-card-${i}`, 'title-div', undefined, undefined, undefined, `title-div-${i}`);
    builder('h3', `#title-div-${i}`, `task-${i}-title`, undefined, undefined, newArray[i].title);
    builder('p', `#title-div-${i}`, `task-${i}-due`, undefined, undefined, newArray[i].dueDate);
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


