import React, { Component } from 'react';
import HeaderProjectSelect from './headerProjectSelect';
import NewProjectButton from './newProjectButton';
import NewTaskButton from './newTaskButton';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 onClick={this.props.showMainDisplay}>To-do</h1>
        <HeaderProjectSelect tasks={this.props} selectedProject={this.props.selectedProject} changeProject={this.props.changeProject} />
        <NewProjectButton 
          toggleNewProjectDisplay={this.props.toggleNewProjectDisplay}
        />
        <NewTaskButton 
          toggleNewTaskDisplay={this.props.toggleNewTaskDisplay}
        />
      </div>
    );
  }
}

export default Header;