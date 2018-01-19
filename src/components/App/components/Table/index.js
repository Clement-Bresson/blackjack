import React from 'react'
import Hand from './components/Hand'
import Monitor from './components/Monitor'
import withContainer from './container'
import { PropTypes as T } from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Players = styled.div`
  margin: auto;
  left: 0;
  right: 0;
  position: absolute;
`

const Dealer = Players.extend`
  top: 5vh;
`

const Player = Players.extend`
  bottom: 5vh;
`

class Table extends React.Component {
  render () {
    const { hands, statuses } = this.props

    if (!hands) {
      return (
        <div onClick={this.handleFirstDeal}>Deal Cards</div>
      )
    }

    const { dealer, ...playerHands } = hands
    return (
      <Wrapper>
        {!!dealer &&
          <Dealer>
            <Hand
              cards={dealer}
              player='dealer'
            />
          </Dealer>
        }
        <Monitor />
        {!!playerHands &&
          <Player>
            {Object.keys(playerHands).map(player => (
              <Hand
                key={player}
                cards={hands[player]}
                player={player}
                status={statuses[player]}
              />
            ))}
          </Player>
        }
      </Wrapper>
    )
  }
}

Table.propTypes = {
  deck: T.array.isRequired,
  hands: T.object.isRequired,
  statuses: T.object.isRequired,
}

export default withContainer(Table)
