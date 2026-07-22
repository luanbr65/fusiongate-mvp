"use client";

import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import RiskBadge from "@/components/app/RiskBadge/RiskBadge";
import styles from "./TransactionTable.module.css";

const CHANNEL_LABEL = {
  pix: "PIX",
  card: "Cartão",
  onboarding: "Onboarding",
  ted: "TED",
};

const COLUMNS = [
  { key: "id", label: "Transação", sortable: true, align: "left" },
  { key: "customer", label: "Cliente", sortable: true, align: "left" },
  { key: "channel", label: "Canal", sortable: true, align: "left" },
  { key: "amount", label: "Valor", sortable: true, align: "right" },
  { key: "riskScore", label: "Risk score", sortable: true, align: "center" },
  { key: "decision", label: "Decisão", sortable: false, align: "center" },
  { key: "latencyMs", label: "Latência", sortable: true, align: "right" },
  { key: "createdAt", label: "Horário", sortable: true, align: "right" },
];

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function TransactionTable({
  transactions,
  onRowClick,
  sortKey,
  sortDir,
  onSort,
}) {
  const clickable = typeof onRowClick === "function";
  const sortable = typeof onSort === "function";

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {COLUMNS.map((col) => {
              const active = sortKey === col.key;
              const canSort = sortable && col.sortable;
              return (
                <th
                  key={col.key}
                  className={`${styles[col.align]} ${canSort ? styles.sortable : ""}`}
                  onClick={canSort ? () => onSort(col.key) : undefined}
                  aria-sort={
                    active ? (sortDir === "asc" ? "ascending" : "descending") : undefined
                  }
                >
                  <span className={styles.thInner}>
                    {col.label}
                    {canSort &&
                      (active ? (
                        sortDir === "asc" ? (
                          <ChevronUp size={13} strokeWidth={2.6} />
                        ) : (
                          <ChevronDown size={13} strokeWidth={2.6} />
                        )
                      ) : (
                        <ChevronsUpDown size={13} strokeWidth={2} className={styles.sortIdle} />
                      ))}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr
              key={t.id}
              className={clickable ? styles.clickable : ""}
              onClick={clickable ? () => onRowClick(t) : undefined}
              tabIndex={clickable ? 0 : undefined}
              onKeyDown={
                clickable
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onRowClick(t);
                      }
                    }
                  : undefined
              }
            >
              <td>
                <span className={styles.txId}>{t.id}</span>
              </td>
              <td>{t.customer}</td>
              <td>
                <span className={styles.channel}>{CHANNEL_LABEL[t.channel]}</span>
              </td>
              <td className={styles.right}>{formatBRL(t.amount)}</td>
              <td className={styles.center}>
                <span className={styles.score} data-tone={t.decision}>
                  {t.riskScore.toFixed(2)}
                </span>
              </td>
              <td className={styles.center}>
                <RiskBadge decision={t.decision} size="sm" />
              </td>
              <td className={styles.right}>
                <span className={styles.latency}>{t.latencyMs}ms</span>
              </td>
              <td className={styles.right}>
                <span className={styles.time}>{formatTime(t.createdAt)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
