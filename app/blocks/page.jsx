"use client";

import { useEffect, useState } from "react";

import BlocksTable from "@/components/BlocksTable";

function BlocksPage() {
  const [blocks, setBlocks] = useState([]);

  const getLatestBlocks = async () => {
    const res = await fetch(
      "https://667d157b65c136820a1cd29f--comforting-torrone-4bcf8f.netlify.app/.netlify/functions/api/getLatestBlocks",
    );

    const data = await res.json();
    const { latestBlock, previousBlockInfo } = data;

    const b = [];
    for (let i = 1; i <= 5; i++) {
      b.push(previousBlockInfo[i]);
    }

    // console.log(blocks);
    setRecentBlocks(blocks);
  };

  useEffect(() => {
    getLatestBlocks();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <h1 className="py-4 pb-8">Transactions</h1>
        <BlocksTable data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      </div>
    </div>
  );
}

export default BlocksPage;
