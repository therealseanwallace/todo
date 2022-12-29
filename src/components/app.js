/* eslint-disable default-case */
import React, { Component } from "react";
import Header from "./header";
import CardContainer from "./cardContainer";
import demo from "../demo/demoTasks";
import CurrentProject from "./currentProject";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: demo, selectedProject: 0, showNewTaskDisplay: false, showNewProjectDisplay: false };
  }

  newTask = () => {};

  getTaskByID = (id) => {
    const idNum = Number(id);
    return this.state.tasks.find((task) => {
      return task.taskID === idNum;
    });
  };

  getTaskIndexByID = (id) => {
    const idNum = Number(id);
    return this.state.tasks.findIndex((task) => {
      return task.taskID === idNum;
    });
  };

  changeProject = (e) => {
    this.setState({
      selectedProject: Number(e.target.selectedOptions[0].dataset.taskid),
    });
  };

  completeTask = (e) => {
    const taskIndex = this.getTaskIndexByID(e.target.dataset.taskid);
    const taskArray = this.state.tasks;
    taskArray[taskIndex].isComplete = !taskArray[taskIndex].isComplete;
    this.setState({ tasks: taskArray });
  };

  onChange = (e) => {
    console.log("***********handling change! e is: ", e);
    console.log(
      "***********handling change! e.target.dataset is: ",
      e.target.dataset
    );
    console.log(
      "***********handling change! e.target.dataset.taskId is: ",
      e.target.dataset.taskId
    );

    const task = this.getTaskByID(e.target.dataset.taskId);

    switch (e.target.classList[0]) {
      case "task-title":
        task.title = e.target.value;
        console.log("task.title is: ", task.title);
        break;
      case "task-card-due-date":
        task.dueDate = e.target.value;
        console.log("task.dueDate is: ", task.dueDate);
        break;
      case "task-notes":
        task.notes = e.target.value;
        console.log("task.notes is: ", task.notes);
        break;
      case "task-priority":
        const prioNum = Number(e.target.value);
        console.log("prioNum is: ", prioNum);
        task.priority = prioNum;
        console.log("task.priority is: ", task.priority);
        break;
    }

    console.log("task is: ", task);
    //console.log('e.target is: ', e.target);
  };

  render() {
    const showNewProjectDisplay = this.state.showNewProjectDisplay;
    const showNewTaskDisplay = this.state.showNewTaskDisplay;
    let display = null;
    
    if (!showNewProjectDisplay && !showNewTaskDisplay) {
      display = <div className="App">
      <Header
        tasks={this.state}
        changeProject={this.changeProject}
        selectedProject={this.state.selectedProject}
      />
      <CurrentProject
        completeTask={this.completeTask}
        task={() => {
          const project = this.getTaskByID(this.state.selectedProject);
          return project;
        }}
        onChange={this.onChange}
      />
      <CardContainer
        completeTask={this.completeTask}
        tasks={this.state}
        onChange={this.onChange}
      />
    </div>
    }

    
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
