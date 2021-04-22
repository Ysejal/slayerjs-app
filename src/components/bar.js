import React from'react';
import {Row, Col} from 'antd';

import heart from '../images/Life1.png';
import coin from '../images/coin.png';
import user from '../images/user.png';
import 'antd/dist/antd.css'
import '../css/bar.css';


export default class Bar extends React.Component {
    render() {
        return (
            <div class="bar">

                <Row>
                    <Col span={2}>{<h2>{this.props.name}</h2>}</Col>
                    <Col span={4}><img src={heart} alt="heart"/> {<h4>{100}</h4>}</Col>
                    <Col span={4}><img src={coin} alt="coin"/>{<h4>{10000}</h4>} </Col>
                    <Col span={4}>{<h2>{'EnemyName'}</h2>}</Col>   
                    <Col span={4}>{<h2>{'Niveau'}</h2>}</Col>
                    <Col span={4}></Col>               
                </Row>
            </div> 
        );
    }
}