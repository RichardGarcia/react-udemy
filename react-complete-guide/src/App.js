import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>this is really working!</p>
        <Person personName='Zabala' />
        <Person personName='Garcia' />
      </div>
    );
  }
}

export default App;