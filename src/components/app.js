import React, { Component } from 'react';
import Header from './header';
import CardContainer from './cardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;