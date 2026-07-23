.reveal {
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.up {
  transform: translateY(28px);
}

.left {
  transform: translateX(-32px);
}

.right {
  transform: translateX(32px);
}

.scale {
  transform: scale(0.94);
}

.visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
