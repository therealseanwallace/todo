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
  }

  

  

  

  

  completeTask = (e) => {
    const taskIndex = this.getTaskIndexByID(e.target.dataset.taskid);

    const taskArray = this.state.tasks;
    const task = taskArray[taskIndex];
    task.isComplete = !task.isComplete;
    if (task.isProject) {
      taskArray.forEach((item) => {
        if (item.parent === task.taskID) {
          item.isComplete = true;
        }
      });
    }

    if (task.parent !== null && task.isComplete === false) {
      taskArray.forEach((item) => {
        if (item.taskID === task.parent) {
          item.isComplete = false;
        }
      });
    }
    this.setState({ ...this.state, tasks: taskArray });
  };

  deleteTask = (taskID) => {
    console.log("deleteTask! taskID is: ", taskID);
    console.log("Number(taskID) is: ", Number(taskID));
    const taskIDNum = Number(taskID);
    const taskArray = this.state.tasks;
    if (taskIDNum !== 0) {
      console.log("taskID is not 0, deleting");
      const taskIndex = this.getTaskIndexByID(Number(taskID));
      const task = taskArray[taskIndex];
      console.log("task is: ", task);
      task.isDeleted = true;
      this.setState({ ...this.state, tasks: taskArray });
      
      if (task.isProject) {
        taskArray.forEach((item) => {
          if (item.parent === task.taskID) {
            item.isDeleted = true;
            this.setState({ ...this.state, selectedProject: 0 });
          }
        });
      }
    } else {
      console.log("taskID is 0, not deleting");
    }
    console.log("deleteTask complete. this.state is: ", this.state);
  };

  

  showNewProjectDisplay = () => {
    this.setState({
      ...this.state,
      showNewProjectDisplay: !this.state.showNewProjectDisplay,
    });
  };

  showNewTaskDisplay = () => {
    this.setState({
      ...this.state,
      showNewTaskDisplay: !this.state.showNewTaskDisplay,
    });
  };

  getSelectedProject = () => {
    const project = this.getTaskByID(this.state.selectedProject);
    return project;
  };

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
          <Header tasks={this.state} />
          <NewProjectDisplay
            submitTaskToState={this.submitTaskToState}
          />
        </div>
      );
    }

    if (this.state.showNewTaskDisplay) {
      display = (
        <div className="App">
          <Header tasks={this.state} />
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
