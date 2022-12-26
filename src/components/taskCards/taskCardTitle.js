import React, { Component } from "react";

class TaskCardTitle extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      title: this.props.title,
    }
    console.log('this.state.title is: ', this.state.title);
  }
  
  handleChange = (event) => { 
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <input type="text" value={this.state.title} onChange={this.handleChange} />

    );
  }
}

export default TaskCardTitle;