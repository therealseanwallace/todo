/* eslint-disable default-case */
import React, { Component } from "react";
import NewTaskTitle from "./newTaskTitle";
import NewTaskDueDate from "./newTaskDueDate";
import NewTaskPrio from "./newTaskPrio";
import NewTaskNotes from "./newTaskNotes";
import NewTaskSubmitButton from "./newTaskSubmitButton";
import newTaskOnChange from "../../helpers/newTaskOnChange";

class NewProjectDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      priority: -1,
      isComplete: false,
      isDeleted: false,
      notes: "",
      isDemo: false,
      isProject: true,
      parent: null,
      taskID: null,
    };
    this.onChange = newTaskOnChange.bind(this);
    console.log("NewProjectDisplay! this.onChange is: ", this.onChange);
  }

  submit = () => {
    console.log("submitting new project!");
    this.props.submitTaskToState(this.state);
  };

  render() {
    return (
      <div className="new-project-display">
        <h2>New Project</h2>
        <NewTaskTitle onChange={this.onChange} />
        <NewTaskDueDate onChange={this.onChange} />
        <NewTaskPrio onChange={this.onChange} />
        <NewTaskNotes onChange={this.onChange} />
        <NewTaskSubmitButton onClick={this.submit}/>
      </div>
    );
  }
}

export default NewProjectDisplay;
