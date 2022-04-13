import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="gray-background">
        <img src={logo} alt="logo"  />
        <h1>Let's develop management system!!!</h1>
      </div>
    );
  }
}

export default App;
