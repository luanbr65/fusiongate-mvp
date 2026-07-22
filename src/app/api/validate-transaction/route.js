import { NextResponse } from "next/server";
import { scoreTransaction } from "@/lib/scoring";

// POST /api/validate-transaction
// Recebe uma transação com sinais e devolve a decisão do gateway.
export async function POST(request) {
  const start = Date.now();

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_json", message: "Corpo da requisição inválido." },
      { status: 400 }
    );
  }

  const { amount, channel, signals } = body || {};

  if (typeof amount !== "number" || !channel) {
    return NextResponse.json(
      {
        error: "missing_fields",
        message: "Campos obrigatórios: amount (number) e channel (string).",
      },
      { status: 422 }
    );
  }

  const result = scoreTransaction({ amount, channel, signals: signals || {} });

  return NextResponse.json({
    transaction_id: body.transaction_id ?? "txn_" + Date.now().toString(16),
    decision: result.decision,
    risk_score: result.riskScore,
    reasons: result.reasons,
    latency_ms: Date.now() - start,
    engine: "fusiongate-decision-v1",
  });
}

export async function GET() {
  return NextResponse.json({
    service: "fusiongate-decision",
    status: "ok",
    usage: "POST { amount, channel, signals } → { decision, risk_score, reasons }",
  });
}
