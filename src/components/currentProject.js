import React, { Component } from "react";
import TaskCardDueDate from "./taskCards/taskCardDueDate";
import TaskCardTitle from "./taskCards/taskCardTitle";
import TaskCompleteButton from "./taskCards/taskCompleteBtn";
import TaskNotes from "./taskCards/taskNotes";
import TaskPriority from "./taskCards/taskPriority";

class CurrentProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="current-project">
        <h2>Current Project</h2>
        <TaskCardTitle
          task={this.props.task()}
          onChange={this.props.onChange}
        />
        <TaskCardDueDate
          task={this.props.task()}
          onChange={this.props.onChange}
        />
        <TaskPriority task={this.props.task()} onChange={this.props.onChange} />
        <TaskCompleteButton
          task={this.props.task().taskID}
          onChange={this.props.onChange}
          completeTask={this.props.completeTask}
        />
        <TaskNotes task={this.props.task()} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default CurrentProject;
