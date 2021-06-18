import React from "react";

const Table = ({ data }) => {
  let { columns, body } = data;
  return (
    <table>
      {columns?.length > 0 && (
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id}>{column.title}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {body.map((row, rowIndex) => (
          <tr key={row.id}>
            {columns.map((column, index) => (
              <td key={column.id}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
