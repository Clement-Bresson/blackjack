import React from 'react'
import { PropTypes as T } from 'prop-types'
import styled from 'styled-components'
import { capitalize } from '../../../../../../../../utils'


const Wrapper = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  line-height: 2;
`

const Name = ({ children }) => (
  <Wrapper>
    {capitalize(children)}
  </Wrapper>
)

Name.propTypes = {
  children: T.node.isRequired
}

export default Name
