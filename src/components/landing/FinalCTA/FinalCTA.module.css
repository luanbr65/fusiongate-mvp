.section {
  padding: 90px 0;
  background: var(--fg-surface-alt);
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
  background: radial-gradient(
      120% 160% at 50% 0%,
      var(--fg-primary-700) 0%,
      var(--fg-primary-800) 55%,
      var(--fg-primary-900) 100%
    );
  border: 1px solid rgba(6, 182, 212, 0.22);
}

.glow {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 620px;
  height: 420px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.24) 0%, transparent 66%);
  filter: blur(12px);
  pointer-events: none;
}

.title {
  position: relative;
  font-size: clamp(1.7rem, 3.6vw, 2.6rem);
  color: var(--fg-white);
  max-width: 640px;
  margin: 0 auto 18px;
}

.text {
  position: relative;
  font-size: 1.1rem;
  color: var(--fg-gray-300);
  max-width: 560px;
  margin: 0 auto 32px;
}

.actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}

.btnPrimary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 13px;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--fg-white);
  background: linear-gradient(135deg, var(--fg-accent) 0%, var(--fg-accent-dark) 100%);
  box-shadow: var(--fg-shadow-accent);
  transition: transform var(--fg-transition), box-shadow var(--fg-transition);
}

.btnPrimary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 46px rgba(6, 182, 212, 0.45);
}

.btnPrimary svg {
  transition: transform var(--fg-transition);
}

.btnPrimary:hover svg {
  transform: translateX(4px);
}

.btnGhost {
  display: inline-flex;
  align-items: center;
  padding: 16px 28px;
  border-radius: 13px;
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--fg-white);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all var(--fg-transition);
}

.btnGhost:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.32);
  transform: translateY(-3px);
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
