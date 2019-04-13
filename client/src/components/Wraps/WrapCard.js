import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 98%;
  height: 30%;
  max-height: 150px;
  margin: 16px auto;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0px 0px 4px #eee;
  display: flex;
  position: relative;
  overflow: hidden;
`
Card.Indicator = styled.div`
  position: absolute;
  width: 2.5vw;
  height: 2.5vw;
  max-width: 20px;
  max-height: 20px;
  right: 2.5vw;
  top: 2.5vw;
  background: ${p => p.available ? 'cornflowerblue' : '#eee'};
  border-radius: 50%;
`
Card.ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`
Card.Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
Card.Body = styled.div`
  flex: 2.5;
  padding: 10px;
  display: flex;
  flex-direction: column;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    color: #999;
    font-size: 1rem;
  }

  div:nth-child(1) {
    font-weight: 600;
    color: #000;
  }
`
export default props => (
  <Card>
    <Card.Indicator available={props.wrap.isAvailable}/>
    <Card.ImageWrapper>
      <Card.Image src={props.wrap.src || 'http://placehold.it/200x200'} />
    </Card.ImageWrapper>
    <Card.Body>
      <div>{props.wrap.name}</div>
      <div>{props.wrap.brand}</div>
      <div>{props.wrap.type}</div>
      <div>{props.wrap.size}</div>
    </Card.Body>
  </Card>
)
