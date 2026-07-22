"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import TransactionTable from "@/components/app/TransactionTable/TransactionTable";
import styles from "./TransactionsView.module.css";

const DECISIONS = [
  { value: "all", label: "Todas" },
  { value: "approve", label: "Aprovadas" },
  { value: "review", label: "Revisão" },
  { value: "block", label: "Bloqueadas" },
];

const CHANNELS = [
  { value: "all", label: "Todos os canais" },
  { value: "pix", label: "PIX" },
  { value: "card", label: "Cartão" },
  { value: "onboarding", label: "Onboarding" },
  { value: "ted", label: "TED" },
];

export default function TransactionsView({ transactions }) {
  const [decision, setDecision] = useState("all");
  const [channel, setChannel] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return transactions.filter((t) => {
      if (decision !== "all" && t.decision !== decision) return false;
      if (channel !== "all" && t.channel !== channel) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !t.customer.toLowerCase().includes(q) &&
          !t.id.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [transactions, decision, channel, query]);

  return (
    <>
      <header className={styles.topbar}>
        <div>
          <span className={styles.crumb}>Dashboard</span>
          <h1 className={styles.pageTitle}>Transações</h1>
        </div>
        <span className={styles.count}>
          {filtered.length} de {transactions.length}
        </span>
      </header>

      <div className={styles.body}>
        <div className={styles.filters}>
          <div className={styles.search}>
            <Search size={16} strokeWidth={2.2} />
            <input
              type="text"
              placeholder="Buscar por cliente ou ID..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className={styles.chips}>
            {DECISIONS.map((d) => (
              <button
                key={d.value}
                className={`${styles.chip} ${
                  decision === d.value ? styles.chipActive : ""
                }`}
                onClick={() => setDecision(d.value)}
              >
                {d.label}
              </button>
            ))}
          </div>

          <select
            className={styles.select}
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
          >
            {CHANNELS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        {filtered.length > 0 ? (
          <TransactionTable transactions={filtered} />
        ) : (
          <div className={styles.empty}>
            Nenhuma transação encontrada com os filtros atuais.
          </div>
        )}
      </div>
    </>
  );
}
