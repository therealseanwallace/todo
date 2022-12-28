import React, { Component } from "react";
import { makeClassName, makeID } from "../../helpers/makeClassName";

class TaskNotes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea
        className={makeClassName("notes", this.props.task.taskID)}
        id={makeID("notes", this.props.task.taskID)}
        data-task-id={this.props.task.taskID}
        defaultValue={this.props.task.notes}
        onChange={this.props.onChange}
      ></textarea>
    );
  }
}

export default TaskNotes;
