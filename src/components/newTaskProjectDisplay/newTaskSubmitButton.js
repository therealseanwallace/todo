import React, { Component } from "react";

class NewTaskSubmitButton extends Component {
  render() {
    return (
        <input
          type="button"
          className="new-task-submit-button"
          onClick={this.props.onClick}
          value="Submit"
        />

    );
  }
}

export default NewTaskSubmitButton;
