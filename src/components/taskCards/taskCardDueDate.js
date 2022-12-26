import React, { Component } from "react";

class TaskCardDueDate extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      dueDate: this.props.dueDate,
    }
  }
  render() {
    return (
      <div className="task-card-due-date">
        <input type="date" defaultValue={this.state.dueDate}/>
      </div>
    );
  }
}

export default TaskCardDueDate;