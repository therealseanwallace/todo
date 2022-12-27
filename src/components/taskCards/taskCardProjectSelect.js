import React, { Component } from "react";
import getProjectName from "../../helpers/getProjectName";

class TaskCardProjectSelect extends Component {
  render() {
    // takes the task list provided by propsand uses map to
    // create a list of options for the select element
    return (
      <select className="task-card-project-select">
        {this.props.tasklist.map((task, index) => 
          {if (task.isProject) {
            return (
              <option>{getProjectName(task)}</option>
            );
          }}
        )}
        
      </select>

    );
  }
}

export default TaskCardProjectSelect;
