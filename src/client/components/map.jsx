import React, { Component } from 'react';
import '../css/app.css';
import Card from './card.jsx'
import Dragger from 'react-dragger-r'

const myDiv = {
  display: 'flex',  
  justifyContent:'center', 
  alignItems:'flex-end', 
  height: '100vh',
  color: '#222',
  backgroundImage: 'null',
  backgroundSize:'cover',
};

export default class Map extends Component {
    constructor(props){
        super(props);
    }

    backClick() {
        this.props.history.push('/');
      }
    render() {
        return (
            <div style={myDiv}>
                <button type="button"  id="btn2" onClick={()=>this.backClick()}>
                    <h2>Back</h2>
                </button>
            </div> 
        );
    }
}
