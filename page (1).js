.section {
  padding: 96px 0;
  background: var(--fg-surface);
}

.inner {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 0 24px;
}

.head {
  margin-bottom: 40px;
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

.list {
  display: flex;
  flex-direction: column;
}

.item {
  border-bottom: 1px solid var(--fg-gray-200);
}

.item:first-child {
  border-top: 1px solid var(--fg-gray-200);
}

.question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 4px;
  border: none;
  background: transparent;
  text-align: left;
  font-family: var(--fg-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--fg-ink);
}

.chevron {
  flex-shrink: 0;
  color: var(--fg-gray-500);
  transition: transform var(--fg-transition);
}

.itemOpen .chevron {
  transform: rotate(180deg);
  color: var(--fg-brand);
}

.answerWrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.answerWrap[data-open="true"] {
  grid-template-rows: 1fr;
}

.answer {
  overflow: hidden;
  margin: 0;
  padding: 0 4px;
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--fg-text-muted);
}

.answerWrap[data-open="true"] .answer {
  padding-bottom: 22px;
}
