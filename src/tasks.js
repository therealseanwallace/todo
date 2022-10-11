import { tasks, taskFactory } from './appLogic';
import { builder, clearDisplay } from './builder';
export { buildTasks, newTask };

const currentProjects = tasks.returnProjects;

// Creates a dropdown element
const dropbox = (parent, tasksProject, type, counter, source) => {
  console.log('dropbox running! tasksProject is', tasksProject);
  builder('div', parent, `select-div-${type}-${counter}`);
  builder('label', `.select-div-${type}-${counter}`, `label-${counter}`);
  const getLabel = document.querySelector(`.label-${counter}`);
  getLabel.setAttribute('for', `project-select-${counter}`);
  getLabel.textContent = 'Select project';
  builder('select', `.select-div-${type}-${counter}`, 'project-select', undefined, undefined, undefined, `project-select-${counter}`);
  const projectNames = getProjectNames();
  const getSelector = document.querySelector(`#project-select-${counter}`);
  const string = assembleProjectString(projectNames);
  getSelector.innerHTML = string;
  getSelector.selectedIndex = tasksProject;
};

function buildTasks() {
// Creates cards corresponding to each task from projectArray's children
  clearDisplay();
  const demo = (() => {
    if (tasks.returnProjects[0].length === 0) {
      const demoProject = taskFactory('Default project', 'Default', '1983-01-26', '1983-01-26', false, 0);
      tasks.addTask(demoProject, 0);
      const demoProject2 = taskFactory('Test project', 'this is a test project', '1929-01-26', 'IMPORTANT!', false, 1);
      tasks.addTask(demoProject2, 1);
      const demoTask = taskFactory('A test task', 'this is a test task', '1983-01-26', 'IMPORTANT!', false, 0);
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
  console.log('newArray is', newArray);
  // Draws a project card for each task in newArray
  let dropboxCounter = 0;
  for (let i = 0; i < newArray.length; i += 1) {
    builder('div', '.display', 'task-card', undefined, undefined, undefined, `task-card-${i}`);
    builder('div', `#task-card-${i}`, 'title-div', undefined, undefined, undefined, `title-div-${i}`);
    builder('input', `#title-div-${i}`, `task-${i}-title`, 'text', newArray[i].title, undefined, undefined, 'Enter task name');
    builder('input', `#title-div-${i}`, `task-${i}-due`, 'date', newArray[i].dueDate);
    dropbox(`#title-div-${i}`, newArray[i].project, 'proj', dropboxCounter);
    dropboxCounter += 1;
    builder('div', `#title-div-${i}`, `task-${i}-priority`, undefined, undefined, newArray[i].priority);
    builder('input', `#task-card-${i}`, `task-${i}-notes`, 'text', newArray[i].notes, undefined, undefined, 'Enter task notes');
  }
}

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
  builder('input', '.display', 'input-field', 'text', undefined, undefined, 'title', 'Task name');
  builder('input', '.display', 'input-field', 'date', undefined, undefined, 'due-date');
  builder('div', '.display', 'priority-div');
  builder('input', '.priority-div', 'button', 'button', 'Urgent', undefined, 'urgent');
  builder('input', '.priority-div', 'button', 'button', 'Normal', undefined, 'normal');
  builder('input', '.priority-div', 'button', 'button', 'Low', undefined, 'low');
  builder('input', '.display', 'input-field', 'text', undefined, undefined, 'notes', 'Notes');
  builder('input', '.display', 'button', 'button', 'Add subtask');
  dropbox('.display', 0, 'proj', 0, 'new');
  builder('input', '.display', 'button', 'button', 'Submit');
};
