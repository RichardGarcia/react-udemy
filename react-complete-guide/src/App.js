import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>this is really working!</p>
        <Person personName='Zabala' personAge='27' />
        <Person personName='Garcia' personAge='31' />
        <Person personName='Marcus' personAge='29'>
          other stuff...
        </Person>
      </div>
    );
  }
}

export default App;