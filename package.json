import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, GitMerge, Radio } from "lucide-react";
import Counter from "@/components/ui/Counter/Counter";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <Radio size={14} strokeWidth={2.5} />
            Gateway de decisão em tempo real
          </span>

          <h1 className={styles.title}>
            Um único gateway que{" "}
            <span className={styles.accent}>funde todos os sinais</span> de
            fraude.
          </h1>

          <p className={styles.subtitle}>
            O FusionGate combina identidade, comportamento e análise de rede em
            uma decisão só — aprovar, revisar ou bloquear — em menos de 200ms.
            Menos atrito para o cliente legítimo, zero brecha para o fraudador.
          </p>

          <div className={styles.actions}>
            <Link href="/dashboard" className={styles.btnPrimary}>
              Abrir o Dashboard
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <a href="#how" className={styles.btnSecondary}>
              <Zap size={18} strokeWidth={2.2} />
              Ver como funciona
            </a>
          </div>

          <ul className={styles.stats}>
            <li>
              <strong>
                <Counter value={200} prefix="<" suffix="ms" />
              </strong>
              <span>Latência de decisão</span>
            </li>
            <li>
              <strong>
                <Counter value={30} prefix="+" suffix="%" />
              </strong>
              <span>Aprovação de legítimos</span>
            </li>
            <li>
              <strong>
                <Counter value={85} prefix="-" suffix="%" />
              </strong>
              <span>Perdas por fraude</span>
            </li>
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.gateCard}>
            <div className={styles.gateHeader}>
              <GitMerge size={18} strokeWidth={2.3} />
              Fusão de sinais
            </div>
            <ul className={styles.signalList}>
              <li>
                <span className={styles.signalName}>
                  <ShieldCheck size={15} strokeWidth={2.3} /> Identidade
                </span>
                <span className={styles.bar}>
                  <span style={{ width: "94%" }} />
                </span>
              </li>
              <li>
                <span className={styles.signalName}>
                  <Radio size={15} strokeWidth={2.3} /> Comportamento
                </span>
                <span className={styles.bar}>
                  <span style={{ width: "88%" }} />
                </span>
              </li>
              <li>
                <span className={styles.signalName}>
                  <GitMerge size={15} strokeWidth={2.3} /> Rede / grafos
                </span>
                <span className={styles.bar}>
                  <span style={{ width: "91%" }} />
                </span>
              </li>
            </ul>
            <div className={styles.decision}>
              <span className={styles.decisionDot} />
              <div>
                <strong>Decisão: Aprovar</strong>
                <span>Risk score 0.06 · 138ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
