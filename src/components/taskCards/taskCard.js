import React, { Component } from "react";
import TaskCardDueDate from "./taskCardDueDate";
import TaskCardProjectSelect from "./taskCardProjectSelect";
import TaskCardTitle from "./taskCardTitle";
import TaskNotes from "./taskNotes";
import TaskPriority from "./taskPriority";
import TaskCompleteButton from "./taskCompleteBtn";
import Close from "../../resources/close.svg";

class TaskCard extends Component {
  constructor(props) {
    super(props);
    console.log("TaskCard props: ", props);
  }

  deleteTask = (e) => {
    console.log(
      "taskCard deleteTask called! e: ",
      e.target.attributes.taskid.value
    );
    this.props.deleteTask(e.target.attributes.taskid.value);
  };

  render() {
    let styles = "";

    if (this.props.task.isComplete) {
      styles = "task-card completed";
    } else {
      styles = "task-card";
    }

    return (
      <div className={styles}>
        <img
          src={Close}
          alt={"Close"}
          className={"close-button"}
          taskid={this.props.task.taskID}
          onClick={this.deleteTask}
        />

        <TaskCardTitle
          taskid={this.props.task.taskID}
          title={this.props.task.title}
          onChange={this.props.onChange}
        />
        <TaskCardProjectSelect
          tasklist={this.props.tasklist}
          onChange={this.props.onChange}
          taskid={this.props.task.taskID}
        />
        <TaskCardDueDate
          task={this.props.task}
          onChange={this.props.onChange}
        />
        <TaskPriority task={this.props.task} onChange={this.props.onChange} />
        <TaskCompleteButton
          task={this.props.task.taskID}
          completeTask={this.props.completeTask}
          isComplete={this.props.task.isComplete}
        />
        <TaskNotes task={this.props.task} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default TaskCard;
