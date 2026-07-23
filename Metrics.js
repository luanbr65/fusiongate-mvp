.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 32px;
  background: var(--fg-surface);
  border-bottom: 1px solid var(--fg-gray-200);
  position: sticky;
  top: 0;
  z-index: 10;
}

.crumb {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--fg-accent-dark);
}

.pageTitle {
  font-size: 1.4rem;
  color: var(--fg-text);
  margin-top: 2px;
}

.topActions {
  display: flex;
  gap: 10px;
}

.btnReset {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--fg-text-muted);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-300);
  transition: all var(--fg-transition);
}

.btnReset:hover {
  color: var(--fg-text);
  border-color: var(--fg-gray-400);
}

.btnSave {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--fg-white);
  border: none;
  background: linear-gradient(135deg, var(--fg-indigo) 0%, var(--fg-accent-dark) 100%);
  box-shadow: var(--fg-shadow-accent);
  transition: all var(--fg-transition);
}

.btnSave[data-saved="true"] {
  background: var(--fg-approve);
  box-shadow: none;
}

.body {
  padding: 24px 32px 48px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  align-items: start;
}

.colMain {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
}

.card {
  padding: 24px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-200);
  box-shadow: var(--fg-shadow-sm);
}

.cardTitleRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.cardTitle {
  font-size: 1.08rem;
  color: var(--fg-text);
}

.cardSub {
  font-size: 0.9rem;
  color: var(--fg-text-muted);
  margin: 6px 0 20px;
}

.sumBadge {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 11px;
  border-radius: 999px;
  color: var(--fg-accent-dark);
  background: var(--fg-accent-soft);
}

.sumBadge[data-warn="true"] {
  color: var(--fg-review);
  background: var(--fg-review-soft);
}

/* Band preview */
.bandPreview {
  display: flex;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;
  font-size: 0.82rem;
  font-weight: 600;
}

.bandApprove,
.bandReview,
.bandBlock {
  display: grid;
  place-items: center;
  color: var(--fg-white);
  min-width: 0;
  white-space: nowrap;
  transition: flex 0.3s ease;
}

.bandApprove {
  background: var(--fg-approve);
}
.bandReview {
  background: var(--fg-review);
}
.bandBlock {
  background: var(--fg-block);
}

.thresholds {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.threshold,
.weight {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.thHead,
.wHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.88rem;
  color: var(--fg-text-muted);
}

.thHead strong,
.wHead strong {
  font-family: var(--fg-font-mono);
  color: var(--fg-text);
}

.weights {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: var(--fg-gray-200);
  cursor: pointer;
}

.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--fg-accent);
  border: 2px solid var(--fg-white);
  box-shadow: var(--fg-shadow-sm);
  cursor: pointer;
}

.range::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--fg-accent);
  border: 2px solid var(--fg-white);
  cursor: pointer;
}

/* Channels */
.channels {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.channel {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--fg-text-muted);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-300);
  transition: all var(--fg-transition);
}

.channelOn {
  color: var(--fg-accent-dark);
  border-color: var(--fg-accent);
  background: var(--fg-accent-soft);
}

.switch {
  position: relative;
  width: 34px;
  height: 18px;
  border-radius: 999px;
  background: var(--fg-gray-300);
  transition: background var(--fg-transition);
}

.switch::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--fg-white);
  transition: transform var(--fg-transition);
}

.channelOn .switch {
  background: var(--fg-accent);
}

.channelOn .switch::after {
  transform: translateX(16px);
}

/* Preview */
.colSide {
  position: sticky;
  top: 96px;
}

.previewCard {
  padding: 24px;
  border-radius: var(--fg-radius-md);
  text-align: center;
  color: var(--fg-text-invert);
  background: radial-gradient(
      130% 120% at 50% 0%,
      var(--fg-primary-700) 0%,
      var(--fg-primary-900) 100%
    );
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.previewTitle {
  font-size: 1.05rem;
  color: var(--fg-white);
}

.previewSub {
  font-size: 0.84rem;
  color: var(--fg-gray-400);
  margin: 6px 0 22px;
}

.previewScore {
  font-size: 3rem;
  font-weight: 800;
  font-family: var(--fg-font-mono);
  letter-spacing: -0.03em;
  line-height: 1;
}

.previewScore[data-tone="approve"] {
  color: var(--fg-approve);
}
.previewScore[data-tone="review"] {
  color: var(--fg-review);
}
.previewScore[data-tone="block"] {
  color: var(--fg-block);
}

.previewBadge {
  margin: 16px 0 22px;
}

.previewSignals {
  list-style: none;
  margin: 0;
  padding: 18px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

.previewSignals li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.84rem;
  color: var(--fg-gray-300);
}

.previewSignals strong {
  font-family: var(--fg-font-mono);
  color: var(--fg-white);
}

@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .colSide {
    position: static;
  }
}

@media (max-width: 560px) {
  .topbar {
    padding: 18px 20px;
    flex-wrap: wrap;
  }
  .body {
    padding: 20px 20px 40px;
  }
  .thresholds {
    grid-template-columns: 1fr;
  }
}
