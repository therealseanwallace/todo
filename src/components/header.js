import React, { Component } from 'react';
import HeaderProjectSelect from './headerProjectSelect';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>To-do</h1>
        <HeaderProjectSelect />
      </div>
    );
  }
}

export default Header;