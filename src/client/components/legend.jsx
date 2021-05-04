import React, { Component } from 'react';
import { Menu} from 'antd';
import legendImg from '../images/legend.png';

const { SubMenu } = Menu;

export default class subMebu extends Component {

    state = {
        theme: 'dark',
        current: '1',
      };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 150, height: 40 ,backgroundColor: '#222'}}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" title="Legend">
            <Menu.Item key="1">store</Menu.Item>
            <Menu.Item key="2">rest</Menu.Item>
            <Menu.Item key="3">map</Menu.Item>
            <Menu.Item key="4">monster</Menu.Item>
          </SubMenu>
        </Menu>
    )
  }
}