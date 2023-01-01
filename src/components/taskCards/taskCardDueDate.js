import React, { Component } from "react";
import makeID from "../../helpers/makeID";

class TaskCardDueDate extends Component {
  render() {
    return (
      <input
        className="task-card-due-date"
        id={makeID("due-date", this.props.task.taskID)}
        data-task-id={this.props.task.taskID}
        value={this.props.task.dueDate}
        onChange={this.props.onChange}
        type="date"
      />
    );
  }
}

export default TaskCardDueDate;
