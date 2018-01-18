import React from 'react'
import { PropTypes as T } from 'prop-types'
import styled from 'styled-components'
import Card from './components/Card'
import { capitalize, computePossibleScores } from '../../../../../../utils'

const Name = styled.h2`
  font-size: 1.5em;
  text-align: center;
`

const Cards = styled.div`
  display: flex;
`

const Score = styled.div`
  opacity: 0.8
`

const Hand = ({ cards, player }) => {
  const possibleScores = computePossibleScores(cards)
  return ([
    <Name key={`${player}-name`}>{capitalize(player)}</Name>,
    <Cards key={`${player}-cards`}>
      {cards.map(({ suit, value, faceDown }) => (
        <Card
          key={`${suit}${value}`}
          value={value}
          faceDown={faceDown}
          suit={suit}
        />
      ))}
    </Cards>,
    <Score key={`${player}-score`}>
      {computePossibleScores(cards).reduce((acc, curr) => `${acc} - ${curr}`)}
    </Score>
  ])
}

Hand.propTypes = {
  cards: T.array.isRequired,
  player: T.string.isRequired
}

export default Hand
