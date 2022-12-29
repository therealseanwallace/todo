import React, { Component } from "react";

class NewProjectButton extends Component {
  render() {
    return (
      <input type="button" className="new-project-button" value="New project" onClick={this.props.toggleNewProjectDisplay} />
    );
  }
}

export default NewProjectButton;
