import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100px;

  button {
    height: 100%;
    width: 100%;
    background: ${p => p.active ? '#ccc' : 'transparent'};
    border: none;

    :hover {
      cursor: pointer;
      background: #ccc;
      outline: none;
    }
  }
`;

export default props => (
  <Wrapper active={props.active}>
    <NavLink to={props.to}>
      <button>{props.text}</button>
    </NavLink>
  </Wrapper>
)

