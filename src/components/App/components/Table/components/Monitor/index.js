import React from 'react'
import { PropTypes as T } from 'prop-types'
import withContainer from './container'
import * as R from 'ramda'
import Button from '../../../../../Button'
import { visibleCards } from '../../../../../../utils'

class Monitor extends React.Component {

  componentWillReceiveProps({ hands: newHands, scores, statuses: newStatuses }) {
    const { calculateScores, dealCardTo, hands, revealDealerCards, statuses } = this.props

    if (!R.equals(newStatuses, statuses)) {
      const { dealer, ...playerStatuses } = newStatuses
      const playersCount = Object.keys(playerStatuses).length
      const playersBustedCount = this.playerCount(playerStatuses, 'busted')
      const playersStickCount = this.playerCount(playerStatuses, 'stick')

      // if all players are either busted or stick
      if (playersBustedCount + playersStickCount === playersCount) {
        // if at least one player has stick
        if (playersStickCount >= 1) {
          revealDealerCards()
        }
      }
    }

    // dealer has just reavealed his card
    if (visibleCards(newHands.dealer) !== visibleCards(hands.dealer) && visibleCards(newHands.dealer) === 2) {
      if (scores.dealer <= 16) {
        dealCardTo('dealer')
        calculateScores()
      } else {
        calculateScores()
      }
    }
  }

  dealNewCards = () => {
    const {
      createNewDeck,
      dealCardTo
    } = this.props
    createNewDeck()
    dealCardTo('player')
    dealCardTo('player')
    dealCardTo('dealer')
    dealCardTo('dealer', true)
  }

  playerCount = (playerStatuses, status) => Object.keys(playerStatuses).filter(player => {
    return playerStatuses[player] === status
  }).length

  shouldDisplayRetryButton = () => {
    const { statuses } = this.props
    const { dealer, ...playerStatuses } = statuses
    // if all player have no status (start), won, or lost
    return Object.keys(playerStatuses).filter(player => ['won', 'busted', 'lost'].includes(playerStatuses[player])).length === Object.keys(playerStatuses).length
  }

  render() {
    if (this.shouldDisplayRetryButton()) {
      return <Button onClick={this.dealNewCards}>Deal</Button>
    }
    return null
  }
}

Monitor.propTypes = {
  calculateScores: T.func.isRequired,
  dealCardTo: T.func.isRequired,
  hands: T.object.isRequired,
  revealDealerCards: T.func.isRequired,
  scores: T.object.isRequired,
  statuses: T.object.isRequired
}

export default withContainer(Monitor)
