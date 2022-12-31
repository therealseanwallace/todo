import React, { Component } from "react";
import getProjectName from "../helpers/getProjectName";

class HeaderProjectSelect extends Component {
  constructor(props) {
    super(props);
    console.log("HeaderProjectSelect props: ", props);
    console.log("this.props.tasks.tasks.tasks: ", this.props.tasks.tasks.tasks);
  }

  render() {
    let output;

    //if ()
    return (
      <select
        onChange={this.props.changeProject}
        className="header-project-select"
      >
        {this.props.tasks.tasks.tasks.map((task, index) => {
          if (task.isProject && task.isDeleted === false) {
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

export default HeaderProjectSelect;
