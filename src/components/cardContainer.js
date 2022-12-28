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
                    onChange={this.props.onChange}
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
