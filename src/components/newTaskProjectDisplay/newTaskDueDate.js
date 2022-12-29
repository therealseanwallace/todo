import React, { Component } from "react";

class newTaskDueDate extends Component {
  render() {
    return (
      <input
        type="date"
        className="new-task-due-date"
        onChange={this.props.onChange}
      />
    );
  }
}

export default newTaskDueDate;
