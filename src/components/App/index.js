import React, { Component } from 'react'
import Table from './components/Table'
import Footer from './components/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  background:
  radial-gradient(black 15%, transparent 16%) 0 0,
  radial-gradient(black 15%, transparent 16%) 8px 8px,
  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
  background-size:16px 16px;
  color: rgb(250,250,250);
  font-family: 'Lato', sans-serif;

  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
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
