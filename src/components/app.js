/* eslint-disable default-case */
import React, { Component } from "react";
import Header from "./header";
import CardContainer from "./cardContainer";
import demo from "../demo/demoTasks";
import CurrentProject from "./currentProject";
import NewProjectDisplay from "./newTaskProjectDisplay/newProjectDisplay";
import NewTaskDisplay from "./newTaskProjectDisplay/newTaskDisplay";

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
      ...this.state, selectedProject: Number(e.target.selectedOptions[0].dataset.taskid),
    });
  };

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
    console.log('deleteTask! taskID is: ', taskID)
    console.log('Number(taskID) is: ', Number(taskID))
    const taskIDNumb = Number(taskID);
    if (taskIDNumb !== 0) {
      console.log('taskID is not 0, deleting');
      const taskIndex = this.getTaskIndexByID(Number(taskID));
      const taskArray = this.state.tasks;
      const task = taskArray[taskIndex];
      console.log("task is: ", task);
      task.isDeleted = true;
      this.setState({ ...this.state, tasks: taskArray });
    } else {
      console.log('taskID is 0, not deleting')
    }
  };

  submitTaskToState = (task) => {
    const taskToSubmit = task;
    taskToSubmit.taskID = this.state.highestTaskID + 1;
    const taskArray = this.state.tasks;
    taskArray.push(taskToSubmit);
    this.setState({
      ...this.state,
      tasks: taskArray,
      showNewTaskDisplay: false,
      showNewProjectDisplay: false,
      highestTaskID: taskToSubmit.taskID,
    });
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
    this.setState({ ...this.state, tasks: taskArray });
  };

  showNewProjectDisplay = () => {
    this.setState({ ...this.state, showNewProjectDisplay: !this.state.showNewProjectDisplay });
  };

  showNewTaskDisplay = () => {
    this.setState({ ...this.state, showNewTaskDisplay: !this.state.showNewTaskDisplay });
  };

  getSelectedProject = () => {
    const project = this.getTaskByID(this.state.selectedProject);
    return project; 
  }

  makeCurrentProjectProps = (project) => {
    const currentProjectProps = {
      title: project.title,
      dueDate: project.dueDate,
      notes: project.notes,
      priority: project.priority,
      isComplete: project.isComplete,
    };
    return currentProjectProps;
  }

  render() {
    let display = null;
    const currentProjectProps = this.makeCurrentProjectProps(this.getSelectedProject());

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
            task={this.makeCurrentProjectProps(this.getSelectedProject())}
            onChange={this.onChange}
            deleteTask={this.deleteTask}
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
          <NewProjectDisplay submitTaskToState={this.submitTaskToState} />
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
          />
        </div>
      );
    }

    return <div className="App">{display}</div>;
  }
}

export default App;
