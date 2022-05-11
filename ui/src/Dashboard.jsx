import React, { Component } from "react";

import ShiftAdd from "./components/ShiftAdd";
import ShiftTable from "./components/ShiftTable";
import PayrateTable from "./components/PayrateTable";
import { SpreadsheetAdd } from "./components/SpreadsheetAdd";
import "./App.css";

import graphqlFetch from "./graphqlFetch";
import { addShiftQuery } from "./queries.js";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      shifts: [],
      payrates: [],
    };
    this.createShift = this.createShift.bind(this);
    this.deleteShift = this.deleteShift.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query loadData {
        shiftList {
          id start end created
        }
        payrateList {
          id rate days 
          periodStart {
            hour minute
          }
          periodEnd {
            hour minute
          }
          holiday created
        }
      }`;
    const data = await graphqlFetch(query);
    if (data) {
      this.setState({
        shifts: data.shiftList,
        payrates: data.payrateList,
      });
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
    const payrates = this.state.payrates;
    return (
      <React.Fragment>
        <div className="App">
          <h3>dashboard</h3>
          <p>payrates</p>
          <PayrateTable payrates={payrates} />
          <p>shifts</p>
          <ShiftTable shifts={shifts} />
          <ShiftAdd createShift={this.createShift} />
        </div>
      </React.Fragment>
    );
  }
}
