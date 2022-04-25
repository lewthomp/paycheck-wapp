import React from "react";
import ShiftRow from "./ShiftRow";

const ShiftTable = ({ shifts }) => {
  const shiftRows = shifts.map((shift) => (
    <ShiftRow key={shift.id} shift={shift} />
  ));
  return (
    <table className="bordered-table">
      <thead>
          <tr>
              <th>id</th>
              <th>date</th>
              <th>day</th>
              <th>start</th>
              <th>end</th>
          </tr>
      </thead>
      <tbody>{shiftRows}</tbody>
    </table>
  );
};

export default ShiftTable;
