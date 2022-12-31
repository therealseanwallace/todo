import React, { Component } from "react";
import { makeClassName, makeID } from "../../helpers/makeClassName";

class TaskPriority extends Component {
  constructor(props) {
    super(props);
    console.log("TaskPriority props: ", props);
  }
  render() {
    const prioStyleString = "prio" + this.props.task.priority;
    return (
      <select
        value={this.props.task.priority}
        className={makeClassName("priority", this.props.task.priority)}
        id={makeID("priority", this.props.task.taskID)}
        data-task-id={this.props.task.taskID}
        onChange={this.props.onChange}
      >
        <option value="0">Low</option>
        <option value="1">Medium</option>
        <option value="2">High</option>
      </select>
    );
  }
}

export default TaskPriority;
