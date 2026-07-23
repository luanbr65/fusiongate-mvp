.section {
  position: relative;
  overflow: hidden;
  padding: 84px 0;
  background: var(--fg-ink);
  color: var(--fg-text-invert);
}

.grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(90% 90% at 50% 50%, #000 30%, transparent 80%);
  -webkit-mask-image: radial-gradient(90% 90% at 50% 50%, #000 30%, transparent 80%);
  pointer-events: none;
  opacity: 0.6;
}

.inner {
  position: relative;
  width: 100%;
  max-width: var(--fg-container);
  margin: 0 auto;
  padding: 0 24px;
}

.head {
  max-width: 620px;
  margin: 0 0 44px;
}

.eyebrow {
  display: inline-block;
  font-family: var(--fg-display);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--fg-brand-light);
  margin-bottom: 14px;
}

.title {
  font-size: clamp(1.8rem, 3.4vw, 2.5rem);
  color: var(--fg-white);
}

.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.block {
  display: flex;
  flex-direction: column;
  padding: 32px 28px 8px 0;
}

.block + .block {
  padding-left: 28px;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.icon {
  display: inline-flex;
  color: var(--fg-brand-light);
  margin-bottom: 18px;
}

.value {
  font-family: var(--fg-display);
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--fg-white);
  margin-bottom: 12px;
  font-variant-numeric: tabular-nums;
}

.label {
  font-size: 0.92rem;
  color: var(--fg-gray-400);
  max-width: 200px;
}

.note {
  margin-top: 28px;
  font-size: 0.8rem;
  color: var(--fg-gray-600);
}

@media (max-width: 860px) {
  .row {
    grid-template-columns: repeat(2, 1fr);
  }
  .block:nth-child(3) {
    border-left: none;
    padding-left: 0;
  }
  .block:nth-child(1),
  .block:nth-child(2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
  .section {
    padding: 68px 0;
  }
}

@media (max-width: 460px) {
  .row {
    grid-template-columns: 1fr;
  }
  .block + .block {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
}
