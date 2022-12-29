/* eslint-disable default-case */
function newTaskOnChange(e) {
    console.log("***********handling change! e is: ", e);
    console.log(
      "***********handling change! e.target.dataset is: ",
      e.target.dataset
    );
    console.log(
      "***********handling change! e.target.dataset.taskId is: ",
      e.target.dataset.taskId
    );
    
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
    }
    this.setState(task);
    console.log('this.state is: ', this.state);
}

export default newTaskOnChange;