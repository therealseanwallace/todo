import React, { Component } from "react";
import TaskCardDueDate from "./taskCardDueDate";
import TaskCardProjectSelect from "./taskCardProjectSelect";
import TaskCardTitle from "./taskCardTitle";
import TaskNotes from "./taskNotes";
import TaskPriority from "./taskPriority";

class TaskCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      task: this.props.task,
    }
  }

  render() {
    return (
      <div className="task-card">
        <TaskCardTitle
          task={this.state.task}
          onChange={this.props.onChange}
        />
        <TaskCardProjectSelect />
        <TaskCardDueDate 
          task={this.state.task}
          onChange={this.props.onChange}
        />
        <TaskPriority prio={this.props.task.priority}/>
        <TaskNotes
          task={this.props.task}
          onChange={this.props.onChange}
        />
      </div>

    )
  }
}

export default TaskCard;