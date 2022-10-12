/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
const tasks = (() => {
  const projectArray = [[]];
  const addProject = () => {
    projectArray.push([]);
  };
  const addTask = (newTask, project) => {
    // console.log('addtask active, projectArray, project are', projectArray, ',', project);
    if (projectArray[project] === undefined) {
      addProject();
    }
    projectArray[project].push(newTask);
  };
  const returnProjects = projectArray;
  const getObjectFromArray = (id) => {
    console.log('getObjectFromArray starting. id parameter is', id);
    console.log('projectArray is', projectArray);
    for (let i = 0; i < projectArray.length; i++) {
      console.log('id is', id);
      const idCompare = Number(id);
      console.log('typeof idcompare:');
      console.log(typeof idCompare);
      const project = projectArray[i];
      for (let index = 0; index < project.length; index++) {
        const element = project[index];
        const elementCompare = Number(element.taskID);
        if (elementCompare === idCompare) {
          console.log('AWESOME!');
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
    console.log('console.log projectArray[project][index]=', projectArray[project][index])/*.otherAttribute = newValue;*/
    if (attribute === 'title') {
      projectArray[project][index].title = newValue;
    }
    if (attribute === 'date') {
      projectArray[project][index].dueDate = newValue;
    }
    if (attribute === 'notes') {
      projectArray[project][index].notes = newValue;
      console.log('note changing!');
    }
    console.log('console.log projectArray[project][index]=', projectArray[project][index]);
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
  const subTasks = [];
  const taskID = taskCounter;
  taskCounter += 1;
  return {
    title, notes, dueDate, priority, altered, subTasks, project, taskID,
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
