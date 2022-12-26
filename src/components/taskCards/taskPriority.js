import React, { Component } from "react";

class TaskPriority extends Component { 
  constructor(props) { 
    super(props);
    this.state = {
      priority: this.props.priority,
    }
  }

  render() { 
    return (
      <div className="task-priority">
        <select defaultValue={this.state.priority}>
          <option value="0">Low</option>
          <option value="1">Medium</option>
          <option value="2 f">High</option>
        </select>
      </div>
    );
  }
}

export default TaskPriority;