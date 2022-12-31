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
  constructor(props) {
    super(props);
    console.log("CurrentProject props: ", props);
  }

  deleteTask = (e) => {
    console.log(
      "taskCard deleteTask called! e: ",
      e.target.attributes.taskid.value
    );
    this.props.deleteTask(e.target.attributes.taskid.value);
  };

  render() {
    let classes = "";
    if (this.props.task.isComplete) {
      classes = "current-project completed";
    } else {
      classes = "current-project";
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
