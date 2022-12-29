import React, { Component } from "react";
import getProjectName from "../../helpers/getProjectName";

class TaskCardProjectSelect extends Component {
  render() {
    // takes the task list provided by propsand uses map to
    // create a list of options for the select element
    return (
      <select className="task-card-project-select">
        {this.props.tasklist.tasks.map((task, index) => {
          if (task.isProject) {
            return (
              <option key={task.taskID} data-taskid={task.taskID}>
                {getProjectName(task)}
              </option>
            );
          }
        })}
      </select>
    );
  }
}

export default TaskCardProjectSelect;
