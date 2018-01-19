import React from 'react'
import styled from 'styled-components'
import { PropTypes as T } from 'prop-types'

const Wrapper = styled.p`
  font-weight: 300;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
`

const Status = ({ status }) => {
  let message
  switch (status) {
    case 'dealt':
      message = 'What do you do ?'
      break
    case 'busted':
      message = 'You are busted !'
      break
    case 'won':
      message = 'You won congratulations !'
      break
    case 'lost':
      message = 'You lost ! Sorry...'
      break
    default:
      message = ''
      break
  }
  return (
    <Wrapper>
      {message}
    </Wrapper>
  )
}

Status.propTypes = {
  status: T.oneOf(['dealt', 'stick', 'busted', 'won', 'lost'])
}

export default Status
