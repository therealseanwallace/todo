import React, { Component } from "react";

class ProjectCompleteButton extends Component {
  constructor(props) {
    super(props);
    console.log("ProjectCompleteButton props: ", props);
  }

  render() {
    let buttonValue = "";
    let classes = "";

    if (this.props.isComplete) { 
      buttonValue = "Uncomplete Project";
      classes = "complete-button completed";
    } else {
      buttonValue = "Complete Project";
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

export default ProjectCompleteButton;
