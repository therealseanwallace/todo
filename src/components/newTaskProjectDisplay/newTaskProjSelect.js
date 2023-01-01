import React, { Component } from 'react';
import getProjectName from "../../helpers/getProjectName";

class NewTaskProjSelect extends Component {
  constructor(props) {
    super(props);
    console.log('NewTaskProjSelect props: ', props);
  }
  render() {
    return (
      <select className="new-task-project-select" onChange={this.props.onChange}>
        {this.props.tasklist.map((task, index) => {
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

export default NewTaskProjSelect;