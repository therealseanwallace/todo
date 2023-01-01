import React, { Component } from "react";

class TaskCompleteButton extends Component {
  render() {
    let buttonValue = "";
    let classes = "";

    if (this.props.isComplete) { 
      buttonValue = "Uncomplete Task";
      classes = "complete-button completed";
    } else {
      buttonValue = "Complete Task";
      classes = "complete-button";
    }


    return (
      <input
        onClick={this.props.completeTask}
        type="button"
        value={buttonValue}
        className={classes}
        data-taskid={this.props.task}
      />
    );
  }
}

export default TaskCompleteButton;
