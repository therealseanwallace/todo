import React, { Component } from 'react';

class HeaderProjectSelect extends Component {
  render() {
    return (
      <div className="header-project-select-container">
        <select className="header-project-select">
          <option value="project1">Project 1</option>
          <option value="project2">Project 2</option>
        </select>
      </div>
    );
  }
}

export default HeaderProjectSelect;