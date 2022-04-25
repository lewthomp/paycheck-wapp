import React, { Component } from "react";
import { ShiftAdd } from "./components/ShiftAdd";
import { SpreadsheetAdd } from "./components/SpreadsheetAdd";
import ShiftTable from "./components/ShiftTable";
import Nav from "./components/Nav";
import "./App.css";
import graphqlFetch from "./graphqlFetch";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      shifts: []  
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      shiftList {
        id start end created
      }
    }`;
    const data = await graphqlFetch(query);
    console.log(`** api data loaded with keys: ${Object.keys(data)}`)
    if (data) {
      this.setState({ shifts: data.shifts });
    }
  }

  createShift(shift) {}

  render() {
    const shifts = this.state.shifts;
    return (
      <React.Fragment>
        <div className="App">
          {/* <Nav /> */}
          <h1 id="title">paycheck🤑</h1>
            {/* <ShiftAdd /> */}
            <ShiftTable shifts={shifts}/>
        </div>
      </React.Fragment>
    );
  }
}
