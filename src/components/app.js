import React, { Component } from 'react';
import Header from './header';
import CardContainer from './cardContainer';
import demo from '../demo/demoTasks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer tasks={demo}/>
      </div>
    );
  }
}

export default App;