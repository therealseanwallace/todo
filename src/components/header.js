import React, { Component } from 'react';
import HeaderProjectSelect from './headerProjectSelect';
import NewProject from './newProject';
import NewTask from './newTask';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>To-do</h1>
        <HeaderProjectSelect />
        <NewProject />
        <NewTask />
      </div>
    );
  }
}

export default Header;