import BlocksTable from "@/components/BlocksTable";

function transactions() {
  return (
    <div>
      <div className="wrapper">
        <h1 className="py-4 pb-8">Transactions</h1>
        <BlocksTable data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      </div>
    </div>
  );
}

export default transactions;
