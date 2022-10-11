/* eslint-disable no-console */
const tasks = (() => {
  const projectArray = [[]];
  const addProject = () => {
    projectArray.push([]);
  };
  const addTask = (newTask, project) => {
    //console.log('addtask active, projectArray, project are', projectArray, ',', project);
    if (projectArray[project] === undefined) {
      addProject();
    }
    projectArray[project].push(newTask);
    console.log('project array =', projectArray);
  };
  const returnProjects = projectArray;
  const getObjectFromArray = (id) => {
    console.log('modiftProjectArray starting. id parameter is', id);
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
  
  const changeProject = (project, elementID, newProject) => {
    console.log('project is', project);
    console.log('tasks.projectArray[project] is', projectArray[project]);
    //const taskToChange = projectArray[project][elementIndex];
    //console.log('taskToChange is', taskToChange);
    const index = projectArray[project].findIndex(item => item.taskID === elementID);
    const poppedObject = projectArray[project].pop(index);
    console.log('poppedObject is', poppedObject);
    projectArray[newProject].push(poppedObject)
    console.log('post push projectArray=', projectArray);
    console.log('projectArray[project][index] is', projectArray[project][index]);
    console.log(index);
    console.log('index is', index);
    
  };

  //return a function that modifies projectArray

  

  return {
    addTask,
    addProject,
    returnProjects,
    getObjectFromArray,
    changeProject,
    changePriority,
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
