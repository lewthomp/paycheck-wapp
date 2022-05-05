import React from "react";
import "../App.css";

const ShiftRow = ({ shift }) => {
  const [start, end] = [new Date(shift.start), new Date(shift.end)];
  return (
    <tr>
      <td>{shift.id}</td>
      <td>{start.toDateString()}</td>
      <td>
        {start.getHours()}:{start.getMinutes()}
      </td>
      <td>
        {end.getHours()}:{end.getMinutes()}
      </td>
    </tr>
  );
};

const ShiftTable = ({ shifts }) => {
  const shiftRows = shifts.map((shift) => (
    <ShiftRow key={shift.id} shift={shift} />
  ));
  return (
    <div>
      <h4 style={{ margin: 0, fontSize: 36 }}>shifts</h4>
      <table>
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
    </div>
  );
};

export default ShiftTable;

// const tableStyles = {
//   border: '2px solid black',
//   'borderRadius': '5px',
//   'marginRight': 'auto',
//   'marginLeft': 'auto',
//   width: '70%',
// }
