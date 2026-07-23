.footer {
  background: var(--fg-ink);
  color: var(--fg-text-invert);
  padding: 40px 0;
}

.inner {
  width: 100%;
  max-width: var(--fg-container);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: var(--fg-display);
  font-weight: 800;
  font-size: 1.08rem;
  letter-spacing: -0.03em;
  color: var(--fg-white);
}

.mark {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: var(--fg-white);
  background: var(--fg-brand);
}

.accent {
  color: var(--fg-brand-light);
}

.links {
  display: flex;
  align-items: center;
  gap: 26px;
  font-size: 0.92rem;
  font-weight: 500;
}

.links a {
  color: var(--fg-gray-400);
  transition: color var(--fg-transition);
}

.links a:hover {
  color: var(--fg-white);
}

.copy {
  font-size: 0.85rem;
  color: var(--fg-gray-600);
}

@media (max-width: 700px) {
  .inner {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
}
