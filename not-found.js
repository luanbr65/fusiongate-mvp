.footer {
  background: var(--fg-primary-900);
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
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--fg-white);
}

.mark {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  color: var(--fg-white);
  background: linear-gradient(135deg, var(--fg-indigo) 0%, var(--fg-accent) 100%);
}

.accent {
  color: var(--fg-accent-light);
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
