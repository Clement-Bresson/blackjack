import React from 'react'

import styled from 'styled-components'
import githubIcon from './images/github_icon.ico'

const Wrapper = styled.p`
  text-align: center;
  font-size: 80%;
  position: absolute;
  bottom: 0;
  line-height: 30px;
`

const GitLink = styled.a`
  color: inherit;
  text-decoration: none;

  img {
    vertical-align: middle;
    height: 20px;
    width: 20px;
  }
`

const Footer = () => (
  <Wrapper>
    A simple BlackJack game by Clement Bresson - <GitLink target='_blank' href='https://github.com/Clement-Bresson/blackjack'>View on <img alt='github icon' src={githubIcon} /></GitLink>
  </Wrapper>
)

export default Footer
