import React, { Component } from "react";
import makeClassName from "../../helpers/makeClassName";
import makeID from "../../helpers/makeID";

class TaskNotes extends Component {
  render() {
    return (
      <textarea
        className={makeClassName("notes", this.props.task.taskID)}
        id={makeID("notes", this.props.task.taskID)}
        data-task-id={this.props.task.taskID}
        value={this.props.task.notes}
        onChange={this.props.onChange}
      />
    );
  }
}

export default TaskNotes;
