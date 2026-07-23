.panel {
  padding: 24px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-surface);
  border: 1px solid var(--fg-gray-200);
  box-shadow: var(--fg-shadow-sm);
}

.header {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  margin-bottom: 22px;
}

.headIcon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  flex-shrink: 0;
  color: var(--fg-accent-dark);
  background: var(--fg-accent-soft);
}

.title {
  font-size: 1.05rem;
  color: var(--fg-text);
}

.subtitle {
  font-size: 0.85rem;
  color: var(--fg-text-muted);
  margin-top: 2px;
}

.subtitle code {
  font-family: var(--fg-font-mono);
  font-size: 0.8rem;
  color: var(--fg-accent-dark);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--fg-text-muted);
}

.input {
  padding: 10px 12px;
  border-radius: 9px;
  border: 1px solid var(--fg-gray-300);
  background: var(--fg-surface);
  font-size: 0.92rem;
  color: var(--fg-text);
  transition: border-color var(--fg-transition), box-shadow var(--fg-transition);
}

.input:focus {
  outline: none;
  border-color: var(--fg-accent);
  box-shadow: 0 0 0 3px var(--fg-accent-soft);
}

.signals {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.signal {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.signalHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--fg-text-muted);
}

.signalHead strong {
  font-family: var(--fg-font-mono);
  font-size: 0.82rem;
  color: var(--fg-text);
}

.range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: var(--fg-gray-200);
  cursor: pointer;
}

.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--fg-accent);
  border: 2px solid var(--fg-white);
  box-shadow: var(--fg-shadow-sm);
  cursor: pointer;
}

.range::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--fg-accent);
  border: 2px solid var(--fg-white);
  cursor: pointer;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 13px 20px;
  border: none;
  border-radius: 11px;
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--fg-white);
  background: linear-gradient(135deg, var(--fg-indigo) 0%, var(--fg-accent-dark) 100%);
  box-shadow: var(--fg-shadow-accent);
  transition: transform var(--fg-transition), box-shadow var(--fg-transition),
    opacity var(--fg-transition);
}

.button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.button:disabled {
  opacity: 0.7;
  cursor: progress;
}

.spin {
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error {
  margin-top: 14px;
  font-size: 0.88rem;
  color: var(--fg-block);
}

.result {
  margin-top: 20px;
  padding: 18px;
  border-radius: var(--fg-radius-md);
  background: var(--fg-surface-alt);
  border: 1px solid var(--fg-gray-200);
  animation: fadeIn 0.3s ease both;
}

.resultHead {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.resultScore {
  font-size: 0.86rem;
  color: var(--fg-text-muted);
}

.resultScore strong {
  font-family: var(--fg-font-mono);
  color: var(--fg-text);
}

.resultLatency {
  margin-left: auto;
  font-size: 0.8rem;
  font-family: var(--fg-font-mono);
  color: var(--fg-gray-500);
}

.reasons {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.88rem;
  color: var(--fg-text-muted);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .row {
    grid-template-columns: 1fr;
  }
}
