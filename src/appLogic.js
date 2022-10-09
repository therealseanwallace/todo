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

const toDoFactory = (title, description, dueDate, priority, altered) => {
  const subTasks = [];
  return {
    title, description, dueDate, priority, altered,
  };
};

export {
  toDoFactory,
  tasks,
};
