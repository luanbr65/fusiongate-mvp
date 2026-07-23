.hero {
  background: var(--fg-paper);
  border-bottom: 1px solid var(--fg-gray-200);
}

.inner {
  width: 100%;
  max-width: var(--fg-container);
  margin: 0 auto;
  padding: 90px 24px 96px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 64px;
  align-items: center;
}

.content {
  max-width: 600px;
}

.tag {
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--fg-brand);
  padding-left: 14px;
  position: relative;
  margin-bottom: 26px;
}

.tag::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--fg-brand);
}

.title {
  font-size: clamp(2.5rem, 5.4vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.02;
  color: var(--fg-ink);
  margin-bottom: 24px;
}

.subtitle {
  font-size: 1.16rem;
  line-height: 1.6;
  color: var(--fg-text-muted);
  max-width: 540px;
  margin-bottom: 36px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 48px;
}

.btnPrimary {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 15px 26px;
  border-radius: 11px;
  font-weight: 600;
  font-size: 1rem;
  color: var(--fg-white);
  background: var(--fg-brand);
  transition: background var(--fg-transition), transform var(--fg-transition);
}

.btnPrimary:hover {
  background: var(--fg-brand-dark);
  transform: translateY(-1px);
}

.btnPrimary svg {
  transition: transform var(--fg-transition);
}

.btnPrimary:hover svg {
  transform: translateX(3px);
}

.btnSecondary {
  display: inline-flex;
  align-items: center;
  padding: 15px 24px;
  border-radius: 11px;
  font-weight: 600;
  font-size: 1rem;
  color: var(--fg-ink);
  background: transparent;
  border: 1px solid var(--fg-gray-300);
  transition: border-color var(--fg-transition), background var(--fg-transition);
}

.btnSecondary:hover {
  border-color: var(--fg-ink);
  background: var(--fg-surface);
}

.stats {
  display: flex;
  gap: 0;
  border-top: 1px solid var(--fg-gray-200);
  padding-top: 26px;
}

.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 24px;
}

.stat + .stat {
  padding-left: 24px;
  border-left: 1px solid var(--fg-gray-200);
}

.stat strong {
  font-family: var(--fg-display);
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--fg-ink);
  font-variant-numeric: tabular-nums;
}

.stat span {
  font-size: 0.86rem;
  color: var(--fg-text-muted);
  margin-top: 4px;
}

/* ===== Product card (plano, sem glow) ===== */
.visual {
  position: relative;
}

.card {
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-200);
  border-radius: var(--fg-radius-lg);
  box-shadow: var(--fg-shadow-md);
  padding: 24px;
}

.cardTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--fg-gray-200);
}

.cardLabel {
  font-family: var(--fg-display);
  font-weight: 700;
  font-size: 0.98rem;
  color: var(--fg-ink);
}

.cardLive {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--fg-approve);
  padding: 4px 9px;
  border-radius: 999px;
  background: var(--fg-approve-soft);
}

.cardLive::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--fg-approve);
}

.signals {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.signals li {
  display: grid;
  grid-template-columns: 108px 1fr auto;
  align-items: center;
  gap: 12px;
}

.sigLabel {
  font-size: 0.86rem;
  color: var(--fg-text-muted);
}

.sigTrack {
  height: 8px;
  border-radius: 999px;
  background: var(--fg-gray-100);
  overflow: hidden;
}

.sigFill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--fg-brand);
}

.sigVal {
  font-family: var(--fg-font-mono);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--fg-ink);
}

.decision {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-approve-soft);
}

.decisionIcon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  color: var(--fg-white);
  background: var(--fg-approve);
  flex-shrink: 0;
}

.decisionText {
  flex: 1;
}

.decisionText strong {
  display: block;
  font-family: var(--fg-display);
  font-size: 1rem;
  color: var(--fg-ink);
}

.decisionText span {
  font-size: 0.8rem;
  color: var(--fg-text-muted);
}

.decisionTag {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: var(--fg-white);
  background: var(--fg-approve);
}

@media (max-width: 900px) {
  .inner {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 60px 24px 72px;
  }
  .content {
    max-width: 100%;
  }
  .visual {
    max-width: 460px;
  }
}

@media (max-width: 480px) {
  .actions {
    flex-direction: column;
    align-items: stretch;
  }
  .btnPrimary,
  .btnSecondary {
    justify-content: center;
  }
  .stat strong {
    font-size: 1.5rem;
  }
  .signals li {
    grid-template-columns: 92px 1fr auto;
  }
}
