import React, { Component } from 'react';
import '../css/app.css';
import bgImage from '../images/bg.png';
import Bar from '../components/bar';

import {Row, Col} from 'antd';
import 'antd/dist/antd.css'

const divStyle = {
  width: "100%",
  height: "850px",
  color: 'black',
  backgroundImage: 'url(' + bgImage + ')',
};

const buttonStyle = {
  display: 'flex',  
  justifyContent:'center', 
  alignItems:'center', 
  height: '100vh',
};

export default class App extends Component {

  newClick() {
  }

  continueClick() {
  }

  quitClick() {

  }

  render() {
    return (
      <div style={divStyle}>
        <Bar></Bar>
        <img src={'../images/smith.png'} alt="turtle"/>
        <div style={buttonStyle}>
          <Col>
            <Row>
              <button onClick={this.newClick}>
                {'New Game'}
              </button>
            </Row>
            <br />
            <Row>
              <button onClick={this.continueClick}>
                {'Continue'}
              </button>
            </Row>
            <br />
            <Row>
              <button onClick={this.quitClick}>
                {'Quit'}
              </button>
            </Row>
          </Col> 
        </div> 
      </div>
    );
  }
}
