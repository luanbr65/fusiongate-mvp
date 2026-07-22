"use client";

import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import TransactionTable from "@/components/app/TransactionTable/TransactionTable";
import TransactionDetailDrawer from "@/components/app/TransactionDetailDrawer/TransactionDetailDrawer";
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

const PAGE_SIZE = 10;

function compare(a, b, key) {
  const va = a[key];
  const vb = b[key];
  if (key === "createdAt") return new Date(va) - new Date(vb);
  if (typeof va === "number") return va - vb;
  return String(va).localeCompare(String(vb), "pt-BR");
}

export default function TransactionsView({ transactions }) {
  const [decision, setDecision] = useState("all");
  const [channel, setChannel] = useState("all");
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("createdAt");
  const [sortDir, setSortDir] = useState("desc");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    let list = transactions.filter((t) => {
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
    list = [...list].sort((a, b) => {
      const r = compare(a, b, sortKey);
      return sortDir === "asc" ? r : -r;
    });
    return list;
  }, [transactions, decision, channel, query, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
    setPage(1);
  }

  function resetFilter(setter, value) {
    setter(value);
    setPage(1);
  }

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
              onChange={(e) => resetFilter(setQuery, e.target.value)}
            />
          </div>

          <div className={styles.chips}>
            {DECISIONS.map((d) => (
              <button
                key={d.value}
                className={`${styles.chip} ${
                  decision === d.value ? styles.chipActive : ""
                }`}
                onClick={() => resetFilter(setDecision, d.value)}
              >
                {d.label}
              </button>
            ))}
          </div>

          <select
            className={styles.select}
            value={channel}
            onChange={(e) => resetFilter(setChannel, e.target.value)}
          >
            {CHANNELS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        {filtered.length > 0 ? (
          <>
            <TransactionTable
              transactions={pageItems}
              onRowClick={setSelected}
              sortKey={sortKey}
              sortDir={sortDir}
              onSort={handleSort}
            />

            <div className={styles.pagination}>
              <span className={styles.pageInfo}>
                Página {currentPage} de {totalPages}
              </span>
              <div className={styles.pageBtns}>
                <button
                  className={styles.pageBtn}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  aria-label="Página anterior"
                >
                  <ChevronLeft size={16} strokeWidth={2.4} />
                </button>
                <button
                  className={styles.pageBtn}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Próxima página"
                >
                  <ChevronRight size={16} strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            Nenhuma transação encontrada com os filtros atuais.
          </div>
        )}
      </div>

      <TransactionDetailDrawer
        transaction={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
