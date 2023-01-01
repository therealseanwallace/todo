function newTaskOnChange(e) {
    const task = this.state;
    
    switch (e.target.classList[0]) {
      case "new-task-title":
        task.title = e.target.value;
        break;
      case "new-task-due-date":
        task.dueDate = e.target.value;
        break;
      case "new-task-notes":
        task.notes = e.target.value;
        break;
      case "new-task-prio":
        const prioNum = Number(e.target.value);
        console.log("prioNum is: ", prioNum);
        task.priority = prioNum;
        break;
      case "new-task-project-select":
        const parentNum = Number(e.target.selectedOptions[0].dataset.taskid);
        task.parent = parentNum;
        break;
      default:
        console.log('Error! Class name not found in newTaskOnChange.js');
    }
    this.setState(task);
}

export default newTaskOnChange;