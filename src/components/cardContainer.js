/* eslint-disable default-case */
import React, { Component } from "react";
import TaskCard from "./taskCards/taskCard";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    console.log("CardContainer props: ", props);
    console.log("this.props.tasks.tasks: ", this.props.tasks.tasks);
  }

  getTaskByID = (id) => {
    const idNum = Number(id);
    return this.props.tasks.find((task) => {
      return task.taskID === idNum;
    });
  };

  onChange = (e) => {
    console.log("***********handling change! e is: ", e);
    console.log(
      "***********handling change! e.target.dataset is: ",
      e.target.dataset
    );
    console.log(
      "***********handling change! e.target.dataset.taskId is: ",
      e.target.dataset.taskId
    );

    const task = this.getTaskByID(e.target.dataset.taskId);

    switch (e.target.classList[0]) {
      case "task-title":
        task.title = e.target.value;
        console.log("task.title is: ", task.title);
        break;
      case "task-card-due-date":
        task.dueDate = e.target.value;
        console.log("task.dueDate is: ", task.dueDate);
        break;
      case "task-notes":
        task.notes = e.target.value;
        console.log("task.notes is: ", task.notes);
        break;
      case "task-priority":
        const prioNum = Number(e.target.value);
        console.log("prioNum is: ", prioNum);
        task.priority = prioNum;
        console.log("task.priority is: ", task.priority);
        break;
    }

    console.log("task is: ", task);
    //console.log('e.target is: ', e.target);
  };

  render() {
    return (
      <div className="card-container">
        <h2>Tasks</h2>
        {this.props.tasks.tasks.map((task) => {
          const key = task.taskID;
          if (!task.isProject) {
            // if the task corresponds to the selected project,
            // render it as a task card
            if (task.parent === this.props.tasks.selectedProject) {
              return (
                <div key={key}>
                  <TaskCard
                    task={task}
                    onChange={this.onChange}
                    tasklist={this.props.tasks}
                  />
                </div>
              );
            }
          }
        })}
      </div>
    );
  }
}

export default CardContainer;
