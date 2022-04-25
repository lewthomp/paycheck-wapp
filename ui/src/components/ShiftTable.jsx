import React from "react";
import ShiftRow from "./ShiftRow";
import '../App.css';

const ShiftTable = ({ shifts }) => {
  const shiftRows = shifts.map((shift) => (
    <ShiftRow key={shift.id} shift={shift} />
  ));
  return (
    <table className="bordered-table">
      <thead>
          <tr>
              <th style={headingStyle}>id</th>
              <th>date</th>
              <th>start</th>
              <th>end</th>
          </tr>
      </thead>
      <tbody>{shiftRows}</tbody>
    </table>
  );
};

export default ShiftTable;


const headingStyle = {
    margin: '40px',
    color: 'red',
}