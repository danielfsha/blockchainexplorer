"use client";

import { useEffect, useState } from "react";

import HeroSection from "@/components/HeroSection";
import BlocksAndTransactions from "@/components/BlocksAndTransactions";

import { useEvmNativeBalance } from "@moralisweb3/next";
import { EvmChain } from "moralis/common-evm-utils";

export default function Home() {
  const [ethPrice, setEthPrice] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [totalTransactionsCount, setTotalTransactionsCount] = useState(
    "2,419.15 M (16.0 TPS)",
  );
  const [lastFinalizedBlock, setLastFinalizedBlock] = useState(0);
  const [recentBlocks, setRecentBlocks] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);

  const getEthPrice = async () => {
    const res = await fetch(
      "https://667d157b65c136820a1cd29f--comforting-torrone-4bcf8f.netlify.app/.netlify/functions/api/getEthPrice",
    );

    const data = await res.json();
    const { usdPrice } = data;

    setEthPrice(usdPrice);
    setMarketCap(120199639.57 * usdPrice);
  };

  const getLatestBlocks = async () => {
    const res = await fetch(
      "https://667d157b65c136820a1cd29f--comforting-torrone-4bcf8f.netlify.app/.netlify/functions/api/getLatestBlocks",
    );

    const data = await res.json();
    const { latestBlock, previousBlockInfo } = data;

    // block number
    setLastFinalizedBlock(latestBlock);

    // only 5 elememts
    setRecentTransactions(previousBlockInfo[0].transactions);

    const blocks = [];
    for (let i = 1; i <= 5; i++) {
      blocks.push(previousBlockInfo[i]);
    }

    // console.log(blocks);
    setRecentBlocks(blocks);
  };

  useEffect(() => {
    getEthPrice();
    getLatestBlocks();
  }, []);

  // https://667d157b65c136820a1cd29f--comforting-torrone-4bcf8f.netlify.app/.netlify/functions/api/getEthPrice
  // https://667d157b65c136820a1cd29f--comforting-torrone-4bcf8f.netlify.app/.netlify/functions/api/getLatestBlocks
  // https://667d157b65c136820a1cd29f--comforting-torrone-4bcf8f.netlify.app/.netlify/functions/api/getTransactionsByAddress?address=0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97

  return (
    <main className="space-y-4">
      <HeroSection
        ethPrice={ethPrice}
        marketCap={marketCap}
        totalTransactionsCount={totalTransactionsCount}
        lastFinalizedBlock={lastFinalizedBlock}
      />
      {/* Blocks and Transactions Cards */}
      <BlocksAndTransactions
        blocks={recentBlocks}
        transactions={recentTransactions}
      />
    </main>
  );
}
