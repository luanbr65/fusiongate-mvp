.section {
  padding: 40px 0;
  background: var(--fg-primary-900);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.inner {
  width: 100%;
  max-width: var(--fg-container);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
}

.label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg-gray-500);
}

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px 40px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--fg-gray-400);
  transition: color var(--fg-transition);
}

.logo:hover {
  color: var(--fg-white);
}

.logo svg {
  color: var(--fg-accent-light);
}

@media (max-width: 560px) {
  .logos {
    gap: 12px 24px;
  }
  .logo {
    font-size: 0.9rem;
  }
}
