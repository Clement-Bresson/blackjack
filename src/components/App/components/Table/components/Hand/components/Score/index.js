import React from 'react'
import { PropTypes as T } from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  opacity: 0.8;
  text-align: center;
`

const Score = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

Score.propTypes = {
  children: T.node.isRequired
}

export default Score
