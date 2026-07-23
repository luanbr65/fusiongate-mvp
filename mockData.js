.section {
  padding: 88px 0;
  background: var(--fg-surface);
}

.inner {
  width: 100%;
  max-width: var(--fg-container);
  margin: 0 auto;
  padding: 0 24px;
}

.card {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 64px 32px;
  border-radius: var(--fg-radius-lg);
  background: var(--fg-brand);
  color: var(--fg-white);
}

.glow {
  display: none;
}

.title {
  font-size: clamp(1.9rem, 3.8vw, 2.8rem);
  color: var(--fg-white);
  max-width: 620px;
  margin: 0 auto 16px;
}

.text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.86);
  max-width: 560px;
  margin: 0 auto 32px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.btnPrimary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 11px;
  font-weight: 600;
  font-size: 1.02rem;
  color: var(--fg-ink);
  background: var(--fg-white);
  transition: transform var(--fg-transition);
}

.btnPrimary:hover {
  transform: translateY(-2px);
}

.btnPrimary svg {
  transition: transform var(--fg-transition);
}

.btnPrimary:hover svg {
  transform: translateX(3px);
}

.btnGhost {
  display: inline-flex;
  align-items: center;
  padding: 15px 26px;
  border-radius: 11px;
  font-weight: 600;
  font-size: 1.02rem;
  color: var(--fg-white);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all var(--fg-transition);
}

.btnGhost:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: var(--fg-white);
}

@media (max-width: 560px) {
  .card {
    padding: 48px 22px;
  }
  .actions {
    flex-direction: column;
  }
  .btnPrimary,
  .btnGhost {
    justify-content: center;
  }
}
