import React, { Component } from "react";

import ShiftAdd from "./components/ShiftAdd";
import ShiftTable from "./components/ShiftTable";
import Nav from "./components/Nav";
import { SpreadsheetAdd } from "./components/SpreadsheetAdd";
import graphqlFetch from "./graphqlFetch";
import { addShiftQuery } from "./queries.js";
import "./App.css";

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
    const query = `
      mutation 
        addShift($shift: AddShiftInput!) {
          addShift(shift: $shift) {
              id
          }
      }`;
    const variables = { shift };
    const data = await graphqlFetch(query, variables);
    if (data) this.loadData();
  }

  // todo
  async deleteShift(shiftId) {
    const query = `mutation shiftDelete($id: Int!) {
      shiftDelete(id: $id)
    }`;
    const { shifts } = this.state;
  }

  render() {
    const shifts = this.state.shifts;
    return (
      <React.Fragment>
        <div className="App">
          {/* <Nav /> */}
          <h1 id="title">paycheck🤑</h1>
          <ShiftTable shifts={shifts} />
          <ShiftAdd />
        </div>
      </React.Fragment>
    );
  }
}
