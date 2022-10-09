import { tasks, taskFactory } from './appLogic';
import { builder, clearDisplay } from './builder';
export { buildTasks, newTask };

const currentProjects = tasks.returnProjects;

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
  let newArray = [];
  console.log('currentProjects is', currentProjects);
  currentProjects.forEach((element) => {
    for (let i = 1; i < element.length; i += 1) {
      newArray.push(element[i]);
    }
  });
  console.log('newArray is', newArray);

  for (let i = 0; i < newArray.length; i += 1) {
    builder('div', '.display', 'task-card', undefined, undefined, undefined, `task-card-${i}`);
    builder('div', `#task-card-${i}`, 'title-div', undefined, undefined, undefined, `title-div-${i}`);
    builder('h3', `#title-div-${i}`, `task-${i}-title`, undefined, undefined, newArray[i].title);
    builder('p', `#title-div-${i}`, `task-${i}-due`, undefined, undefined, newArray[i].dueDate);
  }
}

const dropbox = () => {
  console.log('dropbox running!');
  builder('div', '.display', 'select-div');
  builder('label', '.select-div');
  const getLabel = document.querySelector('label');
  getLabel.setAttribute('for', 'project-select');
  getLabel.textContent = 'Select a project';
  builder('select', '.select-div', 'project-select', undefined, undefined, undefined, 'project-select');
  const getSelector = document.querySelector('.project-select');
  getSelector.innerHTML = '<option value="Temp value">Temp value</option>';
};

const newTask = () => {
  clearDisplay();
  builder('input', '.display', 'input-field', 'text', undefined, undefined, 'title', 'Task name');
  builder('input', '.display', 'input-field', 'date', undefined, undefined, 'due-date');
  builder('div', '.display', 'priority-div');
  builder('input', '.priority-div', 'button', 'button', 'Urgent', undefined, 'urgent');
  builder('input', '.priority-div', 'button', 'button', 'Normal', undefined, 'normal');
  builder('input', '.priority-div', 'button', 'button', 'Low', undefined, 'low');
  builder('input', '.display', 'input-field', 'text', undefined, undefined, 'notes', 'Notes');
  builder('input', '.display', 'button', 'button', 'Add subtask');
  dropbox();
  builder('input', '.display', 'button', 'button', 'Submit');
};
