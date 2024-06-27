import React from "react";

const BlockDataItem = ({ info }) => {
  // console.log(info);

  return (
    <div className="data_row">
      <div className="flex items-center justify-center space-x-2">
        <div className="transaction_type_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>

        <div className="flex flex-col justify-center text-sm">
          <p>{info.blockNumber}</p>
          <p className="text-xs">{info.time}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end text-sm space-y-1">
        <p>
          <span className="highlight">
            {`${info.miner.slice(0, 7)}....${info.miner.slice(-6)}`}
          </span>
        </p>
        <p className="text-xs">{`${info.totalTransactions} txs`} </p>
      </div>
    </div>
  );
};

export default BlockDataItem;
