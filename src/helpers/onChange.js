function onChange(e) {
  const taskArray = this.state.tasks;
  let taskIndex = this.getTaskIndexByID(e.target.dataset.taskId);
  if (taskIndex === -1) {
    taskIndex = this.getTaskIndexByID(
      e.target.selectedOptions[0].dataset.taskid
    );
  }

  switch (e.target.classList[0]) {
    case "task-title":
      taskArray[taskIndex].title = e.target.value;
      break;
    case "task-card-due-date":
      taskArray[taskIndex].dueDate = e.target.value;
      break;
    case "task-notes":
      taskArray[taskIndex].notes = e.target.value;
      break;
    case "task-priority":
      const prioNum = Number(e.target.value);
      console.log("prioNum is: ", prioNum);
      taskArray[taskIndex].priority = prioNum;
      break;
    case "task-card-project-select":
      const projectNum = Number(taskIndex);
      taskArray[taskIndex].parent = Number(
        e.target.selectedOptions[0].dataset.taskid
      );
      break;
  }
  this.setState({ ...this.state, tasks: taskArray });
}

export default onChange;
