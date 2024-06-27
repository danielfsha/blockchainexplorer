import React from "react";

const TransactionsTable = ({ data }) => {
  // transactionHash;
  // time;
  // fromAddress;
  // toAddress;
  // value;

  return (
    <table className="table-auto w-full bg-white border shadow-xl rounded-xl shadow-gray-500/10 overflow-hidden text-gray-700">
      <thead>
        <tr className="text-sm font-medium text-left border-b">
          <th>Tx hash</th>
          <th>age</th>
          <th>from</th>
          <th>to</th>
          <th>value</th>
        </tr>
      </thead>

      <tbody>
        {data.map((d, index) => (
          <tr key={index} className="text-sm border-b hover:bg-green-600/15">
            <td>
              <p className="highlight">
                {d.transactionHash.slice(0, 7)}....{d.transactionHash.slice(-6)}
              </p>
            </td>
            <td>{d.time}</td>
            <td>
              <p className="highlight">
                {d.fromAddress.slice(0, 7)}....{d.fromAddress.slice(-6)}
              </p>
            </td>
            <td>
              <p className="highlight">
                {d.toAddress.slice(0, 7)}....{d.toAddress.slice(-6)}
              </p>
            </td>
            <td>{d.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
