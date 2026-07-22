"use client";

import { useEffect } from "react";
import {
  X,
  Fingerprint,
  Activity,
  Share2,
  UserCheck,
  Gauge,
  Inbox,
  GitMerge,
  ShieldCheck,
} from "lucide-react";
import RiskBadge from "@/components/app/RiskBadge/RiskBadge";
import styles from "./TransactionDetailDrawer.module.css";

const SIGNAL_META = [
  { key: "deviceReputation", label: "Reputação do dispositivo", icon: Fingerprint },
  { key: "behavioralAnomaly", label: "Anomalia comportamental", icon: Activity },
  { key: "graphRisk", label: "Risco de rede (grafos)", icon: Share2 },
  { key: "identityMatch", label: "Divergência de identidade", icon: UserCheck },
  { key: "velocity", label: "Velocidade de transações", icon: Gauge },
];

const CHANNEL_LABEL = {
  pix: "PIX",
  card: "Cartão",
  onboarding: "Onboarding",
  ted: "TED",
};

function formatBRL(v) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatDateTime(iso) {
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function signalTone(v) {
  if (v >= 0.6) return "block";
  if (v >= 0.4) return "review";
  return "approve";
}

// Mini-grafo determinístico: conta central + satélites, alguns sinalizados por graphRisk.
function NetworkGraph({ tx }) {
  const risky = Math.round((tx.signals.graphRisk ?? 0) * 5);
  const n = 6;
  const cx = 130;
  const cy = 95;
  const r = 66;
  const nodes = Array.from({ length: n }, (_, i) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      flagged: i < risky,
    };
  });

  return (
    <svg viewBox="0 0 260 190" className={styles.graph} role="img" aria-label="Grafo de conexões da conta">
      {nodes.map((nd, i) => (
        <line
          key={`e${i}`}
          x1={cx}
          y1={cy}
          x2={nd.x}
          y2={nd.y}
          className={nd.flagged ? styles.edgeFlagged : styles.edge}
        />
      ))}
      {nodes.map((nd, i) => (
        <circle
          key={`n${i}`}
          cx={nd.x}
          cy={nd.y}
          r={9}
          className={nd.flagged ? styles.nodeFlagged : styles.node}
        />
      ))}
      <circle cx={cx} cy={cy} r={14} className={styles.nodeCenter} />
    </svg>
  );
}

export default function TransactionDetailDrawer({ transaction, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!transaction) return null;
  const tx = transaction;

  const timeline = [
    { icon: Inbox, label: "Transação recebida", time: formatDateTime(tx.createdAt) },
    { icon: GitMerge, label: "Sinais fundidos", time: `+${Math.round(tx.latencyMs * 0.7)}ms` },
    {
      icon: ShieldCheck,
      label: "Decisão emitida",
      time: `+${tx.latencyMs}ms`,
    },
  ];

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <aside className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <div>
            <span className={styles.txId}>{tx.id}</span>
            <h2 className={styles.customer}>{tx.customer}</h2>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Fechar">
            <X size={20} strokeWidth={2.3} />
          </button>
        </header>

        <div className={styles.body}>
          <section className={styles.scoreSection}>
            <div className={styles.scoreBox}>
              <span className={styles.scoreValue} data-tone={tx.decision}>
                {tx.riskScore.toFixed(2)}
              </span>
              <span className={styles.scoreLabel}>Risk score</span>
            </div>
            <div className={styles.scoreMeta}>
              <RiskBadge decision={tx.decision} />
              <span className={styles.decidedIn}>Decidido em {tx.latencyMs}ms</span>
            </div>
          </section>

          <section className={styles.facts}>
            <div>
              <span className={styles.factLabel}>Valor</span>
              <span className={styles.factValue}>{formatBRL(tx.amount)}</span>
            </div>
            <div>
              <span className={styles.factLabel}>Canal</span>
              <span className={styles.factValue}>{CHANNEL_LABEL[tx.channel]}</span>
            </div>
            <div>
              <span className={styles.factLabel}>Data/hora</span>
              <span className={styles.factValue}>{formatDateTime(tx.createdAt)}</span>
            </div>
          </section>

          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Sinais avaliados</h3>
            <ul className={styles.signals}>
              {SIGNAL_META.map(({ key, label, icon: Icon }) => {
                const v = tx.signals[key] ?? 0;
                const tone = signalTone(v);
                return (
                  <li key={key} className={styles.signal}>
                    <span className={styles.signalIcon} data-tone={tone}>
                      <Icon size={15} strokeWidth={2.2} />
                    </span>
                    <span className={styles.signalLabel}>{label}</span>
                    <span className={styles.signalTrack}>
                      <span
                        className={styles.signalFill}
                        data-tone={tone}
                        style={{ width: `${Math.round(v * 100)}%` }}
                      />
                    </span>
                    <span className={styles.signalVal}>{v.toFixed(2)}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Análise de rede</h3>
            <div className={styles.graphWrap}>
              <NetworkGraph tx={tx} />
              <ul className={styles.graphLegend}>
                <li>
                  <span className={styles.dotCenter} /> Conta analisada
                </li>
                <li>
                  <span className={styles.dotOk} /> Conexão neutra
                </li>
                <li>
                  <span className={styles.dotFlag} /> Conexão sinalizada
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Razões da decisão</h3>
            <ul className={styles.reasons}>
              {tx.reasons.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Timeline</h3>
            <ol className={styles.timeline}>
              {timeline.map(({ icon: Icon, label, time }, i) => (
                <li key={i} className={styles.tlItem}>
                  <span className={styles.tlIcon}>
                    <Icon size={15} strokeWidth={2.2} />
                  </span>
                  <span className={styles.tlLabel}>{label}</span>
                  <span className={styles.tlTime}>{time}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </aside>
    </div>
  );
}
