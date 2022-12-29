import React, { Component } from "react";

class NewTaskNotes extends Component {
  render() {
    return (
      <textarea
        className="new-task-notes"
        placeholder="Notes"
        onChange={this.props.onChange}
      />
    );
  }
}

export default NewTaskNotes;