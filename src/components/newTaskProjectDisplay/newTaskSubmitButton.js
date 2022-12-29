import React, { Component } from "react";

class NewTaskSubmitButton extends Component {
  render() {
    return (
      <button
        className="new-task-submit-button"
        onClick={this.props.onClick}
      >
        Submit
      </button>
    );
  }
}

export default NewTaskSubmitButton;