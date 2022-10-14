/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
const tasks = (() => {
  const projectArray = [[]];
  const addProject = (newProject) => {
    if (newProject !== undefined) {
      projectArray.push([newProject]);
    } else {
      projectArray.push([]);
    }
  };
  const addTask = (newTask, project) => {
    // console.log('addtask active, projectArray, project are', projectArray, ',', project);
    if (projectArray[project] === undefined) {
      console.log('projectArray=', projectArray);
      addProject();
      projectArray[projectArray.length - 1].push(newTask);
    } else { projectArray[project].push(newTask); }
    console.log('projectArray=', projectArray);
  };
  const returnProjects = projectArray;
  const getObjectFromArray = (id) => {
    for (let i = 0; i < projectArray.length; i++) {
      const idCompare = Number(id);
      const project = projectArray[i];
      for (let index = 0; index < project.length; index++) {
        const element = project[index];
        const elementCompare = Number(element.taskID);
        if (elementCompare === idCompare) {
          return (element);
        }
      }
    }
  };
  
  const getIndex = (project, elementID) => {
    const elementIDCompare = Number(elementID);
    const index = projectArray[project].findIndex((item) => item.taskID === elementIDCompare);
    return (index);
  };

  const changeProject = (project, elementID, newProject) => {
    // const taskToChange = projectArray[project][elementIndex];
    // console.log('taskToChange is', taskToChange);
    const index = projectArray[project].findIndex((item) => item.taskID === elementID);
    const poppedObject = projectArray[project].pop(index);
    projectArray[newProject].push(poppedObject);
  };

  const changeTask = (project, elementID, newValue, attribute) => {
    const index = getIndex(project, elementID);
    if (attribute === 'title') {
      projectArray[project][index].title = newValue;
    }
    if (attribute === 'date') {
      projectArray[project][index].dueDate = newValue;
    }
    if (attribute === 'notes') {
      projectArray[project][index].notes = newValue;
    }
  };

  //return a function that modifies projectArray

  

  return {
    addTask,
    addProject,
    returnProjects,
    getObjectFromArray,
    changeProject,
    changeTask,
  };
})();

let taskCounter = 0;

const taskFactory = (title, notes, dueDate, priority, altered, project) => {
  const taskID = taskCounter;
  taskCounter += 1;
  let completed = false;
  const toggleComplete = () => {
    completed = !completed;
    return(completed);
  }
  return {
    title, notes, dueDate, priority, altered, project, taskID, toggleComplete,
  };
};

/*const projectFactory = (title) => {
  const taskArray = [];
  return {
    title, taskArray,
  };
};*/

export {
  taskFactory,
  tasks,
};
