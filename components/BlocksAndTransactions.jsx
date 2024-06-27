import DataCard from "@/components/DataCard";

const BlocksAndTransactions = ({ blocks, transactions }) => {
  return (
    <div className="wrapper">
      <div className="flex flex-col space-y-2 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-2">
        <DataCard title={"Latest Blocks"} data={blocks} />
        <DataCard title={"Latest Transactions"} data={transactions} />
      </div>
    </div>
  );
};

export default BlocksAndTransactions;
