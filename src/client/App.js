import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  render() {
    return (
      <div>
        {<h1>{`Slayer`}</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
