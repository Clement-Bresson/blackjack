import React from 'react'
import { PropTypes as T } from 'prop-types'
import styled from 'styled-components'
import Card from './components/Card'
import Score from './components/Score'
import Name from './components/Name'
import Status from './components/Status'
import Interface from './components/Interface'
import { computePossibleScores } from '../../../../../../utils'
import withContainer from './container'

const Cards = styled.div`
  display: flex;
  justify-content: center;
`

const Hand = ({ cards, isBusted, player, status }) => {
  const possibleScores = computePossibleScores(cards)
  const isPlayerBusted = possibleScores.filter(score => score > 21).length === possibleScores.length
  if (isPlayerBusted) {
    isBusted(player)
  }
  return ([
    <Name key='name'>{player}</Name>,
    <Status key='status' status={status} />,
    <Cards key='cards'>
      {cards.map(({ suit, value, faceDown }) => (
        <Card
          key={`${suit}${value}`}
          value={value}
          faceDown={faceDown}
          suit={suit}
        />
      ))}
    </Cards>,
    <Score key='score'>
      {isPlayerBusted ?
        <span>Busted !</span>
      :
        <span>{possibleScores.filter(score => score <= 21).reduce((acc, curr) => `${acc} - ${curr}`)}</span>
      }
    </Score>,
    <div key='interface'>
      {status === 'dealt' && 
        <Interface player={player} />
      }
    </div>
  ])
}

Hand.propTypes = {
  cards: T.array.isRequired,
  isBusted: T.func.isRequired,
  player: T.string.isRequired,
  status: T.oneOf(['dealt', 'busted', 'stick', 'won', 'lost'])
}

export default withContainer(Hand)
