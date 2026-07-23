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
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  color: var(--fg-text);
  margin-top: 2px;
}

.badge {
  display: inline-grid;
  place-items: center;
  min-width: 24px;
  height: 24px;
  padding: 0 7px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--fg-white);
  background: var(--fg-block);
}

.markAll {
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

.markAll:hover:not(:disabled) {
  color: var(--fg-text);
  border-color: var(--fg-gray-400);
}

.markAll:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.body {
  padding: 24px 32px 48px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.chip {
  padding: 9px 15px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--fg-text-muted);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-300);
  transition: all var(--fg-transition);
}

.chip:hover {
  border-color: var(--fg-accent);
  color: var(--fg-text);
}

.chipActive {
  color: var(--fg-white);
  background: linear-gradient(135deg, var(--fg-indigo) 0%, var(--fg-accent-dark) 100%);
  border-color: transparent;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.alert {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 18px 20px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-200);
  border-left-width: 3px;
  box-shadow: var(--fg-shadow-sm);
  transition: opacity var(--fg-transition);
}

.critical {
  border-left-color: var(--fg-block);
}
.warning {
  border-left-color: var(--fg-review);
}
.info {
  border-left-color: var(--fg-accent);
}

.read {
  opacity: 0.55;
}

.icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  flex-shrink: 0;
}

.critical .icon {
  color: var(--fg-block);
  background: var(--fg-block-soft);
}
.warning .icon {
  color: var(--fg-review);
  background: var(--fg-review-soft);
}
.info .icon {
  color: var(--fg-accent-dark);
  background: var(--fg-accent-soft);
}

.content {
  flex: 1;
  min-width: 0;
}

.alertHead {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.title {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--fg-text);
}

.sev {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 2px 8px;
  border-radius: 999px;
}

.critical .sev {
  color: var(--fg-block);
  background: var(--fg-block-soft);
}
.warning .sev {
  color: var(--fg-review);
  background: var(--fg-review-soft);
}
.info .sev {
  color: var(--fg-accent-dark);
  background: var(--fg-accent-soft);
}

.desc {
  font-size: 0.88rem;
  color: var(--fg-text-muted);
}

.side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  flex-shrink: 0;
}

.time {
  font-size: 0.8rem;
  color: var(--fg-gray-500);
  white-space: nowrap;
}

.markOne {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--fg-accent-dark);
  background: none;
  border: none;
  padding: 0;
  transition: color var(--fg-transition);
}

.markOne:hover {
  color: var(--fg-accent);
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 70px 24px;
  color: var(--fg-gray-500);
  border-radius: var(--fg-radius-md);
  border: 1px dashed var(--fg-gray-300);
  background: var(--fg-surface);
}

@media (max-width: 640px) {
  .topbar {
    padding: 18px 20px;
  }
  .body {
    padding: 20px 20px 40px;
  }
  .alert {
    flex-wrap: wrap;
  }
  .side {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
}
