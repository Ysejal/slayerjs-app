import React, { Component } from 'react';
import Map from './modules/map.js';
import './style/main.css';


export default class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <section>
          <div class="wrapper">
            <div id="canvasBox">
              <canvas id="mapCanvas" width="800" height="2400"></canvas>
            </div>
          </div>
        </section>
        <footer></footer>
      </div>
    );
  }
}
