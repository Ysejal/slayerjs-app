import React, { Component } from 'react';
import '../css/app.css';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css'
import TitreBar from '../images/titreBanner.png'

const buttonStyle = {
  display: 'flex',  
  justifyContent:'center', 
  alignItems:'center', 
  height: '100vh',
};

export default class Menu extends Component {

  newClick() {
    this.props.history.push('/map');
  }

  continueClick() {
    this.props.history.push('/game');
  }

  loginClick() {

  }

  render() {
    return (
      <div>
        {/* <img src={TitreBar} alt="turtle" style={{marginTop: '100px',} }/> */}
        <div style={buttonStyle}>
          <Col>
            <Row>
              <button onClick={()=>this.newClick()}>
                {'New Game'}
              </button>
            </Row>
            <br />
            <Row>
              <button onClick={()=>this.continueClick()}>
                {'Continue'}
              </button>
            </Row>
            <br />
            <Row>
              <button onClick={()=>this.loginClick()}>
                {'login'}
              </button>
            </Row>
          </Col> 
        </div> 
      </div>
    );
  }
}
