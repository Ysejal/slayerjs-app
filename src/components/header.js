import React from'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            current: 'top'
        };
    }
    render() {
      return (
        <header>
            <Row>
                <Col span = {2}></Col>
                <Col span = {4}>
                    <a href = "/" class="logo">
                        <img src="" alt="logo"/>
                        <span>ReactNews</span>
                    </a>
                </Col>
                <Col span={16}>
                    <Menu mode="horizontal" selectedKeys = {[this.state.current]}>
                        <Menu.Item key="top">
                            <Icon type="appstore"/>测试
                        </Menu.Item>
                    </Menu>
                </Col>           
            </Row>
        </header>
      );
    }
  }