import React, { Component } from "react";

class TaskCardProjectSelect extends Component { 
  render() {
    return (
      <select className="task-card-project-select">
        <option value="project1">Project 1</option>
        <option value="project2">Project 2</option>
        <option value="project3">Project 3</option>
      </select>
    );
  }
}

export default TaskCardProjectSelect;