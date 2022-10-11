import { tasks, taskFactory } from './appLogic';
import { builder, clearDisplay } from './builder';
export { buildTasks, newTask };

const currentProjects = tasks.returnProjects;

function buildTasks() {
// Creates cards corresponding to each task from taskArray
  clearDisplay();
  const demo = (() => {
    if (tasks.returnProjects[0].length === 0) {
      const demoProject = taskFactory('Test project', 'this is a test project', '1983-01-26', 'IMPORTANT!', false, 0);
      tasks.addTask(demoProject, 0);
      const demoProject2 = taskFactory('Another test project', 'this is a test project', '1983-01-26', 'IMPORTANT!', false, 1);
      tasks.addTask(demoProject2, 1);
      const demoTask = taskFactory('A test task', 'this is a test task', '1983-01-26', 'IMPORTANT!', false, 0);
      tasks.addTask(demoTask, 0);
    }
  })();
  const newArray = [];
  currentProjects.forEach((element) => {
    for (let i = 1; i < element.length; i += 1) {
      newArray.push(element[i]);
    }
  });
  console.log('newArray is', newArray);

  for (let i = 0; i < newArray.length; i += 1) {
    builder('div', '.display', 'task-card', undefined, undefined, undefined, `task-card-${i}`);
    builder('div', `#task-card-${i}`, 'title-div', undefined, undefined, undefined, `title-div-${i}`);
    builder('input', `#title-div-${i}`, `task-${i}-title`, 'text', newArray[i].title, undefined, undefined, 'Enter task name');
    builder('input', `#title-div-${i}`, `task-${i}-due`, 'date', newArray[i].dueDate);
    dropbox(`#title-div-${i}`);
    builder('div', `#title-div-${i}`, `task-${i}-priority`, undefined, undefined, newArray[i].priority);
    builder('input', `#task-card-${i}`, `task-${i}-notes`, 'text', newArray[i].notes, undefined, undefined, 'Enter task notes');
  }
}

const getProjectNames = () => {
  const newArray = [];
  currentProjects.forEach(element => {
    newArray.push(element[0].title);
  });
  return (newArray);
};

const assembleProjectString = (array) => {
  let assembledString = '<option value="0">Default</option>';
  for (let i = 0; i < array.length; i += 1) {
    const string = array[i];
    const newString = ` <option value="${i + 1}">${string}</option>`;
    assembledString += newString;
  }
  return (assembledString);
};

const dropbox = (parent) => {
  console.log('dropbox running!');
  builder('div', parent, 'select-div');
  builder('label', '.select-div');
  const getLabel = document.querySelector('label');
  getLabel.setAttribute('for', 'project-select');
  getLabel.textContent = 'Select project';
  builder('select', '.select-div', 'project-select', undefined, undefined, undefined, 'project-select');
  const projectNames = getProjectNames();
  const getSelector = document.querySelector('.project-select');
  const string = assembleProjectString(projectNames);
  getSelector.innerHTML = string;
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
  dropbox('.display');
  builder('input', '.display', 'button', 'button', 'Submit');
};
