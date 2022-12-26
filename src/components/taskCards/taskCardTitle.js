import React, { Component } from "react";

class TaskCardTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
    };
    

  }

  render() {
    return (
      <input
        type="text"
        defaultValue={this.state.title}
        onChange={this.props.onChange}
      />
    );
  }
}

export default TaskCardTitle;
