import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.p`
  text-align: center;
  font-size: 80%;
  position: absolute;
  bottom: 0;
  line-height: 2;
`

const Footer = () => (
  <Wrapper>
    A simple BlackJack game by Clement Bresson
  </Wrapper>
)

export default Footer
