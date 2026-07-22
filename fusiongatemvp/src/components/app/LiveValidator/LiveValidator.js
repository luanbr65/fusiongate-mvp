"use client";

import { useState } from "react";
import { Play, Loader2, Zap } from "lucide-react";
import RiskBadge from "@/components/app/RiskBadge/RiskBadge";
import styles from "./LiveValidator.module.css";

const SIGNALS = [
  { key: "deviceReputation", label: "Reputação do dispositivo" },
  { key: "behavioralAnomaly", label: "Anomalia comportamental" },
  { key: "graphRisk", label: "Risco de rede (grafos)" },
  { key: "identityMatch", label: "Divergência de identidade" },
  { key: "velocity", label: "Velocidade de transações" },
];

const CHANNELS = [
  { value: "pix", label: "PIX" },
  { value: "card", label: "Cartão" },
  { value: "onboarding", label: "Onboarding" },
  { value: "ted", label: "TED" },
];

export default function LiveValidator() {
  const [amount, setAmount] = useState(1499.9);
  const [channel, setChannel] = useState("pix");
  const [signals, setSignals] = useState({
    deviceReputation: 0.2,
    behavioralAnomaly: 0.15,
    graphRisk: 0.1,
    identityMatch: 0.1,
    velocity: 0.2,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function updateSignal(key, value) {
    setSignals((s) => ({ ...s, [key]: Number(value) }));
  }

  async function validate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/validate-transaction", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ amount: Number(amount), channel, signals }),
      });
      if (!res.ok) throw new Error("Falha na validação");
      setResult(await res.json());
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.headIcon}>
          <Zap size={17} strokeWidth={2.3} />
        </span>
        <div>
          <h3 className={styles.title}>Simulador de decisão</h3>
          <p className={styles.subtitle}>
            Ajuste os sinais e chame o motor <code>/validate-transaction</code>.
          </p>
        </div>
      </div>

      <div className={styles.form}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>Valor (R$)</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={styles.input}
            />
          </label>
          <label className={styles.field}>
            <span>Canal</span>
            <select
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
              className={styles.input}
            >
              {CHANNELS.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.signals}>
          {SIGNALS.map(({ key, label }) => (
            <label key={key} className={styles.signal}>
              <span className={styles.signalHead}>
                {label}
                <strong>{signals[key].toFixed(2)}</strong>
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={signals[key]}
                onChange={(e) => updateSignal(key, e.target.value)}
                className={styles.range}
              />
            </label>
          ))}
        </div>

        <button onClick={validate} className={styles.button} disabled={loading}>
          {loading ? (
            <Loader2 size={18} strokeWidth={2.4} className={styles.spin} />
          ) : (
            <Play size={18} strokeWidth={2.4} />
          )}
          {loading ? "Analisando..." : "Validar transação"}
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {result && (
        <div className={styles.result}>
          <div className={styles.resultHead}>
            <RiskBadge decision={result.decision} />
            <span className={styles.resultScore}>
              score <strong>{result.risk_score.toFixed(3)}</strong>
            </span>
            <span className={styles.resultLatency}>{result.latency_ms}ms</span>
          </div>
          <ul className={styles.reasons}>
            {result.reasons.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
