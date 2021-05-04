import React, { Component } from 'react';
import '../css/app.css';

import {Row, Col} from 'antd';
import 'antd/dist/antd.css'

import Card from './card.jsx'
import Dragger from 'react-dragger-r'

const divStyle = {
  display: 'flex',  
  justifyContent:'center', 
  alignItems:'flex-end', 
  height: '100vh',
};

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state={
            cardList:[ 1, 2, 3, 4, 5]
        }
    }

    renderCard(i){
        return <Card id={i}/>;
    }

    backClick() {
        this.props.history.push('/');
      }
    
    render() {
        return (
        <div>
            <div style={divStyle}>
                <Row>
                <Col><Dragger>
                        {this.renderCard(1)}
                    </Dragger></Col>
                <Col><Dragger>
                        {this.renderCard(2)}
                    </Dragger></Col>
                <Col><Dragger>
                        {this.renderCard(3)}
                    </Dragger></Col>
                <Col><Dragger>
                        {this.renderCard(4)}
                    </Dragger></Col>
                <Col><Dragger>
                        {this.renderCard(5)}
                    </Dragger></Col>
                </Row>
            </div> 
            <button type="button"  id="btn2" onClick={()=>this.backClick()}>
                <h2>Back</h2>
            </button>
            <button type="button"  id="btn1" ><h2>End Turn</h2></button>
        </div>
        );
    }
}
