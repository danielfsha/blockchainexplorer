import React from "react";

const HeroSection = ({
  ethPrice,
  marketCap,
  totalTransactionsCount,
  lastFinalizedBlock,
}) => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ether pricing */}
          <div className="flex items-center border-b p-4 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Ethereum"
              role="img"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <rect width="512" height="512" rx="15%" fill="#ffffff" />
              <path fill="#3C3C3B" d="m256 362v107l131-185z" />
              <path fill="#343434" d="m256 41l131 218-131 78-132-78" />
              <path fill="#8C8C8C" d="m256 41v158l-132 60m0 25l132 78v107" />
              <path fill="#141414" d="m256 199v138l131-78" />
              <path fill="#393939" d="m124 259l132-60v138" />
            </svg>

            <div className="flex flex-col justify-center space-y-1">
              <p className="text-xs">ETHER PRICE</p>
              <h2 className="text-md">{`$ ${ethPrice}`}</h2>
            </div>
          </div>

          {/* transactions */}
          <div className="flex items-center border-b p-4 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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

            <div className="flex flex-col justify-center space-y-1">
              <p className="text-xs">TRANSACTIONS</p>
              <h2 className="text-md">{totalTransactionsCount}</h2>
            </div>
          </div>

          {/* marketcap */}
          <div className="flex items-center border-b p-4 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>

            <div className="flex flex-col justify-center space-y-1">
              <p className="text-xs">MARKET CAP</p>
              <h2 className="text-md">{marketCap}</h2>
            </div>
          </div>

          {/* blocks */}
          <div className="flex items-center border-b p-4 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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

            <div className="flex flex-col justify-center space-y-1">
              <p className="text-xs">LAST FINALIZED BLOCK</p>
              <h2 className="text-md">{lastFinalizedBlock}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
