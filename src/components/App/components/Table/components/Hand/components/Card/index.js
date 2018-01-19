import React from 'react'
import { PropTypes as T } from 'prop-types'
import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from { opacity: 0; bottom: -100px; }
  to { opacity: 1; bottom: 0;  }
`

const Wrapper = styled.div`
  animation: ${slideIn} 0.3s linear forwards;
  background-color: rgb(250,250,250);
  border-radius: 7%;
  color: ${props => ['diamond', 'heart'].includes(props.suit) ? 'red' : 'black'};
  
  font-size: 30px;

  width: 75px;
  height: 100px;
  position: relative;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    position: absolute;
  }
`

const Top = styled.div`
  left: 7px;
  top: 2px;
`

const Bottom = styled.div`
  bottom: 2px;
  right: 7px;
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
`

const Heart = styled.div`::before { content: '\\2665' }`
const Diamond = styled.div`::before { content: '\\2666' }`
const Spade = styled.div`::before { content: '\\2660' }`
const Club = styled.div`::before { content: '\\2663' }`

const Back = styled.div`
  opacity: 0.8;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background: #400000;
  background: -moz-linear-gradient(top,  #400000 0%, #000000 100%);
  background: -webkit-linear-gradient(top,  #400000 0%,#000000 100%);
  background: linear-gradient(to bottom,  #400000 0%,#000000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#400000', endColorstr='#000000',GradientType=0 );
`

const Card = ({ faceDown, suit, value }) => {
  let Suit
  switch (suit) {
    case 'diamond':
      Suit = Diamond
      break
    case 'heart':
      Suit = Heart
      break
    case 'spade':
      Suit = Spade
      break
    case 'club':
      Suit = Club
      break
    default:
      break
  }
  let content
  switch (true) {
    case faceDown:
      content = <Back />
      break
    case value === '1':
      content = <Suit big/>
      break
    default:
      content = [
        <Top key='top'>
          <span>{value}</span>
          <Suit />
        </Top>,
        <Bottom key='back'>
          <span>{value}</span>
          <Suit />
        </Bottom>
      ]
      break
  }
  return (
    <Wrapper suit={suit}>
      {content}
    </Wrapper>
  )
}

Card.defaultProps = {
  faceDown: true
}

Card.propTypes = {
  faceDown: T.bool,
  suit: T.oneOf(['club', 'diamond', 'heart', 'spade']).isRequired,
  value: T.string.isRequired
}

export default Card
