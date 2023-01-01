import React, { Component } from 'react';
import NewTaskTitle from "./newTaskTitle";
import NewTaskDueDate from "./newTaskDueDate";
import NewTaskPrio from "./newTaskPrio";
import NewTaskNotes from "./newTaskNotes";
import NewTaskSubmitButton from "./newTaskSubmitButton";
import newTaskOnChange from "../../helpers/newTaskOnChange";
import NewTaskProjSelect from './newTaskProjSelect';

class NewTaskDisplay extends Component {
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
      isProject: false,
      parent: null,
      taskID: null,
    };
    this.onChange = newTaskOnChange.bind(this);
    console.log("NewTaskDisplay! this.onChange is: ", this.onChange, 'this.props is: ', this.props);
  }

  submit = () => {
    console.log("submitting new task!");
    console.log('this.state is: ', this.state);
    this.props.submitTaskToState(this.state, this.props.selectedProject);
  };

  render() {
    return (
      <div className="new-task-display">
        <h2>New Task</h2>
        <NewTaskTitle onChange={this.onChange} />
        <NewTaskProjSelect onChange={this.onChange} tasklist={this.props.tasks} />
        <NewTaskDueDate onChange={this.onChange} />
        <NewTaskPrio onChange={this.onChange} />
        <NewTaskNotes onChange={this.onChange} />
        <NewTaskSubmitButton onClick={this.submit}/>
      </div>
    );
  }
}

export default NewTaskDisplay;