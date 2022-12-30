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
        className = {makeClassName("title", this.props.taskid)}
        id = {makeID("title", this.props.taskid)}
        data-task-id={this.props.taskid}
        type="text"
        value={this.props.title}
        onChange={this.props.onChange}
      />
    );
  }
}

export default TaskCardTitle;
