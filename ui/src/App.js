import React, { Component } from "react";

import ShiftAdd from "./components/ShiftAdd";
import ShiftTable from "./components/ShiftTable";
import Nav from "./components/Nav";
import { SpreadsheetAdd } from "./components/SpreadsheetAdd";
import "./App.css";

import graphqlFetch from "./graphqlFetch";
import { addShiftQuery } from "./queries.js";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      shifts: [],
    };
    this.createShift = this.createShift.bind(this);
    this.deleteShift = this.deleteShift.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `
      query {
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
    const query = addShiftQuery;
    const variables = { input: shift };
    const data = await graphqlFetch(query, variables);
    if (data) this.loadData();
  }

  // todo
  async deleteShift(shiftId) {
    return null;
  }

  render() {
    const shifts = this.state.shifts;
    return (
      <React.Fragment>
        <div className="App">
          {/* <Nav /> */}
          <h1 id="title">paycheck🤑</h1>
          <ShiftTable shifts={shifts} />
          <ShiftAdd createShift={this.createShift} />
        </div>
      </React.Fragment>
    );
  }
}
