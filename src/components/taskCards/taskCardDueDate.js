import React, { Component } from "react";
import { makeClassName, makeID } from "../../helpers/makeClassName";

class TaskCardDueDate extends Component {
  constructor(props) {
    super(props);
    console.log("TaskCardDueDate props: ", props);
  }
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
