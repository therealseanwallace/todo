/* eslint-disable default-case */
import React, { Component } from "react";
import Header from "./header";
import CardContainer from "./cardContainer";
import demo from "../demo/demoTasks";
import CurrentProject from "./currentProject";
import NewProjectDisplay from "./newTaskProjectDisplay/newProjectDisplay";

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
    
    const taskArray = this.state.tasks;
    const taskIndex = this.getTaskIndexByID(e.target.dataset.taskId);
    
    switch (e.target.classList[0]) {
      case "task-title":
        taskArray[taskIndex].title = e.target.value;
        break;
      case "task-card-due-date":
        taskArray[taskIndex].dueDate = e.target.value;
        break;
      case "task-notes":
        taskArray[taskIndex].notes = e.target.value;
        break;
      case "task-priority":
        const prioNum = Number(e.target.value);
        console.log("prioNum is: ", prioNum);
        taskArray[taskIndex].priority = prioNum;
        break;
    }
    this.setState({ tasks: taskArray });
  };

  showNewProjectDisplay = () => {
    this.setState({ showNewProjectDisplay: !this.state.showNewProjectDisplay });
  };

  render() {
    let display = null;
    
    if (!this.state.showNewProjectDisplay && !this.state.showNewTaskDisplay) {
      display = <div className="App">
      <Header
        tasks={this.state}
        changeProject={this.changeProject}
        selectedProject={this.state.selectedProject}
        toggleNewProjectDisplay={this.showNewProjectDisplay}
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

    if (this.state.showNewProjectDisplay) {
      display = <div className="App">
      <Header 
        tasks={this.state}
        changeProject={this.changeProject}
        selectedProject={this.state.selectedProject}
      />
      <NewProjectDisplay />
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
