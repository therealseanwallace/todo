import React, { Component } from 'react';
import Header from './header';
import CardContainer from './cardContainer';
import demo from "../demo/demoTasks";
import CurrentProject from './currentProject';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: demo, selectedProject: 0 };
  }

  newProject = () => {

  }

  getTaskByID = (id) => {
    const idNum = Number(id);
    return this.state.tasks.find((task) => {
      return task.taskID === idNum;
    });
  };

  changeProject = (e) => {
    this.setState({ selectedProject: Number(e.target.selectedOptions[0].dataset.taskid) });
  }

  render() {
    return (
      <div className="App">
        <Header tasks={this.state} changeProject={this.changeProject} selectedProject={this.state.selectedProject}/>
        <CurrentProject task={() => {
          const project = this.getTaskByID(this.state.selectedProject);
          return project;
        }} />
        <CardContainer tasks={this.state}/>
      </div>
    );
  }
}

export default App;