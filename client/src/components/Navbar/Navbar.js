import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavbarWrapper = styled.div`
  height: 6vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  background: #fff;
  border-top: 1px solid #ccc;
`

const Link = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
  position: relative;
  background: ${p => p.active ? '#ddd' : 'transparent'};

  ::before {
    content: '';
    position: absolute;
    left: 0;
    border-left: 1px solid #eee;
    height: 80%;
  }
`

export default props => {
  return (
    <NavbarWrapper>
      <Link to="/">Home</Link>
      <Link to="/wraps">Wraps</Link>
      <Link to="/">Lend</Link>
      <Link to="/">Return</Link>
    </NavbarWrapper>
  )
}
