import React, { Component } from "react";
import TaskCardDueDate from "./taskCardDueDate";
import TaskCardProjectSelect from "./taskCardProjectSelect";
import TaskCardTitle from "./taskCardTitle";
import TaskNotes from "./taskNotes";
import TaskPriority from "./taskPriority";
import TaskCompleteButton from "./taskCompleteBtn";

class TaskCard extends Component {
  constructor(props) {
    super(props);
    console.log('TaskCard props: ', props)
  }
  render() {
    return (
      <div className="task-card">
        <TaskCardTitle
          task={this.props.task}
          onChange={this.props.onChange}
        />
        <TaskCardProjectSelect
          tasklist={this.props.tasklist}
          onChange={this.props.onChange}
        />
        <TaskCardDueDate 
          task={this.props.task}
          onChange={this.props.onChange}
        />
        <TaskPriority
          task={this.props.task}
          onChange={this.props.onChange}
        />
        <TaskCompleteButton task={this.props.task.taskID} completeTask={this.props.completeTask}/>
        <TaskNotes
          task={this.props.task}
          onChange={this.props.onChange}
        />
      </div >

    )
  }
}

export default TaskCard;