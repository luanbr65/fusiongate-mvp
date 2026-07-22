.hero {
  position: relative;
  overflow: hidden;
  color: var(--fg-text-invert);
  background: radial-gradient(
      120% 120% at 80% 0%,
      var(--fg-primary-700) 0%,
      var(--fg-primary) 45%,
      var(--fg-primary-900) 100%
    );
}

.gridBg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.045) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: radial-gradient(
    120% 90% at 60% 0%,
    #000 30%,
    transparent 80%
  );
  -webkit-mask-image: radial-gradient(
    120% 90% at 60% 0%,
    #000 30%,
    transparent 80%
  );
  animation: gridDrift 24s linear infinite;
  pointer-events: none;
}

.glow {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, transparent 65%);
  filter: blur(20px);
  pointer-events: none;
  animation: floatGlow 12s ease-in-out infinite;
}

.glow2 {
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, transparent 65%);
  filter: blur(24px);
  pointer-events: none;
  animation: floatGlow 15s ease-in-out infinite reverse;
}

@keyframes gridDrift {
  from {
    background-position: 0 0, 0 0;
  }
  to {
    background-position: 46px 46px, 46px 46px;
  }
}

@keyframes floatGlow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.9;
  }
  50% {
    transform: translate(-24px, 22px) scale(1.08);
    opacity: 1;
  }
}

.inner {
  position: relative;
  width: 100%;
  max-width: var(--fg-container);
  margin: 0 auto;
  padding: 84px 24px 100px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}

.content {
  max-width: 620px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--fg-accent-light);
  background: var(--fg-accent-soft);
  border: 1px solid rgba(34, 211, 238, 0.3);
  margin-bottom: 24px;
}

.title {
  font-size: clamp(2.4rem, 5vw, 3.9rem);
  font-weight: 800;
  line-height: 1.08;
  color: var(--fg-white);
  margin-bottom: 22px;
}

.accent {
  background: linear-gradient(120deg, var(--fg-accent-light) 0%, var(--fg-indigo-light) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.subtitle {
  font-size: 1.14rem;
  color: var(--fg-gray-300);
  max-width: 560px;
  margin-bottom: 32px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;
}

.btnPrimary {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 15px 26px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  color: var(--fg-white);
  background: linear-gradient(135deg, var(--fg-accent) 0%, var(--fg-accent-dark) 100%);
  box-shadow: var(--fg-shadow-accent);
  transition: all var(--fg-transition);
}

.btnPrimary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(6, 182, 212, 0.42);
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
  gap: 9px;
  padding: 15px 26px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  color: var(--fg-white);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all var(--fg-transition);
}

.btnSecondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.32);
  transform: translateY(-2px);
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.stats li {
  display: flex;
  flex-direction: column;
}

.stats strong {
  font-size: 2rem;
  font-weight: 800;
  color: var(--fg-white);
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  background: linear-gradient(120deg, #fff 0%, var(--fg-accent-light) 120%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.stats span {
  font-size: 0.85rem;
  color: var(--fg-gray-400);
}

/* ===== Visual card ===== */
.visual {
  position: relative;
}

.gateCard {
  border-radius: var(--fg-radius-lg);
  padding: 24px;
  background: linear-gradient(
    160deg,
    rgba(27, 38, 74, 0.9) 0%,
    rgba(7, 12, 23, 0.96) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: var(--fg-shadow-lg);
  animation: floatUp 0.8s ease both;
}

.gateHeader {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--fg-accent-light);
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.signalList {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.signalList li {
  display: flex;
  align-items: center;
  gap: 14px;
}

.signalName {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.85rem;
  color: var(--fg-gray-300);
  min-width: 130px;
}

.signalName svg {
  color: var(--fg-accent-light);
}

.bar {
  flex: 1;
  height: 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.bar span {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--fg-indigo), var(--fg-accent-light));
  animation: growWidth 1.1s ease both;
}

.decision {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-approve-soft);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.decisionDot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--fg-approve);
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);
  animation: pulse 1.8s infinite;
}

.decision strong {
  display: block;
  font-size: 0.98rem;
  color: var(--fg-white);
}

.decision span {
  font-size: 0.82rem;
  color: var(--fg-gray-400);
}

@keyframes floatUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes growWidth {
  from {
    width: 0 !important;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

@media (max-width: 900px) {
  .inner {
    grid-template-columns: 1fr;
    gap: 56px;
    padding: 60px 24px 80px;
  }

  .content {
    max-width: 100%;
  }

  .visual {
    max-width: 480px;
  }
}

@media (max-width: 520px) {
  .actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btnPrimary,
  .btnSecondary {
    justify-content: center;
  }

  .stats {
    gap: 24px;
  }
}
