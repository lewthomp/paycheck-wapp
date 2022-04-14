import React from "react";

export const SpreadsheetAdd = () => {
  const onChange = (e) => {
    e.preventDefault();
    console.log("file submitted");
  };

  return (
    <div className="spreadsheetAdd">
      <details>
        <summary className="addcsv">add spreadsheet</summary>
        <div className="inputSection">
          <input
            type="file"
            onChange={onChange}
            placeholder=""
            className="fileInput"
          />
        </div>
      </details>
    </div>
  );
};
