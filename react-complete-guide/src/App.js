import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Zabala', age: 27 },
      { name: 'Garcia', age: 33 },
      { name: 'Marcus', age: 29 }
    ]
  }

  switchNameHandler = () => {
    console.log('clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>this is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person personName={this.state.persons[0].name} personAge={this.state.persons[0].age} />
        <Person personName={this.state.persons[1].name} personAge={this.state.persons[1].age}>my hobbies: racing, eating</Person>
        <Person personName={this.state.persons[2].name} personAge={this.state.persons[2].age}>
          children...
        </Person>
      </div>
    );
  }
}

export default App;