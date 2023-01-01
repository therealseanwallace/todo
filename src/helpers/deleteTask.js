function deleteTask(taskID) {
  const taskIDNum = Number(taskID);
  const taskArray = this.state.tasks;
  if (taskIDNum !== 0) {
    const taskIndex = this.getTaskIndexByID(Number(taskID));
    const task = taskArray[taskIndex];

    task.isDeleted = true;
    this.setState({ ...this.state, tasks: taskArray });

    if (task.isProject) {
      taskArray.forEach((item) => {
        if (item.parent === task.taskID) {
          item.isDeleted = true;
          this.setState({ ...this.state, selectedProject: 0 });
        }
      });
    }
  }
}

export default deleteTask;
