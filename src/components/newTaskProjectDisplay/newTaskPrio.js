import React, { Component } from "react";

class NewTaskPrio extends Component {
  render() {
    return (
      <select
        className="new-task-prio"
        onChange={this.props.onChange}
      >
        <option value="0">Low</option>
        <option value="1">Medium</option>
        <option value="2">High</option>
      </select>
    );
  }
}

export default NewTaskPrio;