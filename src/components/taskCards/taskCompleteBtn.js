import React, { Component } from "react";

class TaskCompleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        onClick={this.props.completeTask}
        type="button"
        value="Complete Task"
        className="complete-button"
        data-taskid={this.props.task}
      />
    );
  }
}

export default TaskCompleteButton;
