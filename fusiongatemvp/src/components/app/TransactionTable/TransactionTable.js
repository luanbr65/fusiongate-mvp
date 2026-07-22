import RiskBadge from "@/components/app/RiskBadge/RiskBadge";
import styles from "./TransactionTable.module.css";

const CHANNEL_LABEL = {
  pix: "PIX",
  card: "Cartão",
  onboarding: "Onboarding",
  ted: "TED",
};

function formatBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function TransactionTable({ transactions }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Transação</th>
            <th>Cliente</th>
            <th>Canal</th>
            <th className={styles.right}>Valor</th>
            <th className={styles.center}>Risk score</th>
            <th className={styles.center}>Decisão</th>
            <th className={styles.right}>Latência</th>
            <th className={styles.right}>Horário</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
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
