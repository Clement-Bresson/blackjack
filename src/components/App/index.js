import React, { Component } from 'react'
import Table from './components/Table'
import Footer from './components/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: #FFFFFF;
  font-family: 'Lato', sans-serif;

  height: 100vh;
  position: relative;
  width: 100%;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
 `

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Table />
        <Footer />
      </Wrapper>
    )
  }
}

export default App
