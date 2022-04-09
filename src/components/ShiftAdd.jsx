import React from "react";

export const ShiftAdd = (props) => {
  // let addShift = props.addShift; // method of root app
  const addShift = (shift) => {
    console.log("this is a palceholder");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form id="shiftForm" name="shiftAdd" onSubmit={handleSubmit}>
      <label>
        <input id="dateInput" type="date" name="date" placeholder="today" />
        date
      </label>
      <label>
        <input type="time" name="start" placeholder="start" />
        start
      </label>
      <label>
        <input type="time" name="end" placeholder="end" />
        end
      </label>
      <button className="addbtn">add</button>
    </form>
  );
};
