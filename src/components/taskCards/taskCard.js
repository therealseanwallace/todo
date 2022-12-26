import React, { Component } from "react";
import TaskCardDueDate from "./taskCardDueDate";
import TaskCardProjectSelect from "./taskCardProjectSelect";
import TaskCardTitle from "./taskCardTitle";
import TaskPriority from "./taskPriority";

class TaskCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      task: this.props.task,
    }
    console.log('*** props is: ', props);
  }

  handleChange = (e) => {
    console.log('handling change! e is: ', e);
  }

  render() {
    return (
      <div className="task-card">
        <TaskCardTitle
          title={this.props.task.title}
          onChange={this.handleChange}
        />
        <TaskCardProjectSelect />
        <TaskCardDueDate />
        <TaskPriority prio={this.props.task.priority}/>
      </div>

    )
  }
}

export default TaskCard;