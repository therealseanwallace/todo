import React, { Component } from "react";
import makeClassName from "../../helpers/makeClassName";
import makeID from "../../helpers/makeID";

class TaskCardTitle extends Component {
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
