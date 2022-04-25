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
    this.createShift = this.createShift.bind(this);
    this.removeShift = this.removeShift.bind(this);
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
    if (data) {
      this.setState({ shifts: data.shiftList });
    }
  }

  async createShift(shift) {
    const query = `mutation shiftAdd($shift: shiftInputs!) {
        shiftAdd(shift: $shift) {
          id
        }
    }`;
    const variables = { shift }
    const data = await graphqlFetch(query, variables );
    if (data) this.loadData();
  }

    // todo
  removeShift(shiftId) {
    const query = ``;
    const variables = {};
    // const data = await graphqlFetch(query, variables );
    // if (data) this.loadData();    
  }

  render() {
    const shifts = this.state.shifts;
    return (
      <React.Fragment>
        <div className="App">
          {/* <Nav /> */}
          <h1 id="title">paycheck🤑</h1>
            <ShiftTable shifts={shifts}/>
            <ShiftAdd />
        </div>
      </React.Fragment>
    );
  }
}
