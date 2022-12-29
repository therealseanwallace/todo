import React, { Component } from "react";
import TaskCardDueDate from "./taskCards/taskCardDueDate";
import TaskCardTitle from "./taskCards/taskCardTitle";
import TaskCompleteButton from "./taskCards/taskCompleteBtn";
import TaskNotes from "./taskCards/taskNotes";
import TaskPriority from "./taskCards/taskPriority";

class CurrentProject extends Component {
  constructor(props) {
    super(props);
    console.log('CurrentProject props: ', props);
    this.state = { task: this.props.task() }
    console.log('CurrentProject task: ', this.state.task);
  }

  render() {
    let classes = "";
    if (this.state.task.isComplete) {
      classes = "current-project completed";
    } else {
      classes = "current-project";
    }

    return (
      <div className={classes}>
        <h2>Current Project</h2>
        <TaskCardTitle
          task={this.state.task}
          onChange={this.props.onChange}
        />
        <TaskCardDueDate
          task={this.state.task}
          onChange={this.props.onChange}
        />
        <TaskPriority task={this.state.task} onChange={this.props.onChange} />
        <TaskCompleteButton
          task={this.state.task.taskID}
          onChange={this.props.onChange}
          completeTask={this.props.completeTask}
          isComplete={this.state.task.isComplete}
        />
        <TaskNotes task={this.state.task} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default CurrentProject;
