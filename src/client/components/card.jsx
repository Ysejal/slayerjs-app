import React, { Component } from 'react';

import 'antd/dist/antd.css'
import '../css/card.css'
import cardImage from '../images/card-ex.png';

const cardStyle = {
    width: '150px',
    height: '200px',
    color: 'white',
    backgroundImage: 'url(' + cardImage + ')',
    backgroundSize:'contain',
    display:'table-cell',
    verticalAlign:'middle',
    backgroundRepeat: 'no-repeat',
    // marginBottom: '50px',
  };

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardName: 'Defend',
            type: 'Skill',
            energy: 1,
            block: 5,
            target: 'player',
            description: 'Gain 5 Block.',
            upgrade() {
                this.block = 8
                this.upgraded = true
                this.name = 'Defend+'
                this.description = 'Gain 8 Block.'
            }
        };
      }
    
    render() {
        return (
        <div style={cardStyle}>
            <h2>{this.props.id}</h2>
            <h2>{this.state.cardName}</h2>  
            <h2>Type:{this.state.type}</h2>
            <h2>Energy: {this.state.energy}</h2>  
            <h2>{this.state.description}</h2>
                  
        </div>
        );
    }
}
