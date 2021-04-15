import React, { Component } from 'react';
import './app.css';
import TurtleImage from './turtle.png';

export default class App extends Component {
  render() {
    return (
      <div>
        {<h1>{`Slayer`}</h1>}
        <img src={TurtleImage} alt="turtle" width="80%" />
      </div>
    );
  }
}
