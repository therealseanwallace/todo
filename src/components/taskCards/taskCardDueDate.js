import React, { Component } from "react";
import { makeClassName, makeID } from "../../helpers/makeClassName";

class TaskCardDueDate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          className="task-card-due-date"
          id={makeID("due-date", this.props.task.taskID)}
          data-task-id={this.props.task.taskID}
          defaultValue={this.props.task.dueDate}
          onChange={this.props.onChange}
          type="date"
        />
      </div>
    );
  }
}

export default TaskCardDueDate;
