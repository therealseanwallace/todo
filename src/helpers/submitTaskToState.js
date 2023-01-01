function submitTaskToState(task, parent) {
  const parentToAssign = parent;
  const taskToSubmit = task;
  taskToSubmit.parent = parentToAssign;
  taskToSubmit.taskID = this.state.highestTaskID + 1;
  const taskArray = this.state.tasks;
  taskArray.push(taskToSubmit);
  this.setState({
    ...this.state,
    tasks: taskArray,
    showNewTaskDisplay: false,
    showNewProjectDisplay: false,
    highestTaskID: taskToSubmit.taskID,
  });
}

export default submitTaskToState;
