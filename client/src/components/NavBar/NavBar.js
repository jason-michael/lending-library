import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleBasic extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="massive" secondary pointing color="blue">
        <Menu.Item position="left" header>Lawrence Lending Library</Menu.Item>

        <Menu.Item
          position="right"
          as={NavLink}
          to="/home"
          name="home"
          active={activeItem === "home"}
          content="Home"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/lend"
          name="lend"
          active={activeItem === "lend"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/return"
          name="return"
          active={activeItem === "return"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/inventory"
          name="inventory"
          active={activeItem === "inventory"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}