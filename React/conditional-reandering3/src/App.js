import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggerIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggerIn: !prevState.isLoggerIn
      };
    });
  }

  render() {
    let buttonText = this.state.isLoggerIn ? "LOG OUT" : "LOG IN";
    let displayText = this.state.isLoggerIn ? "Logged in" : "Logged out";
    return (
      <div>
      <button onClick={this.handleClick} >{buttonText}</button>
      <h1>{displayText}</h1>
      </div>
    );
}
}

export default App;
