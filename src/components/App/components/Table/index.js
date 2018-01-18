import React from 'react'
import Hand from './components/Hand'
import withContainer from './container'
import { PropTypes as T } from 'prop-types'

class Table extends React.Component {

  componentWillMount () {
    const { createNewDeck, dealCardTo } = this.props
    createNewDeck()
    dealCardTo('player')
    dealCardTo('player')
    dealCardTo('dealer')
    dealCardTo('dealer', true)
  }

  render () {
    const { hands } = this.props

    if (!hands) {
      return (
        <div onClick={this.handleFirstDeal}>Deal Cards</div>
      )
    }

    return (
      <div>
        {Object.keys(hands).map(player => (
          <Hand
            key={player}
            cards={hands[player]}
            player={player}
          />
        ))}
      </div>
    )
  }
}

Table.propTypes = {
  createNewDeck: T.func.isRequired,
  dealCardTo: T.func.isRequired,
  deck: T.array.isRequired,
  hands: T.object.isRequired
}

export default withContainer(Table)
