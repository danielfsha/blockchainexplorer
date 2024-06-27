import React from "react";

const TransactionDataItem = ({ info }) => {
  console.log(info);

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
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center text-sm space-y-1">
            <p>
              <span className="highlight">
                {`${info.transactionHash.slice(
                  0,
                  7,
                )}....${info.transactionHash.slice(-6)}`}
              </span>
            </p>
            <p className="text-xs">{info.time}</p>
          </div>

          <div className="flex flex-col justify-center items-end text-sm space-y-3">
            <p>
              From:
              <span className="highlight ml-2">
                {`${info.fromAddress.slice(0, 7)}....${info.fromAddress.slice(
                  -6,
                )}`}
              </span>
            </p>
            <p className="text-xs">
              To:
              <span className="highlight ml-2">
                {`${info.toAddress.slice(0, 7)}....${info.toAddress.slice(-6)}`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDataItem;
