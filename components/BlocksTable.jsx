import React from "react";

const BlocksTable = ({ data }) => {
  // blockNumber;
  // totalTransactions;
  // gasUsed;
  // miner;
  // time;

  return (
    <table className="table-auto w-full bg-white border shadow-xl rounded-xl shadow-gray-500/10 overflow-hidden text-gray-700">
      <thead>
        <tr className="text-sm font-medium text-left border-b">
          <th> Block</th>
          <th> Txs</th>
          <th> Gas Used</th>
          <th> Fee Recipient</th>
          <th> Age</th>
        </tr>
      </thead>

      <tbody>
        {data.map((d, index) => (
          <tr key={index} className="text-sm border-b hover:bg-green-600/15">
            <td>
              <p className="highlight">{d.blockNumber}</p>
            </td>
            <td>{d.totalTransactions}</td>
            <td>{d.gasUsed}</td>
            <td>
              <p className="highlight">
                {d.miner.slice(0, 7)}....{d.miner.slice(-6)}
              </p>
            </td>
            <td>{d.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlocksTable;
