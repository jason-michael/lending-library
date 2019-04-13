import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  max-width: 768px;
  margin: 0 auto 7vh auto;
`

const Title = styled.div`
  padding: 20px 0;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

export default props => (
  <Wrapper>
    <Title>{props.title}</Title>
    {props.children}
  </Wrapper>
)