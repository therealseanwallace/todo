/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { buildTasks, newTask, addPriorityStyle } from './tasks';
import { taskFactory, tasks } from "./appLogic";
import { buildProjects, newProjectDisplay } from './projects';

let tempObject = taskFactory();
tempObject.altered = false;
tempObject.project = 0;

const addListeners = () => {
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'button') {
      inputs[i].addEventListener('click', getMouseInput);
    } else {
      inputs[i].addEventListener('change', getKeybInput);
    }
  }
  // Checks if the project selector has been drawn. If so, adds event listener.
  const dropdowns = document.querySelectorAll('select');
  for (let i = 0; i < dropdowns.length; i++) {
    console.log('adding listeners to dropdowns');
    const element = dropdowns[i];
    element.addEventListener('change', getMouseInput);
  }
  
  /* if (document.querySelector('.project-select') !== null) {
    document.querySelector('.project-select').addEventListener('change', getMouseInput);
  } */
};

const getMouseInput = (e) => {
  if (e.target.id === 'tasks') {
    buildTasks();
  }
  if (e.target.id === 'new-task') {
    newTask();
    addListeners();
  }
  if (e.target.id === 'new-project') {
    console.log('new-project clicked');
    newProjectDisplay();
    addListeners();
  }
  if (e.target.id === 'projects') {
    buildProjects();
  }

  if (e.target.classList.contains('project-select')) {
    // if this click comes from the new task display, manipulate tempObject as appropriate
    console.log('project select');
    if (e.target.getAttribute('data-source') === 'new-task') {
      tempObject.project = e.target.selectedIndex;
      tempObject.altered = true;
    } else {
      const ID = e.target.parentElement.parentElement.parentElement.getAttribute('data-taskid');
      console.log('ID is', ID);
      console.log('projectArray is', tasks.returnProjects);
      const element = tasks.getObjectFromArray(ID);
      tasks.changeProject(element.project, element.taskID, e.target.selectedIndex);
      element.project = e.target.selectedIndex;
      console.log('projectArray is', tasks.returnProjects);
    }
  }

  if (e.target.classList.contains('priority-select')) {
    // if this click comes from the new task display, manipulate tempObject as appropriate
    if (e.target.getAttribute('data-source') === 'new-task' || e.target.getAttribute('data-source') === 'new-project') {
      tempObject.priority = e.target.selectedIndex;
      tempObject.altered = true;
    } else {
      const ID = e.target.parentElement.parentElement.parentElement.getAttribute('data-taskid');
      const element = tasks.getObjectFromArray(ID);
      element.priority = e.target.selectedIndex;
      switch (e.target.selectedIndex) {
        case 0:
          addPriorityStyle(e.target.parentElement.parentElement, 0);
          break;
        case 1:
          addPriorityStyle(e.target.parentElement.parentElement, 1);
          break;
        default:
          addPriorityStyle(e.target.parentElement.parentElement, 2);
          break;
      }
    }
  }

  // Adds the new task to the appropriate array as defined by the second parameter
  if (e.target.value === 'Submit') {
    if (e.target.getAttribute('data-source') === 'new-task') {
      tasks.addTask(tempObject, tempObject.project);
      tempObject = taskFactory();
      tempObject.altered = false;
      tempObject.project = 0;
      buildTasks();
    }
    if (e.target.getAttribute('data-source') === 'new-project') {
      console.log(tasks.returnProjects);
      tasks.addProject(tempObject);
      tempObject = taskFactory();
      tempObject.altered = false;
      buildTasks();
      console.log(tasks.returnProjects);
    }
  }

  if (e.target.classList.contains('complete-btn')) {
    console.log(e.target.parentElement.parentElement.getAttribute('data-taskid'));
    const tasksID = e.target.parentElement.parentElement.getAttribute('data-taskid');
    const thisTask = tasks.getObjectFromArray(tasksID);
    console.log(thisTask);
    console.log(thisTask.toggleComplete());
    e.target.parentElement.parentElement.classList.toggle('completed');
    e.target.classList.toggle('completed-button');
    console.log(e.target.value);
    if (e.target.value === 'Complete task') {
      console.log('if statement triggered');
      console.log(e.target.value);
      console.log(e.target.innerText);

      e.target.value = 'Uncomplete task';
    } else if (e.target.value === 'Uncomplete task') {
      e.target.value = 'Complete task';
    } else if (e.target.value === 'Complete project') {
      e.target.value = 'Uncomplete project';
    } else {
      e.target.value = 'Complete project';
    }
  }
};

const getKeybInput = (e) => {
  if (e.target.getAttribute('data-source') === 'new-task' || e.target.getAttribute('data-source') === 'new-project') {
    if (e.target.id === 'notes') {
      tempObject.notes = e.target.value;
      tempObject.altered = true;
    }
    if (e.target.id === 'title') {
      tempObject.title = e.target.value;
      tempObject.altered = true;
    }
    if (e.target.id === 'due-date') {
      tempObject.dueDate = e.target.value;
      tempObject.altered = true;
    }
  } else {
    let ID = e.target.parentElement.parentElement.getAttribute('data-taskid');
    if (ID === null) {
      ID = e.target.parentElement.getAttribute('data-taskid');
    }

    const element = tasks.getObjectFromArray(ID);
    if (e.target.classList.contains('task-title')) {
      tasks.changeTask(element.project, ID, e.target.value, 'title');
    }
    if (e.target.classList.contains('task-due')) {
      tasks.changeTask(element.project, ID, e.target.value, 'date');
    }
    if (e.target.classList.contains('task-notes')) {
      tasks.changeTask(element.project, ID, e.target.value, 'notes');
    }
  }
};

export { addListeners };
