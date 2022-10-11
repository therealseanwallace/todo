const tasks = (() => {
  const projectArray = [[]];
  const addProject = () => {
    projectArray.push([]);
  };
  const addTask = (newTask, project) => {
    if (projectArray[project] === undefined) {
      addProject();
    }
    projectArray[project].push(newTask);
    console.log('project array =', projectArray);
  };
  
  const returnProjects = projectArray;
  return {
    addTask,
    addProject,
    returnProjects,
  };
})();

const taskFactory = (title, notes, dueDate, priority, altered, project) => {
  const subTasks = [];
  return {
    title, notes, dueDate, priority, altered, subTasks, project,
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
