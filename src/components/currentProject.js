import React, { Component } from "react";
import TaskCardDueDate from "./taskCards/taskCardDueDate";
import TaskCardTitle from "./taskCards/taskCardTitle";
import TaskNotes from "./taskCards/taskNotes";
import TaskPriority from "./taskCards/taskPriority";

class CurrentProject extends Component {
  constructor(props) {
    super(props);
    debugger;
  }

  render() {
    return (
      <div className="current-project">
        <h2>Current Project</h2>
        <TaskCardTitle task={this.props.task()} />
        <TaskCardDueDate task={this.props.task()}/>
        <TaskPriority task={this.props.task()}/>
        <TaskNotes task={this.props.task()}/>
      </div>
    );
  }
}

export default CurrentProject;



