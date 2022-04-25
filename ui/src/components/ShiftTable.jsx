import React from "react";
import ShiftRow from "./ShiftRow";
import '../App.css';

const ShiftTable = ({ shifts }) => {
  const shiftRows = shifts.map((shift) => (
    <ShiftRow key={shift.id} shift={shift} />
  ));
  return (
    <table style={tableStyles}>
      <thead>
          <tr>
              <th>id</th>
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

const tableStyles = {
  border: '2px solid black',
  'borderRadius': '5px',
  'marginRight': 'auto',
  'marginLeft': 'auto',
  width: '70%',
}