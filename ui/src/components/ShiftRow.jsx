import React from "react";

const ShiftRow = ({ shift }) => {
  const [start, end] = [shift.start, shift.end];
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

export default ShiftRow;
