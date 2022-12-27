/* eslint-disable default-case */
import React, { Component } from "react";
import TaskCard from "./taskCards/taskCard";
import demo from "../demo/demoTasks";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.tasks = demo;
  }

  getTaskByID = (id) => {
    console.log('getting task by id! is is: ', id);
    const idNum = Number(id);
    console.log('getting task by id! idNum is: ', idNum);
    return this.tasks.find((task) => {
      return task.taskID === idNum;
    });
  };

  onChange = (e) => {
    console.log("***********handling change! e is: ", e);
    console.log("***********handling change! e.target.dataset is: ", e.target.dataset);
    console.log("***********handling change! e.target.dataset.taskId is: ", e.target.dataset.taskId);
    
    const task = this.getTaskByID(e.target.dataset.taskId);

    switch (e.target.classList[0]) {
      case "task-title":
        task.title = e.target.value;
        console.log('task.title is: ', task.title);
        break;
      case "task-card-due-date":
        task.dueDate = e.target.value;
        console.log('task.dueDate is: ', task.dueDate);
        break;
      case "task-notes":
        task.notes = e.target.value;
        console.log('task.notes is: ', task.notes);
        break;
      case "task-priority":
        const prioNum = Number(e.target.value);
        console.log('prioNum is: ', prioNum);
        task.priority = prioNum;
        console.log('task.priority is: ', task.priority);
        break;
    }

    console.log('task is: ', task);
    //console.log('e.target is: ', e.target);
  };

  render() {
    return (
      <div className="card-container">
        {this.tasks.map((task) => {
          const key = task.taskID;
          return (
            <div key={key}>
              <TaskCard task={task} onChange={this.onChange} />
            </div>
          );
        })}
      </div>
    );
  }
}

function createCards(tasks) {}

export default CardContainer;
