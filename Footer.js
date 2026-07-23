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
  font-size: 1.4rem;
  color: var(--fg-text);
  margin-top: 2px;
}

.counters {
  display: flex;
  align-items: center;
  gap: 10px;
}

.counter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 13px;
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--fg-text-muted);
  background: var(--fg-gray-100);
}

.counter strong {
  color: var(--fg-text);
}

.approved {
  color: var(--fg-approve);
  background: var(--fg-approve-soft);
}

.blocked {
  color: var(--fg-block);
  background: var(--fg-block-soft);
}

.body {
  padding: 24px 32px 48px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.progressWrap {
  display: flex;
  align-items: center;
  gap: 16px;
}

.progressBar {
  flex: 1;
  height: 8px;
  border-radius: 999px;
  background: var(--fg-gray-200);
  overflow: hidden;
}

.progressFill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--fg-indigo), var(--fg-accent));
  transition: width 0.4s ease;
}

.progressText {
  font-size: 0.85rem;
  color: var(--fg-gray-500);
  white-space: nowrap;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.case {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-200);
  box-shadow: var(--fg-shadow-sm);
  transition: border-color var(--fg-transition), box-shadow var(--fg-transition);
  animation: popIn 0.25s ease both;
}

.case:hover {
  border-color: rgba(6, 182, 212, 0.35);
  box-shadow: var(--fg-shadow-md);
}

.caseMain {
  min-width: 0;
}

.caseHead {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}

.caseId {
  font-family: var(--fg-font-mono);
  font-size: 0.8rem;
  color: var(--fg-gray-500);
}

.caseScore {
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--fg-review);
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--fg-review-soft);
}

.caseCustomer {
  display: block;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--fg-text);
  margin-bottom: 6px;
}

.caseMeta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: var(--fg-text-muted);
}

.tag {
  padding: 2px 9px;
  border-radius: 6px;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--fg-gray-700);
  background: var(--fg-gray-100);
}

.dot {
  color: var(--fg-gray-300);
}

.topSignal {
  color: var(--fg-block);
  font-weight: 500;
}

.caseActions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.btnView,
.btnBlock,
.btnApprove {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all var(--fg-transition);
}

.btnView {
  color: var(--fg-text-muted);
  background: var(--fg-surface);
  border-color: var(--fg-gray-300);
}

.btnView:hover {
  color: var(--fg-text);
  border-color: var(--fg-gray-400);
}

.btnBlock {
  color: var(--fg-block);
  background: var(--fg-block-soft);
}

.btnBlock:hover {
  background: var(--fg-block);
  color: var(--fg-white);
}

.btnApprove {
  color: var(--fg-white);
  background: var(--fg-approve);
}

.btnApprove:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
}

/* Empty state */
.empty {
  text-align: center;
  padding: 70px 24px;
  border-radius: var(--fg-radius-lg);
  border: 1px dashed var(--fg-gray-300);
  background: var(--fg-surface);
}

.emptyIcon {
  display: inline-grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-bottom: 20px;
  color: var(--fg-approve);
  background: var(--fg-approve-soft);
}

.empty h2 {
  font-size: 1.3rem;
  color: var(--fg-text);
  margin-bottom: 10px;
}

.empty p {
  font-size: 0.96rem;
  color: var(--fg-text-muted);
  max-width: 420px;
  margin: 0 auto;
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}

@media (max-width: 720px) {
  .case {
    flex-direction: column;
    align-items: stretch;
  }
  .caseActions {
    justify-content: flex-end;
  }
  .topbar {
    padding: 18px 20px;
  }
  .body {
    padding: 20px 20px 40px;
  }
}
