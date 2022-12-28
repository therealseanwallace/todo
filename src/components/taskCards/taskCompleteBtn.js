import React, { Component } from "react";

class TaskCompleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="button"
        value="Complete Task"
        className="complete-button"
        data-task-id={this.props.task}
      />
    );
  }
}

export default TaskCompleteButton;
