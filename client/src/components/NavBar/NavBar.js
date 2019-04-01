import React from 'react';
import NavButton from './NavButton';
import styled from 'styled-components';

const NavBar = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: 1px solid #ccc;
`;

export default props => {
  return (
    <NavBar>
      <NavButton to="/" text="Home" />
      <NavButton to="/lend" text="Lend" />
      <NavButton to="/return" text="Return" />
      <NavButton to="/inventory" text="Inventory" />
    </NavBar>
  )
}
