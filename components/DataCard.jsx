"use client";

import Link from "next/link";

import TransactionDataItem from "@/components/TransactionDataItem";
import BlockDataItem from "@/components/BlockDataItem";

const DataCard = ({ title, data }) => {
  return (
    <div className="card flex-1">
      {/* card title */}
      <div className="p-4 text-sm border-b">{title}</div>

      {/* card body */}
      {data.map((item, index) => {
        return title == "Latest Blocks" ? (
          <BlockDataItem key={index} info={item} />
        ) : (
          <TransactionDataItem key={index} info={item} />
        );
      })}

      {/* card Footer/CTA */}
      <div className="p-4">
        <Link
          // href={title == "Latest Blocks" ? "/blocks" : "/transactions"}
          href="#"
          className="btn"
        >
          <span>
            View All {title == "Latest Blocks" ? "Blocks" : "Transactions"}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default DataCard;
