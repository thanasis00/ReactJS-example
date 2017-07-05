import React, { Component } from 'react';
import './App.css';
import Users from './users/usersComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users />
      </div>
    );
  }
}

export default App;
