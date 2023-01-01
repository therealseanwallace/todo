import React, { Component } from 'react';

class NewTaskButton extends Component {
  render() {
    return (
      <input type="button" className="new-task-button" value="New task" onClick={this.props.toggleNewTaskDisplay}/>
    );
  }
}

export default NewTaskButton;