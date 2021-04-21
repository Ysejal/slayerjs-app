import React from'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css'
import '../css/bar.css';

export default class Bar extends React.Component {
    render() {
        return (
            <div class="bar">
                <Row></Row>
                <Row>
                    <Col span={4}>{<h2>{`PlayerName`}</h2>}</Col>
                    <Col span={4}>{<h2>{`Health`}</h2>} </Col>
                    <Col span={4}>{<h2>{`Fortune`}</h2>} </Col>
                    <Col span={4}>{<h2>{`EnemyName`}</h2>}</Col>   
                    <Col span={4}>{<h2>{`Niveau`}</h2>}</Col>
                    <Col span={4}></Col>               
                </Row>
            </div> 
        );
    }
}