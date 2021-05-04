import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Legend from './legend.jsx';
import heart from '../images/Life1.png';
import coin from '../images/coin.png';
import enemy from '../images/monster.png';
import niveau from '../images/niveau.png';
import Treasure from '../images/treasure.png';
import 'antd/dist/antd.css'
import '../css/bar.css';


function tick() {
    const element = (
      <div>
       {new Date().toLocaleTimeString()}
      </div>
    );
  }
   

export default class Bar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: 0,
        };
      }

    render() {
        
        return (
            <div class="bar">

                <Row>
                    <Col span={3}>{<h2>{this.props.name}</h2>}</Col>
                    <Col span={4}><img src={heart} alt="heart"/> {<h4>{'100/100'}</h4>}</Col>
                    <Col span={4}><img src={coin} alt="coin"/>{<h4>{10000}</h4>} </Col>
                    <Col span={3}><img src={Treasure} alt="Treasure"/>{<h4>{'Treasure'}</h4>}</Col>
                    <Col span={3}><img src={enemy} alt="enemy"/>{<h4>{'EnemyName'}</h4>}</Col>   
                    <Col span={3}><img src={niveau} alt="niveau"/>{<h4>{'Niveau: 0'}</h4>}</Col>
                    <Col span={4}>{<Legend>{'Legend'}</Legend>}</Col>               
                </Row>
            </div> 
        );
    }
}