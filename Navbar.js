.section {
  padding: 96px 0;
  background: var(--fg-paper);
  border-top: 1px solid var(--fg-gray-200);
  border-bottom: 1px solid var(--fg-gray-200);
}

.glow {
  display: none;
}

.inner {
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
  color: var(--fg-brand);
  margin-bottom: 14px;
}

.title {
  font-size: clamp(1.9rem, 3.4vw, 2.6rem);
  color: var(--fg-ink);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.step {
  position: relative;
  padding: 28px 24px;
  border-radius: var(--fg-radius-lg);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-200);
  transition: border-color var(--fg-transition), transform var(--fg-transition);
}

.step:hover {
  border-color: var(--fg-brand);
  transform: translateY(-3px);
}

.num {
  position: absolute;
  top: 22px;
  right: 24px;
  font-family: var(--fg-display);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--fg-gray-200);
  letter-spacing: -0.03em;
}

.icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  margin-bottom: 18px;
  color: var(--fg-brand);
  background: var(--fg-brand-050);
}

.step h3 {
  font-family: var(--fg-display);
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--fg-ink);
  margin-bottom: 10px;
}

.step p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--fg-text-muted);
}

/* Code block */
.terminal {
  max-width: 760px;
  border-radius: var(--fg-radius-lg);
  overflow: hidden;
  background: var(--fg-primary-900);
  border: 1px solid var(--fg-primary-700);
}

.terminalBar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 13px 18px;
  background: var(--fg-primary-800);
  border-bottom: 1px solid var(--fg-primary-700);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
}

.dot:first-child {
  background: #e06c5b;
}
.dot:nth-child(2) {
  background: #d8a24a;
}
.dot:nth-child(3) {
  background: #58a377;
}

.terminalTitle {
  margin-left: auto;
  font-family: var(--fg-font-mono);
  font-size: 0.78rem;
  color: var(--fg-gray-400);
}

.code {
  margin: 0;
  padding: 22px 20px;
  font-family: var(--fg-font-mono);
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--fg-gray-300);
  overflow-x: auto;
  white-space: pre;
}

.c1 {
  color: #7aa2f7;
  font-weight: 600;
}
.c2 {
  color: #d8b978;
}
.c3 {
  color: var(--fg-gray-500);
  font-style: italic;
}
.c4 {
  color: #79c6a3;
  font-weight: 600;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
    max-width: 460px;
  }
  .section {
    padding: 72px 0;
  }
}
