/* eslint-disable default-case */
import React, { Component } from "react";
import Header from "./header";
import CardContainer from "./cardContainer";
import demo from "../demo/demoTasks";
import CurrentProject from "./currentProject";
import NewProjectDisplay from "./newTaskProjectDisplay/newProjectDisplay";
import NewTaskDisplay from "./newTaskProjectDisplay/newTaskDisplay";
import submitTaskToState from "../helpers/submitTaskToState";
import onChange from "../helpers/onChange";
import getTaskByID from "../helpers/getTaskByID";
import getTaskIndexByID from "../helpers/getTaskIndexByID";
import setToDefaultProject from "../helpers/setToDefaultProject";
import completeTask from "../helpers/completeTask";
import deleteTask from "../helpers/deleteTask";
import showNewProjectDisplay from "../helpers/showNewProjectDisplay";
import showNewTaskDisplay from "../helpers/showNewTaskDisplay";
import getSelectedProject from "../helpers/getSelectedProject";
import changeProject from "../helpers/changeProject";
import showMainDisplay from "../helpers/showMainDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: demo,
      selectedProject: 0,
      showNewTaskDisplay: false,
      showNewProjectDisplay: false,
      highestTaskID: 4,
      currentProjectProps: {},
    };

    // add methods
    this.submitTaskToState = submitTaskToState.bind(this);
    this.onChange = onChange.bind(this);
    this.getTaskByID = getTaskByID.bind(this);
    this.getTaskIndexByID = getTaskIndexByID.bind(this);
    this.setToDefaultProject = setToDefaultProject.bind(this);
    this.completeTask = completeTask.bind(this);
    this.deleteTask = deleteTask.bind(this);
    this.showNewProjectDisplay = showNewProjectDisplay.bind(this);
    this.showNewTaskDisplay = showNewTaskDisplay.bind(this);
    this.getSelectedProject = getSelectedProject.bind(this);
    this.changeProject = changeProject.bind(this);
    this.showMainDisplay = showMainDisplay.bind(this);
  }

  render() {
    let display = null;

    if (!this.state.showNewProjectDisplay && !this.state.showNewTaskDisplay) {
      display = (
        <div className="App">
          <Header
            tasks={this.state}
            changeProject={this.changeProject}
            selectedProject={this.state.selectedProject}
            toggleNewProjectDisplay={this.showNewProjectDisplay}
            toggleNewTaskDisplay={this.showNewTaskDisplay}
            showMainDisplay={this.showMainDisplay}
          />
          <CurrentProject
            completeTask={this.completeTask}
            task={this.getSelectedProject()}
            onChange={this.onChange}
            deleteTask={this.deleteTask}
            setToDefaultProject={this.setToDefaultProject}
          />
          <CardContainer
            completeTask={this.completeTask}
            tasks={this.state}
            onChange={this.onChange}
            deleteTask={this.deleteTask}
          />
        </div>
      );
    }

    if (this.state.showNewProjectDisplay) {
      display = (
        <div className="App">
          <Header tasks={this.state} showMainDisplay={this.showMainDisplay}/>
          <NewProjectDisplay submitTaskToState={this.submitTaskToState} />
        </div>
      );
    }

    if (this.state.showNewTaskDisplay) {
      display = (
        <div className="App">
          <Header tasks={this.state} showMainDisplay={this.showMainDisplay}/>
          <NewTaskDisplay
            submitTaskToState={this.submitTaskToState}
            tasks={this.state.tasks}
            selectedProject={this.state.selectedProject}
          />
        </div>
      );
    }

    return display;
  }
}

export default App;
