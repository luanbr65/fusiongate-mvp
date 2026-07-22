import { CHANNELS, scoreTransaction } from "./scoring";

const FIRST = [
  "Ana",
  "Bruno",
  "Carla",
  "Diego",
  "Elisa",
  "Felipe",
  "Gabriela",
  "Henrique",
  "Isabela",
  "João",
  "Larissa",
  "Marcos",
  "Natália",
  "Otávio",
  "Paula",
  "Rafael",
];
const LAST = [
  "Almeida",
  "Barbosa",
  "Costa",
  "Dias",
  "Esteves",
  "Ferreira",
  "Gomes",
  "Lima",
  "Moraes",
  "Nunes",
  "Oliveira",
  "Pereira",
  "Ribeiro",
  "Souza",
];

// PRNG determinístico (mulberry32) para dados estáveis entre server e client.
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rand, arr) {
  return arr[Math.floor(rand() * arr.length)];
}

/**
 * Gera uma lista determinística de transações já pontuadas.
 * @param {number} count
 * @param {number} seed
 */
export function generateTransactions(count = 24, seed = 42) {
  const rand = mulberry32(seed);
  const txs = [];

  for (let i = 0; i < count; i++) {
    const channel = pick(rand, CHANNELS);

    // Perfis de risco: maioria legítima, alguns suspeitos, poucos claramente fraudulentos.
    const bucket = rand();
    const base =
      bucket > 0.82 ? 0.55 + rand() * 0.4 : bucket > 0.6 ? 0.25 + rand() * 0.35 : rand() * 0.3;

    const jitter = () => clampSignal(base + (rand() - 0.5) * 0.3);
    const signals = {
      deviceReputation: jitter(),
      behavioralAnomaly: jitter(),
      graphRisk: jitter(),
      identityMatch: jitter(),
      velocity: jitter(),
    };

    const amount = Number((20 + rand() * (channel === "ted" ? 40000 : 8000)).toFixed(2));
    const minutesAgo = Math.floor(rand() * 720);

    const tx = {
      id: "txn_" + (100000 + Math.floor(rand() * 899999)).toString(16),
      customer: `${pick(rand, FIRST)} ${pick(rand, LAST)}`,
      channel,
      amount,
      signals,
      createdAt: new Date(Date.now() - minutesAgo * 60000).toISOString(),
      latencyMs: 90 + Math.floor(rand() * 130),
    };

    txs.push({ ...tx, ...scoreTransaction(tx) });
  }

  return txs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function clampSignal(n) {
  return Math.max(0, Math.min(1, Number(n.toFixed(2))));
}

/** Agrega KPIs a partir de uma lista de transações pontuadas. */
export function summarize(txs) {
  const total = txs.length;
  const approved = txs.filter((t) => t.decision === "approve").length;
  const review = txs.filter((t) => t.decision === "review").length;
  const blocked = txs.filter((t) => t.decision === "block").length;
  const avgLatency = Math.round(
    txs.reduce((s, t) => s + t.latencyMs, 0) / (total || 1)
  );
  const blockedVolume = txs
    .filter((t) => t.decision === "block")
    .reduce((s, t) => s + t.amount, 0);

  return {
    total,
    approved,
    review,
    blocked,
    approvalRate: total ? Math.round((approved / total) * 100) : 0,
    avgLatency,
    blockedVolume,
  };
}
