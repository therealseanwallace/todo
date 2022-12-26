import React, { Component } from "react";
import TaskCard from "./taskCards/taskCard";
import demo from '../demo/demoTasks';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.tasks = demo;

  }

  onChange = (e) => {
    console.log('handling change! e is: ', e);
  }

  render() {
    return (
      <div className="card-container">
        {this.tasks.map((task) => {
          const key = task.taskID;
          return (
            <div key={key}>
              <TaskCard
                task={task}
                onChange = {this.onChange()}

            />
            </div>
          );
        })}
      </div>
    );
  }
}

function createCards(tasks) {}

export default CardContainer;
