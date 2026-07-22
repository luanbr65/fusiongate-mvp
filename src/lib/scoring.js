// Motor de decisão mock do FusionGate.
// Combina sinais ponderados em um risk score [0..1]; quanto maior, mais arriscado.
// A decisão final ("approve" | "review" | "block") sai de faixas de score.

export const CHANNELS = ["pix", "card", "onboarding", "ted"];

const SIGNAL_WEIGHTS = {
  deviceReputation: 0.22,
  behavioralAnomaly: 0.24,
  graphRisk: 0.2,
  identityMatch: 0.18,
  velocity: 0.16,
};

function clamp01(n) {
  return Math.max(0, Math.min(1, n));
}

/**
 * Calcula o risco de uma transação a partir dos seus sinais.
 * @param {object} tx
 * @param {object} tx.signals - valores [0..1] por sinal (0 = seguro, 1 = arriscado)
 * @param {number} tx.amount
 * @param {string} tx.channel
 * @returns {{ riskScore: number, decision: string, reasons: string[] }}
 */
export function scoreTransaction(tx) {
  const signals = tx.signals || {};
  let score = 0;
  for (const [key, weight] of Object.entries(SIGNAL_WEIGHTS)) {
    score += (signals[key] ?? 0) * weight;
  }

  // Amplificador por valor alto (transações grandes elevam o risco marginal).
  if (tx.amount > 5000) score += 0.06;
  if (tx.amount > 20000) score += 0.08;

  score = clamp01(score);

  const reasons = [];
  if ((signals.deviceReputation ?? 0) > 0.6)
    reasons.push("Dispositivo com reputação negativa");
  if ((signals.behavioralAnomaly ?? 0) > 0.6)
    reasons.push("Comportamento fora do padrão do titular");
  if ((signals.graphRisk ?? 0) > 0.6)
    reasons.push("Conexão com conta de passagem na análise de grafos");
  if ((signals.identityMatch ?? 0) > 0.6)
    reasons.push("Baixa aderência na validação de identidade");
  if ((signals.velocity ?? 0) > 0.6)
    reasons.push("Velocidade de transações acima do esperado");
  if (reasons.length === 0) reasons.push("Sinais dentro do perfil esperado");

  let decision = "approve";
  if (score >= 0.7) decision = "block";
  else if (score >= 0.4) decision = "review";

  return { riskScore: Number(score.toFixed(3)), decision, reasons };
}

export const DECISION_META = {
  approve: { label: "Aprovada", tone: "approve" },
  review: { label: "Revisão", tone: "review" },
  block: { label: "Bloqueada", tone: "block" },
};
