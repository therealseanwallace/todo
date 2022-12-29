import React, { Component } from 'react';
import HeaderProjectSelect from './headerProjectSelect';
import NewProjectButton from './newProjectButton';
import NewTaskButton from './newTaskButton';

class Header extends Component {
  constructor(props) {
    super(props);
    console.log("Header props: ", props);
  }
  render() {
    return (
      <div className="header">
        <h1>To-do</h1>
        <HeaderProjectSelect tasks={this.props} selectedProject={this.props.selectedProject} changeProject={this.props.changeProject} />
        <NewProjectButton />
        <NewTaskButton />
      </div>
    );
  }
}

export default Header;