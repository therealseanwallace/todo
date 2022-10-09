const tasks = (() => {
  const taskArray = [];
  const addTask = (newTask) => {
    taskArray.push(newTask);
  };
  return {
    addTask,
    taskArray,
  };
})();

const taskFactory = (title, notes, dueDate, priority, altered) => {
  const subTasks = [];
  return {
    title, notes, dueDate, priority, altered, subTasks,
  };
};

export {
  taskFactory,
  tasks,
};
