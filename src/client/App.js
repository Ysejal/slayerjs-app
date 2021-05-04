import React, { Component } from 'react';
import './css/app.css';
import SweetAlert from 'react-bootstrap-sweetalert';
import bgImage from './images/bg.png';
import Bar from './components/bar.jsx';
import 'antd/dist/antd.css'
import Menu from './components/menu.jsx'
import Game from './components/game.jsx'
import Map from './components/map.jsx'
import { Route, Switch } from 'react-router';

const divStyle = {
  color: 'black',
  backgroundImage: 'url(' + bgImage + ')',
  backgroundSize:'cover',
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: null,
    };
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
        <Switch>
          <Route path="/game" component={Game}/>
          <Route path="/map" component={Map}/>
          <Route path="/" component={Menu}/>
        </Switch>
      </div>
    );
  }
}
