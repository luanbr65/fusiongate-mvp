import {
  Activity,
  CheckCircle2,
  ShieldX,
  Timer,
} from "lucide-react";
import Link from "next/link";
import { generateTransactions, summarize } from "@/lib/mockData";
import StatCard from "@/components/app/StatCard/StatCard";
import TransactionTable from "@/components/app/TransactionTable/TransactionTable";
import LiveValidator from "@/components/app/LiveValidator/LiveValidator";
import styles from "./dashboard.module.css";

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function DashboardOverview() {
  const transactions = generateTransactions(28, 42);
  const s = summarize(transactions);

  const dist = [
    { key: "approve", label: "Aprovadas", value: s.approved, tone: "approve" },
    { key: "review", label: "Revisão", value: s.review, tone: "review" },
    { key: "block", label: "Bloqueadas", value: s.blocked, tone: "block" },
  ];

  return (
    <>
      <header className={styles.topbar}>
        <div>
          <span className={styles.crumb}>Dashboard</span>
          <h1 className={styles.pageTitle}>Visão geral</h1>
        </div>
        <div className={styles.live}>
          <span className={styles.liveDot} />
          Motor operante · v1
        </div>
      </header>

      <div className={styles.body}>
        <section className={styles.stats}>
          <StatCard
            icon={Activity}
            label="Transações (24h)"
            value={s.total}
            hint={`${s.avgLatency}ms de latência média`}
            tone="accent"
          />
          <StatCard
            icon={CheckCircle2}
            label="Taxa de aprovação"
            value={`${s.approvalRate}%`}
            hint={`${s.approved} aprovadas automaticamente`}
            tone="approve"
          />
          <StatCard
            icon={ShieldX}
            label="Fraudes bloqueadas"
            value={s.blocked}
            hint={`${formatBRL(s.blockedVolume)} em risco contido`}
            tone="block"
          />
          <StatCard
            icon={Timer}
            label="Em revisão manual"
            value={s.review}
            hint="Aguardando analista"
            tone="review"
          />
        </section>

        <div className={styles.grid}>
          <section className={styles.card}>
            <div className={styles.cardHead}>
              <h2>Distribuição de decisões</h2>
              <span className={styles.cardHint}>{s.total} transações</span>
            </div>
            <div className={styles.distBar}>
              {dist.map((d) => {
                const pct = s.total ? (d.value / s.total) * 100 : 0;
                return (
                  pct > 0 && (
                    <span
                      key={d.key}
                      className={styles.distSeg}
                      data-tone={d.tone}
                      style={{ width: `${pct}%` }}
                      title={`${d.label}: ${d.value}`}
                    />
                  )
                );
              })}
            </div>
            <ul className={styles.legend}>
              {dist.map((d) => (
                <li key={d.key}>
                  <span className={styles.legendDot} data-tone={d.tone} />
                  {d.label}
                  <strong>{d.value}</strong>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.validatorCol}>
            <LiveValidator />
          </section>
        </div>

        <section className={styles.card}>
          <div className={styles.cardHead}>
            <h2>Transações recentes</h2>
            <Link href="/dashboard/transactions" className={styles.seeAll}>
              Ver todas →
            </Link>
          </div>
          <TransactionTable transactions={transactions.slice(0, 8)} />
        </section>
      </div>
    </>
  );
}
