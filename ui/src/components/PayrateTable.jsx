import React from "react";

const PayrateRow = ({ payrate }) => {
  const { id, rate, days, periodStart, periodEnd, holiday, created } = payrate;
  const startParsed = periodStart.hour + ":" + periodStart.minute;
  const endParsed = periodEnd.hour + ":" + periodEnd.minute;
  // parse days
  // parse holidays
  return (
    <tr>
      <td>{id}</td>
      <td>{rate}</td>
      <td>{days}</td>
      <td>{startParsed} - {endParsed}</td>
      <td>{holiday.toString()}</td>
    </tr>
  );
};

const PayrateTable = ({ payrates }) => {
    const tableRows = payrates.map((payrate) => (
        <PayrateRow key={payrate.id} payrate={payrate} />
    ));
  return (
      <table>
          <thead>
              <tr>
                  <th>id</th>
                  <th>$/hr</th>
                  <th>days</th>
                  <th>hours</th>
                  <th>holiday</th>
              </tr>
          </thead>
          <tbody>
              {tableRows}
          </tbody>
      </table>
  );
};

export default PayrateTable;