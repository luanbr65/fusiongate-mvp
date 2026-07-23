.overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(7, 12, 23, 0.55);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: flex-end;
  animation: fadeIn 0.2s ease both;
}

.drawer {
  width: min(460px, 100%);
  height: 100%;
  background: var(--fg-surface);
  box-shadow: var(--fg-shadow-lg);
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 24px;
  border-bottom: 1px solid var(--fg-gray-200);
}

.txId {
  font-family: var(--fg-font-mono);
  font-size: 0.8rem;
  color: var(--fg-gray-500);
}

.customer {
  font-size: 1.25rem;
  color: var(--fg-text);
  margin-top: 3px;
}

.close {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--fg-gray-200);
  background: var(--fg-surface);
  color: var(--fg-gray-600);
  flex-shrink: 0;
  transition: all var(--fg-transition);
}

.close:hover {
  background: var(--fg-gray-100);
  color: var(--fg-text);
}

.body {
  flex: 1;
  overflow-y: auto;
  padding: 22px 24px 40px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

/* Score */
.scoreSection {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-surface-alt);
  border: 1px solid var(--fg-gray-200);
}

.scoreBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
  border-right: 1px solid var(--fg-gray-200);
}

.scoreValue {
  font-size: 2.2rem;
  font-weight: 800;
  font-family: var(--fg-font-mono);
  letter-spacing: -0.02em;
  line-height: 1;
}

.scoreValue[data-tone="approve"] {
  color: var(--fg-approve);
}
.scoreValue[data-tone="review"] {
  color: var(--fg-review);
}
.scoreValue[data-tone="block"] {
  color: var(--fg-block);
}

.scoreLabel {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--fg-gray-500);
  margin-top: 6px;
}

.scoreMeta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.decidedIn {
  font-size: 0.84rem;
  color: var(--fg-text-muted);
}

/* Facts */
.facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.facts > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.factLabel {
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fg-gray-500);
}

.factValue {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--fg-text);
}

/* Blocks */
.blockTitle {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--fg-gray-500);
  margin-bottom: 16px;
}

/* Signals */
.signals {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.signal {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px 12px;
}

.signalIcon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  grid-row: span 2;
}

.signalIcon[data-tone="approve"] {
  color: var(--fg-approve);
  background: var(--fg-approve-soft);
}
.signalIcon[data-tone="review"] {
  color: var(--fg-review);
  background: var(--fg-review-soft);
}
.signalIcon[data-tone="block"] {
  color: var(--fg-block);
  background: var(--fg-block-soft);
}

.signalLabel {
  font-size: 0.88rem;
  color: var(--fg-text);
}

.signalVal {
  font-family: var(--fg-font-mono);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--fg-text-muted);
  grid-row: span 2;
}

.signalTrack {
  grid-column: 2;
  height: 6px;
  border-radius: 999px;
  background: var(--fg-gray-100);
  overflow: hidden;
}

.signalFill {
  display: block;
  height: 100%;
  border-radius: 999px;
}

.signalFill[data-tone="approve"] {
  background: var(--fg-approve);
}
.signalFill[data-tone="review"] {
  background: var(--fg-review);
}
.signalFill[data-tone="block"] {
  background: var(--fg-block);
}

/* Graph */
.graphWrap {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 12px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-primary-900);
}

.graph {
  width: 200px;
  height: 150px;
  flex-shrink: 0;
}

.edge {
  stroke: rgba(148, 163, 184, 0.35);
  stroke-width: 1.5;
}

.edgeFlagged {
  stroke: rgba(244, 63, 94, 0.55);
  stroke-width: 2;
}

.node {
  fill: var(--fg-accent);
}

.nodeFlagged {
  fill: var(--fg-block);
}

.nodeCenter {
  fill: var(--fg-white);
  stroke: var(--fg-accent-light);
  stroke-width: 3;
}

.graphLegend {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.8rem;
  color: var(--fg-gray-300);
}

.graphLegend li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dotCenter,
.dotOk,
.dotFlag {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dotCenter {
  background: var(--fg-white);
  box-shadow: 0 0 0 2px var(--fg-accent-light);
}
.dotOk {
  background: var(--fg-accent);
}
.dotFlag {
  background: var(--fg-block);
}

/* Reasons */
.reasons {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--fg-text-muted);
}

/* Timeline */
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tlItem {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  padding: 8px 0;
}

.tlIcon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  color: var(--fg-accent-dark);
  background: var(--fg-accent-soft);
  flex-shrink: 0;
}

.tlLabel {
  font-size: 0.9rem;
  color: var(--fg-text);
  flex: 1;
}

.tlTime {
  font-family: var(--fg-font-mono);
  font-size: 0.8rem;
  color: var(--fg-gray-500);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(30px);
    opacity: 0.4;
  }
}

@media (max-width: 520px) {
  .facts {
    grid-template-columns: 1fr 1fr;
  }
  .graphWrap {
    flex-direction: column;
  }
}
