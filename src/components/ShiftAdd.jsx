import React from "react";
import { useState } from "react";

export const ShiftAdd = (props) => {
  const [ shift, setShift ] = useState({});
  // let addShift = props.addShift; // method of root app
  const addShift = (shift) => {
    console.log("this is a palceholder");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`state submitted:`, shift);

  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    const newShift = { ...shift};
    newShift[name] = value;
    setShift(newShift);
  };
  return (
    <details>
      <summary className="addShift">add shift</summary>
      <div>
        <form id="shiftForm" name="shiftAdd" onSubmit={handleSubmit}>
          <label>
            <input
              id="dateInput"
              type="date"
              name="date"
              placeholder="today"
              onChange={handleInputChange}
            />
            date
          </label>
          <label>
            <input
              type="time"
              name="start"
              placeholder="start"
              onChange={handleInputChange}
            />
            start
          </label>
          <label>
            <input
              type="time"
              name="end"
              placeholder="end"
              onChange={handleInputChange}
            />
            end
          </label>
          <input className="addbtn" type="submit" value="add" />
        </form>
      </div>
    </details>
  );
};
