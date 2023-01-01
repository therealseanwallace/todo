function completeTask(e) {
  const taskIndex = this.getTaskIndexByID(e.target.dataset.taskid);

  const taskArray = this.state.tasks;
  const task = taskArray[taskIndex];
  task.isComplete = !task.isComplete;
  if (task.isProject) {
    taskArray.forEach((item) => {
      if (item.parent === task.taskID) {
        item.isComplete = true;
      }
    });
  }

  if (task.parent !== null && task.isComplete === false) {
    taskArray.forEach((item) => {
      if (item.taskID === task.parent) {
        item.isComplete = false;
      }
    });
  }
  this.setState({ ...this.state, tasks: taskArray });
};

export default completeTask;