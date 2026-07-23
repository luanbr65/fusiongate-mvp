.section {
  padding: 96px 0;
  background: var(--fg-surface);
}

.inner {
  width: 100%;
  max-width: var(--fg-container);
  margin: 0 auto;
  padding: 0 24px;
}

.head {
  max-width: 640px;
  margin: 0 0 48px;
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
}

.card {
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 28px 26px;
  border-radius: var(--fg-radius-lg);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-200);
  transition: border-color var(--fg-transition);
}

.card:hover {
  border-color: var(--fg-gray-400);
}

.quoteIcon {
  display: inline-flex;
  color: var(--fg-brand);
  margin-bottom: 16px;
}

.quote {
  margin: 0 0 22px;
  font-size: 1.02rem;
  line-height: 1.6;
  color: var(--fg-ink);
}

.author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--fg-gray-200);
}

.avatar {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  font-family: var(--fg-display);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--fg-white);
  background: var(--fg-ink);
}

.authorMeta {
  display: flex;
  flex-direction: column;
}

.authorMeta strong {
  font-family: var(--fg-display);
  font-size: 0.92rem;
  color: var(--fg-ink);
}

.authorMeta span {
  font-size: 0.82rem;
  color: var(--fg-gray-500);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
    max-width: 520px;
  }
  .section {
    padding: 72px 0;
  }
}
