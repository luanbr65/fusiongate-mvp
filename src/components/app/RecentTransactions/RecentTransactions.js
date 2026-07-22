"use client";

import { useState } from "react";
import TransactionTable from "@/components/app/TransactionTable/TransactionTable";
import TransactionDetailDrawer from "@/components/app/TransactionDetailDrawer/TransactionDetailDrawer";

export default function RecentTransactions({ transactions }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <TransactionTable transactions={transactions} onRowClick={setSelected} />
      <TransactionDetailDrawer
        transaction={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
