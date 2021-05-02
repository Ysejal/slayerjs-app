import React, { Component } from 'react';
import './css/app.css';
import SweetAlert from 'react-bootstrap-sweetalert';
import bgImage from './images/bg.png';
import Bar from './components/bar.jsx';

import {Row, Col} from 'antd';
import 'antd/dist/antd.css'

const divStyle = {
  color: 'black',
  backgroundImage: 'url(' + bgImage + ')',
  backgroundSize:'cover',
};

const buttonStyle = {
  display: 'flex',  
  justifyContent:'center', 
  alignItems:'center', 
  height: '100vh',
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: null,
    };
  }

  newClick() {
  }

  continueClick() {
  }

  quitClick() {

  }

  renderBar(){
    return(
      <Bar 
      name = {this.state.userName}
      
      ></Bar>
    );
  }

  renderAlert(){//pour afficher la fenetre rentrer le nom
    if(this.state.userName === null){
    return(
      <SweetAlert
          input
          style = {{backgroundColor:'#222'}}
          title="Input your name!"
          placeHolder="your name"
          onConfirm={(response) => super.setState({userName: response})}   
        >
          <span style={{color:'white'}}>Whatever you want:</span>
      </SweetAlert>
    );}
    return
  }

  render() {
    return (
      <div style={divStyle}>

        {this.renderBar()}
        {this.renderAlert()}


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
