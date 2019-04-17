import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

const menuItems = [
  { to: '/', icon: 'home', text: 'Home' },
  { to: '/wraps', icon: 'table', text: 'Wraps' },
  { to: '/add', icon: 'plus', text: 'Add' },
  { to: '/lend', icon: 'minus-square', text: 'Lend' },
  { to: '/return', icon: 'check-square', text: 'Return' },
  { to: '/meetings', icon: 'calendar', text: 'Meetings' },
]

export default class Sidebar extends Component {
  state = { collapsed: true };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        theme="light"
      >
        <div className="logo" />
        <Menu defaultSelectedKeys={['0']} mode="inline">
          {menuItems.map((item, i) => (
            <Menu.Item key={i}>
              <NavLink to={item.to}>
                <Icon type={item.icon} />
                <span>{item.text}</span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}
