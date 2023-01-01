import React, { Component } from "react";
import TaskCardDueDate from "./taskCards/taskCardDueDate";
import TaskCardTitle from "./taskCards/taskCardTitle";
import ProjectCompleteButton from "./projectCompleteButton";
import TaskNotes from "./taskCards/taskNotes";
import TaskPriority from "./taskCards/taskPriority";
import Close from "../resources/close.svg";

// this file should be refactored so as to avoid using its own state as much as possible
// so that it updates correctly upon selecting a different project

class CurrentProject extends Component {
  deleteTask = (e) => {
    this.props.deleteTask(e.target.attributes.taskid.value);
  };

  render() {
    let classes = "";
    if (this.props.task.isComplete) {
      classes = `task-card completed prio-${this.props.task.priority}`;
    } else {
      classes = `current-project prio-${this.props.task.priority}`;
    }

    return (
      <div className={classes}>
        <div className="current-project-title-close-container">
          <h2>Current Project</h2>
          <img
            src={Close}
            alt={"Close"}
            className={"close-button"}
            taskid={this.props.task.taskID}
            onClick={this.deleteTask}
          />
        </div>
        <TaskCardTitle
          taskid={this.props.task.taskID}
          title={this.props.task.title}
          onChange={this.props.onChange}
        />
        <TaskCardDueDate
          taskid={this.props.task.taskID}
          task={this.props.task}
          onChange={this.props.onChange}
        />
        <TaskPriority
          taskid={this.props.task.taskID}
          task={this.props.task}
          onChange={this.props.onChange}
        />
        <ProjectCompleteButton
          taskid={this.props.task.taskID}
          task={this.props.task.taskID}
          onChange={this.props.onChange}
          completeTask={this.props.completeTask}
          isComplete={this.props.task.isComplete}
        />
        <TaskNotes task={this.props.task} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default CurrentProject;
