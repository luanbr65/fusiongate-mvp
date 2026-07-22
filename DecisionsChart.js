.card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 22px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-200);
  box-shadow: var(--fg-shadow-sm);
  transition: transform var(--fg-transition), box-shadow var(--fg-transition);
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: var(--fg-shadow-md);
}

.iconWrap {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  flex-shrink: 0;
}

.accent {
  color: var(--fg-accent-dark);
  background: var(--fg-accent-soft);
}
.approve {
  color: var(--fg-approve);
  background: var(--fg-approve-soft);
}
.review {
  color: var(--fg-review);
  background: var(--fg-review-soft);
}
.block {
  color: var(--fg-block);
  background: var(--fg-block-soft);
}

.body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--fg-text-muted);
}

.value {
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--fg-text);
  line-height: 1.1;
}

.hint {
  font-size: 0.78rem;
  color: var(--fg-gray-500);
  margin-top: 2px;
}
