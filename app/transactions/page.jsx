"use client";

import { useState, useEffect } from "react";

import TransactionsTable from "@/components/TransactionsTable";

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  const getLatestTransactions = async () => {
    const res = await fetch(
      "https://667d157b65c136820a1cd29f--comforting-torrone-4bcf8f.netlify.app/.netlify/functions/api/getLatestBlocks",
    );

    const data = await res.json();
    const { previousBlockInfo } = data;

    setTransactions(previousBlockInfo[0].transactions);
  };

  useEffect(() => {
    getLatestTransactions();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <h1 className="py-4 pb-8">Transactions</h1>
        <TransactionsTable data={transactions} />
      </div>
    </div>
  );
}

export default TransactionsPage;
