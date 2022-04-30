import React from "react";

export default class ShiftAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      shift: null,
      showingValidation: false,
    };
  }

  componentDidUpdate(prevState) {
    // console.log(this.state.shift);
  }
  
  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState( prevState => ({
      shift: { ...prevState, [name]: value }
    }))
  };

  async handleSubmit(event) {
    event.preventDefault();
    const shift = this.state.shift;

  };

  render() {
    return (
      <details>
        <summary className="addShift">add shift</summary>
        <div>
          <form id="shiftForm" name="shiftAdd" onSubmit={this.handleSubmit}>
            <label>
              <input
                id="dateInput"
                type="date"
                name="date"
                placeholder="today"
                onChange={this.handleInputChange}
              />
              date
            </label>
            <label>
              <input
                type="time"
                name="start"
                placeholder="start"
                onChange={this.handleInputChange}
              />
              start
            </label>
            <label>
              <input
                type="time"
                name="end"
                placeholder="end"
                onChange={this.handleInputChange}
              />
              end
            </label>
            <label>
              <input
                type="text"
                name="notes"
                placeholder="(optional)"
                onChange={this.handleInputChange}
              />
              notes
            </label>
            <input className="addbtn" type="submit" value="add" />
          </form>
        </div>
      </details>
    );
  }
}
