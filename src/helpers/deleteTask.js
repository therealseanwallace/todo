function deleteTask(taskID) {
  console.log("deleteTask! taskID is: ", taskID);
  console.log("Number(taskID) is: ", Number(taskID));
  const taskIDNum = Number(taskID);
  const taskArray = this.state.tasks;
  if (taskIDNum !== 0) {
    console.log("taskID is not 0, deleting");
    const taskIndex = this.getTaskIndexByID(Number(taskID));
    const task = taskArray[taskIndex];
    console.log("task is: ", task);
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
  } else {
    console.log("taskID is 0, not deleting");
  }
  console.log("deleteTask complete. this.state is: ", this.state);
};

export default deleteTask;