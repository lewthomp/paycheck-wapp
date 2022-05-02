import React from "react";

export default class ShiftAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      shift: {},
      showingValidation: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const form = document.forms.addShiftForm;
    
    console.log(`time submitted by form:`, form.start.value);
    console.log(form.end.value);
    console.log(`type of form submission: `, typeof form.start.value);

    const newShift = {
      start: new Date(`${form.date.value}T${form.start.value}`),
      end: new Date(`${form.date.value}T${form.end.value}`),
      notes: form.notes.value
    };

    console.log(`handling submit`, newShift);
    
    const { createShift } = this.props;
    
    createShift(newShift);

    form.date.value = null;
    form.start.value = null;
    form.end.value = null;
  }

  render() {
    return (
      <details>
        <summary className="addShift">add shift</summary>
        <div>
          <form id="addShiftForm" name="shiftAdd" onSubmit={this.handleSubmit}>
              <label>date</label>
              <input type="date" name="date" placeholder="today" />
              <label>start</label>
              <input type="time" name="start" placeholder="start" />
              <label>end</label>
              <input type="time" name="end" placeholder="end" />
              <label>notes</label>
              <input type="text" name="notes" placeholder="(optional)" />
            <button type="submit">Add</button>
          </form>
        </div>
      </details>
    );
  }
}
