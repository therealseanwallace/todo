import React, { Component } from 'react';
import Header from './header';
import CardContainer from './cardContainer';
import demo from '../demo/demoTasks';

class App extends Component {
  constructor() { 
    super();
    this.state = {
      tasks: demo,
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;