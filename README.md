# FusionGate — MVP

Gateway de decisão antifraude em tempo real. **FusionGate** funde sinais de
identidade, comportamento e análise de rede em uma única decisão — aprovar,
revisar ou bloquear — em milissegundos.

Este repositório contém **a landing page + o MVP do produto** (dashboard e API
de decisão).

## Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Estilização:** CSS Modules (`.module.css`) — sem Tailwind, tudo modular
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Fonte:** Inter (via `next/font`)

## O que tem aqui

### 1. Landing page (`/`)
Marketing site do FusionGate: hero com card de "fusão de sinais", grid de
recursos (identidade, comportamento, grafos, compliance), seção "como funciona"
com terminal de exemplo, CTA final e footer.

### 2. Dashboard / App (`/dashboard`)
O MVP do produto, com shell de aplicação (sidebar + topbar):
- **Visão geral** — KPIs (transações, taxa de aprovação, fraudes bloqueadas,
  fila de revisão), barra de distribuição de decisões, transações recentes e um
  **simulador de decisão interativo**.
- **Transações** (`/dashboard/transactions`) — lista completa com busca e
  filtros por decisão e canal.

### 3. API de decisão (`/api/validate-transaction`)
Endpoint mock que recebe uma transação e devolve a decisão do motor:

```bash
curl -X POST http://localhost:3000/api/validate-transaction \
  -H 'content-type: application/json' \
  -d '{ "amount": 1499.9, "channel": "pix", "signals": { "graphRisk": 0.2 } }'

# → { "decision": "approve", "risk_score": 0.06, "reasons": [...], "latency_ms": 3 }
```

O simulador do dashboard consome exatamente esse endpoint.

## Estrutura

```
src/
├─ app/
│  ├─ layout.js · globals.css        # fonte + design tokens (índigo/ciano)
│  ├─ page.js                        # landing
│  ├─ api/validate-transaction/      # API mock de decisão
│  └─ dashboard/                     # app: layout + visão geral + transações
├─ components/
│  ├─ landing/                       # Navbar, Hero, Features, HowItWorks, ...
│  └─ app/                           # Sidebar, StatCard, RiskBadge, tabela, ...
└─ lib/
   ├─ scoring.js                     # motor de decisão (score ponderado)
   └─ mockData.js                    # gerador determinístico de transações
```

Cada componente tem seu próprio `.module.css` dedicado.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000  → landing
                 # http://localhost:3000/dashboard  → app
npm run build    # build de produção
```

Layout responsivo (mobile-first) em toda a landing e no dashboard.
