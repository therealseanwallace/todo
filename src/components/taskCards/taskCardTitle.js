import React, { Component } from "react";
import { makeClassName, makeID } from "../../helpers/makeClassName";

class TaskCardTitle extends Component {
  constructor(props) {
    super(props);
    console.log("TaskCardTitle props: ", props);
  }

  render() {
    return (
      <input
        className = {makeClassName("title", this.props.task.taskID)}
        id = {makeID("title", this.props.task.taskID)}
        data-task-id={this.props.task.taskID}
        type="text"
        defaultValue={this.props.task.title}
        onChange={this.props.onChange}
      />
    );
  }
}

export default TaskCardTitle;
