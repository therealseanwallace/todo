import React, { Component } from "react";
import TaskCard from "./taskCards/taskCard";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    console.log("props is: ", props);
    this.tasks = props.tasks;
  }

  render() {
    return (
      <div className="card-container">
        {this.tasks.map((task) => {
          const key = task.taskID;
          console.log('task is: ', task);
          console.log('taskID is ', task.taskID);
          console.log('key is: ', key);
          return (
            <div key={key}>
              <TaskCard task={task} />
            </div>
          );
        })}
      </div>
    );
  }
}

function createCards(tasks) {}

export default CardContainer;
