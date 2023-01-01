import React, { Component } from "react";

class NewTaskTitleInput extends Component {
  render() {
    return (
      <input
        type="text"
        className="new-task-title"
        placeholder="Title"
        onChange={this.props.onChange}
      />
    );
  }
}

export default NewTaskTitleInput;