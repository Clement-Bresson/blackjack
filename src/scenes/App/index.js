import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import withContainer from './container'

class App extends Component {
  render() {
    const { testPassed, passTest } = this.props
    return (
      <div onClick={passTest} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Is test passed ? {testPassed ? 'Yes' : 'No'}
        </p>
      </div>
    )
  }
}

export default withContainer(App)
