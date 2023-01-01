/* eslint-disable default-case */
import React, { Component } from "react";
import TaskCard from "./taskCards/taskCard";

class CardContainer extends Component {
  getTaskByID = (id) => {
    const idNum = Number(id);
    return this.props.tasks.find((task) => {
      return task.taskID === idNum;
    });
  };

  render() {
    return (
      <div className="card-container">
        <h1>Tasks</h1>
        <div className={"card-container-inner"}>
          {this.props.tasks.tasks.map((task) => {
            const key = task.taskID;
            if (!task.isProject) {
              // if the task corresponds to the selected project,
              // render it as a task card
              if (
                task.parent === this.props.tasks.selectedProject &&
                !task.isDeleted
              ) {
                return (
                  <div key={key}>
                    <TaskCard
                      completeTask={this.props.completeTask}
                      task={task}
                      onChange={this.props.onChange}
                      tasklist={this.props.tasks}
                      deleteTask={this.props.deleteTask}
                    />
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    );
  }
}

export default CardContainer;
