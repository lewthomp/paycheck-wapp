import React from "react";
import ShiftRow from "./ShiftRow";

const ShiftTable = ({ shifts }) => {
  const shiftRows = shifts.map((shift) => (
    <ShiftRow key={shift.id} shift={shift} />
  ));
  console.log(`Number of shifts parsed from db: ${shifts.length}`)
  return (
    <table className="bordered-table" style={tableStyle}>
      <th>
          <tr>
              <th style={headingStyle}>id</th>
              <th>date</th>
              <th>start</th>
              <th>end</th>
          </tr>
      </th>
      <tbody>{shiftRows}</tbody>
    </table>
  );
};

export default ShiftTable;

const tableStyle = {
    color: 'black',
    border: '1px solid black',
    'margin-left': 'auto',
    'margin-right': 'auto',
}

const headingStyle = {
    margin: '40px',
    color: 'red'
}