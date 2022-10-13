/* eslint-disable import/no-cycle */
import { tasks, taskFactory } from './appLogic';
import { builder, clearDisplay } from './builder';
import { addListeners } from './getInput';

export { buildTasks, newTask, dropbox, addPriorityStyle };

const currentProjects = tasks.returnProjects; //returns an array of all projects

// Creates a dropdown element
const dropbox = (parent, selected, type, counter, source) => {
  builder('div', parent, `select-div-${type}-${counter}`);
  builder('label', `.select-div-${type}-${counter}`, `label-${type}-${counter}`);
  const getLabel = document.querySelector(`.label-${type}-${counter}`);
  getLabel.setAttribute('for', `${type}-select-${counter}`);
  builder('select', `.select-div-${type}-${counter}`, `${type}-select`, undefined, undefined, undefined, `${type}-select-${counter}`);
  const getSelector = document.querySelector(`#${type}-select-${counter}`);
  if (type === 'project') {
    const projectNames = getProjectNames();
    const string = assembleProjectString(projectNames);
    getSelector.innerHTML = string;
    getSelector.selectedIndex = selected;
  } else {
    getSelector.innerHTML = '<option value="0">Low</option><option value="1">Normal</option><option value="2">Urgent</option>';
    getSelector.selectedIndex = selected;
  }
  if (source === 'new-task') {
    getSelector.setAttribute('data-source', 'new-task');
  }
  if (source === 'new-project') {
    getSelector.setAttribute('data-source', 'new-project');
  }
};

const buildTasks = () => {
// Creates cards corresponding to each task from projectArray's children
  clearDisplay();
  const demo = (() => {
    if (tasks.returnProjects[0].length === 0) {
      const demoProject = taskFactory('Default project', 'Default project', '1983-01-26', 1, false, 0);
      tasks.addTask(demoProject, 0);
      const demoProject2 = taskFactory('Test project', 'this is a test project', '1929-01-26', 1, false, 1);
      tasks.addTask(demoProject2, 1);
      const demoTask = taskFactory('A test task', 'this is a test task', '1983-01-26', 2, false, 0);
      tasks.addTask(demoTask, demoTask.project);

    }
  })();
  const newArray = [];
  // Constructs an array of tasks i.e. all those projectArray children which are not index 0
  currentProjects.forEach((element) => {
    for (let i = 1; i < element.length; i += 1) {
      newArray.push(element[i]);
    }
  });

  builder('input', '.display', 'new-task-btn', 'button', 'New Task', undefined, 'new-task');
  // Draws a project card for each project in newArray
  let dropboxCounter = 0;
  for (let i = 0; i < newArray.length; i += 1) {
    builder('div', '.display', 'task-card', undefined, undefined, undefined, `task-card-${i}`);
    document.querySelector(`#task-card-${i}`).setAttribute('data-taskID', newArray[i].taskID);
    builder('div', `#task-card-${i}`, 'title-div', undefined, undefined, undefined, `title-div-${i}`);
    builder('input', `#title-div-${i}`, `task-${i}-title`, 'text', newArray[i].title, undefined, undefined, 'Enter task name');
    const titleDiv = document.querySelector(`#title-div-${i}`);
    addPriorityStyle(titleDiv, newArray[i].priority);
    document.querySelector(`.task-${i}-title`).classList.add('task-title');
    builder('input', `#title-div-${i}`, `task-${i}-due`, 'date', newArray[i].dueDate);
    document.querySelector(`.task-${i}-due`).classList.add('task-due');
    dropbox(`#title-div-${i}`, newArray[i].project, 'project', dropboxCounter);
    dropboxCounter += 1;
    // builder('div', `#title-div-${i}`, `task-${i}-priority`, undefined, undefined, newArray[i].priority);
    dropbox(`#title-div-${i}`, newArray[i].priority, 'priority', dropboxCounter);
    builder('input', `#task-card-${i}`, `task-${i}-notes`, 'text', newArray[i].notes, undefined, undefined, 'Enter task notes');
    document.querySelector(`.task-${i}-notes`).classList.add('task-notes');
  }
  addListeners();
};

// Adds a class to task cards according to priority
const addPriorityStyle = (task, priority) => {
  task.classList.remove('prio-low', 'prio-norm', 'prio-urgent');
  if (priority === 0) {
    task.classList.add('prio-low');
  }
  if (priority === 1) {
    task.classList.add('prio-norm');
  }
  if (priority === 2) {
    task.classList.add('prio-urgent');
  }
};

// Gets the names of each project i.e. the name of task 0 in each project
const getProjectNames = () => {
  const newArray = [];
  currentProjects.forEach(element => {
    newArray.push(element[0].title);
  });
  return (newArray);
};

// Creates a string which will be used to populate dropdown elements
const assembleProjectString = (array) => {
  let assembledString = '';
  for (let i = 0; i < array.length; i += 1) {
    const string = array[i];
    const newString = ` <option value="${i + 1}">${string}</option>`;
    assembledString += newString;
  }
  return (assembledString);
};

// Draws the new task display
const newTask = () => {
  clearDisplay();
  builder('div', '.display', 'new-task-div');
  builder('input', '.new-task-div', 'input-field', 'text', undefined, undefined, 'title', 'Task name', 'new-task');
  builder('input', '.new-task-div', 'input-field', 'date', undefined, undefined, 'due-date', undefined, 'new-task');
  dropbox('.new-task-div', 0, 'project', 0, 'new-task');
  dropbox('.new-task-div', 1, 'priority', 0, 'new-task');
  builder('input', '.new-task-div', 'input-field', 'text', undefined, undefined, 'notes', 'Notes', 'new-task');
  builder('input', '.new-task-div', 'button', 'button', 'Submit', undefined, undefined, undefined, 'new-task');
};
