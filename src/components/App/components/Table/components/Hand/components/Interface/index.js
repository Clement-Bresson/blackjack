import React from 'react'
import Button from '../../../../../../../Button'
import styled from 'styled-components'
import withContainer from './container'
import { PropTypes as T } from 'prop-types'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`

class Interface extends React.Component {

  handleHit = () => {
    const { player, dealCardTo } = this.props
    dealCardTo(player)
  }

  handleStick = () => {
    const { player, isStick } = this.props
    isStick(player)
  }

  render () {
    const { player } = this.props
    if (player === 'dealer') {
      return null
    }
    return (
      <Wrapper>
        <Button onClick={this.handleHit}>Hit</Button>
        <Button onClick={this.handleStick}>Stick</Button>
      </Wrapper>
    )
  }
}

Interface.propTypes = {
  dealCardTo: T.func.isRequired,
  isStick: T.func.isRequired,
  player: T.string.isRequired
}

export default withContainer(Interface)
