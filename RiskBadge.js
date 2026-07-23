"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Anima um número de 0 até `value` quando entra na viewport.
 * @param {number} value - alvo
 * @param {string} prefix - texto antes (ex: "+", "-", "<")
 * @param {string} suffix - texto depois (ex: "%", "ms")
 * @param {number} decimals - casas decimais
 * @param {number} duration - duração em ms
 */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1400,
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let raf;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        // easeOutExpo
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        setDisplay(value * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            run();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
