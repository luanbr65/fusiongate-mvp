import { generateTransactions } from "@/lib/mockData";
import TransactionsView from "@/components/app/TransactionsView/TransactionsView";

export const metadata = {
  title: "FusionGate · Transações",
};

export default function TransactionsPage() {
  const transactions = generateTransactions(48, 7);
  return <TransactionsView transactions={transactions} />;
}
