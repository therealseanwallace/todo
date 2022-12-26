import React, { Component } from "react";
import TaskCardDueDate from "./taskCardDueDate";
import TaskCardProjectSelect from "./taskCardProjectSelect";
import TaskCardTitle from "./taskCardTitle";

class TaskCard extends Component {
  constructor (props) { 
    super(props);
    this.state = {
      task: this.props.task,
    }
    console.log('props is: ', props);
  }

  render() {
    return (
      <div className="task-card">
        <TaskCardTitle title={this.props.task.title} />
        <TaskCardProjectSelect />
        <TaskCardDueDate />
      </div>

    )
  }
}

export default TaskCard;