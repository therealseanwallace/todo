const tasks = (() => {
  const projectArray = [[]];
  const addTask = (newTask, project) => {
    projectArray[project].push(newTask);
  };

  const returnProjects = projectArray;
  return {
    addTask,
    returnProjects,
  };
})();

const taskFactory = (title, notes, dueDate, priority, altered) => {
  const subTasks = [];
  return {
    title, notes, dueDate, priority, altered, subTasks,
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
