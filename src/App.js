import React, { Component } from "react";
import { ShiftAdd } from "./components/ShiftAdd";

import "./App.css";
import Nav from "./components/Nav";
import { SpreadsheetAdd } from "./components/SpreadsheetAdd";

export default class App extends Component {
  construct() {
    this.state = {
      username: null,
      loggedIn: false,
    };
  }

  addShift(shift) {}

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Nav />
          <h1 id="title">paycheck🤑</h1>
          <div id="inputContainer">
            <ShiftAdd />
            {/* <SpreadsheetAdd /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
