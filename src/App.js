import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

const dark = '#39D1B4';
const light = '#FFD712';

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null, background: light }
  }
  
  toggleDarkMode() {
    const toggle = this.state.background == light ? dark: light;
    this.setState({background: toggle});
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.toggleDarkMode}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={{background:this.state.darkMode}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
