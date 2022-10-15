/* eslint-disable import/no-cycle */
import { tasks, taskFactory } from './appLogic';
import { builder, clearDisplay } from './builder';
import { addListeners } from './getInput';
import { dropbox, addPriorityStyle, buildTasks }from './tasks';

const currentProjects = tasks.returnProjects; //returns an array of all projects

const buildProjects = () => {
  clearDisplay();
  const newArray = [];
  // Constructs an array of projects i.e. all those projectArray children which ARE index 0
  currentProjects.forEach((element) => {
    for (let i = 0; i < 1; i += 1) {
      newArray.push(element[i]);
    }
  });

  builder('input', '.display', 'new-project-btn', 'button', 'New Project', undefined, 'new-project');
  
  let dropboxCounter = 0;
  let taskCardCounter = 0;
  let innerDisplayCounter = 0;
  for (let i = 0; i < newArray.length; i++) {
    builder('div', '.display', `inner-display-${innerDisplayCounter}`);
    document.querySelector(`.inner-display-${innerDisplayCounter}`).classList.add('inner-display');
    builder('div', `.inner-display-${innerDisplayCounter}`, 'task-card', undefined, undefined, undefined, `task-card-${taskCardCounter}`);
    document.querySelector(`#task-card-${taskCardCounter}`).setAttribute('data-taskID', newArray[i].taskID);////////////////////
    document.querySelector(`#task-card-${taskCardCounter}`).classList.add('project-card');
    builder('div', `#task-card-${taskCardCounter}`, 'title-div', undefined, undefined, undefined, `title-div-${taskCardCounter}`);
    builder('div', `#title-div-${taskCardCounter}`, 'title-close', undefined, undefined, undefined, `title-close-${taskCardCounter}`);
    console.log('newArray is', newArray);
    console.log('taskCardCounter is', taskCardCounter);
    console.log('taskCardCounter is', taskCardCounter);
    console.log(`newArray${i} is`, newArray[i]);
    builder('input', `#title-close-${taskCardCounter}`, `task-${taskCardCounter}-title`, 'text', newArray[i].title, undefined, undefined, 'Enter task name');/////////////
    const titleDiv = document.querySelector(`#title-div-${taskCardCounter}`);
    addPriorityStyle(titleDiv, newArray[i].priority);
    document.querySelector(`.task-${taskCardCounter}-title`).classList.add('task-title');
    builder('input', `#title-div-${taskCardCounter}`, `task-${taskCardCounter}-due`, 'date', newArray[i].dueDate);
    document.querySelector(`.task-${taskCardCounter}-due`).classList.add('task-due');
    dropbox(`#title-div-${taskCardCounter}`, newArray[i].priority, 'priority', dropboxCounter);
    dropboxCounter += 1;
    builder('input', `#title-div-${taskCardCounter}`, 'complete-btn', 'button', 'Complete project', undefined, `complete-btn-${i}`);
    //builder('input', `#task-card-${taskCardCounter}`, `task-${taskCardCounter}-notes`, 'text', newArray[i].notes, undefined, undefined, 'Enter task notes');
    //document.querySelector(`.task-${taskCardCounter}-notes`).classList.add('task-notes');
    console.log(`#task-card-${taskCardCounter}`, `tasks-${taskCardCounter}`);
    builder('div', `#task-card-${taskCardCounter}`, `tasks-${taskCardCounter}`);
    document.querySelector(`.tasks-${taskCardCounter}`).classList.add('project-tasks');
    console.log('taskCardCounter=', taskCardCounter);
    taskCardCounter += 1;
    const taskCardCounterPreIncrement = taskCardCounter - 1;
    console.log(taskCardCounter);
    for (let index = 1; index < currentProjects[i].length; index++) {
      console.log('task =', currentProjects[i][index]);
      builder('div', `.tasks-${taskCardCounterPreIncrement}`, 'task-card', undefined, undefined, undefined, `task-card-${taskCardCounter}`);
      document.querySelector(`#task-card-${taskCardCounter}`).setAttribute('data-taskID', currentProjects[i][index].taskID);
      builder('div', `#task-card-${taskCardCounter}`, 'title-div', undefined, undefined, undefined, `title-div-${taskCardCounter}`);
      //const taskTitleDiv = document.querySelector();
      console.log('HERE');
      console.log('i:index is', i, ':', index);
      console.log(currentProjects[i][index]);
      console.log(taskCardCounter);
      console.log(currentProjects[i][index].priority);
      addPriorityStyle(titleDiv, currentProjects[i][index].priority);
      builder('input', `#title-div-${taskCardCounter}`, `task-${taskCardCounter}-title`, 'text', currentProjects[i][index].title, undefined, undefined, 'Enter task name');
      document.querySelector(`.task-${taskCardCounter}-title`).classList.add('task-title');
      builder('input', `#title-div-${taskCardCounter}`, `task-${taskCardCounter}-due`, 'date', currentProjects[i][index].dueDate);
      document.querySelector(`.task-${taskCardCounter}-due`).classList.add('task-due');
      dropbox(`#title-div-${taskCardCounter}`, currentProjects[i][index].priority, 'priority', dropboxCounter);
      dropboxCounter += 1;
      builder('input', `#title-div-${taskCardCounter}`, 'complete-btn', 'button', 'Complete task', undefined, `complete-btn-${i}`);
      builder('input', `#task-card-${taskCardCounter}`, `task-${taskCardCounter}-notes`, 'text', currentProjects[i][index].notes, undefined, undefined, 'Enter task notes');
      document.querySelector(`.task-${taskCardCounter}-notes`).classList.add('task-notes');
      taskCardCounter += 1;
      //innerDisplayConstruct = innerDisplayDefault + innerDisplayCounter;
    }
    innerDisplayCounter ++;
  }
  addListeners();
};

// Draws the new project display
const newProjectDisplay = () => {
  clearDisplay();
  builder('div', '.display', 'new-project-div');
  builder('input', '.new-project-div', 'input-field', 'text', undefined, undefined, 'title', 'Project name', 'new-project');
  builder('input', '.new-project-div', 'input-field', 'date', undefined, undefined, 'due-date', undefined, 'new-project');
  dropbox('.new-project-div', 1, 'priority', 0, 'new-project');
  builder('input', '.new-project-div', 'input-field', 'text', undefined, undefined, 'notes', 'Notes', 'new-project');
  builder('input', '.new-project-div', 'button', 'button', 'Submit', undefined, undefined, undefined, 'new-project');
};

export { buildProjects, newProjectDisplay };


/*
builder('div', '.display', 'new-task-div');
  builder('input', '.new-task-div', 'input-field', 'text', undefined, undefined, 'title', 'Task name', 'new-task');
  builder('input', '.new-task-div', 'input-field', 'date', undefined, undefined, 'due-date', undefined, 'new-task');
  dropbox('.new-task-div', 0, 'project', 0, 'new-task');
  dropbox('.new-task-div', 1, 'priority', 0, 'new-task');
  builder('input', '.new-task-div', 'input-field', 'text', undefined, undefined, 'notes', 'Notes', 'new-task');
  builder('input', '.new-task-div', 'button', 'button', 'Submit');*/