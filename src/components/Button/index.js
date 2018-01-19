import React from 'react'
import { PropTypes as T } from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.button`
  color: rgb(250,250,250);
  font-size: 0.8em;
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;

  width: 100px;
  height: 100px;
  margin: 10px;
  
  border: 10px dotted #fff;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  background-color: rgb(15,15,15);
  outline: none;

  &:hover {
    background-color: rgb(40,40,40);
  }
`

const Button = ({ children, onClick }) => (
  <Wrapper onClick={onClick}>
    {children}
  </Wrapper>
)

Button.propTypes = {
  children: T.node.isRequired,
  onClick: T.func
}

export default Button
