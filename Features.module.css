import { PlugZap, Layers, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    icon: PlugZap,
    step: "01",
    title: "Conecte",
    text: "Envie a transação para o endpoint /validate-transaction via REST. Integração em dias, não meses.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Funda os sinais",
    text: "O gateway agrega identidade, comportamento, rede e velocidade em um risk score único e ponderado.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Decida",
    text: "Receba aprovar, revisar ou bloquear com as razões da decisão — pronto para acionar no seu backend.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Como funciona</span>
          <h2 className={styles.title}>Três passos entre a transação e a decisão</h2>
        </Reveal>

        <div className={styles.grid}>
          {steps.map(({ icon: Icon, step, title, text }, i) => (
            <Reveal key={step} className={styles.step} delay={i * 110}>
              <span className={styles.num}>{step}</span>
              <span className={styles.icon}>
                <Icon size={22} strokeWidth={2.2} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.terminal} variant="scale" delay={120}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.terminalTitle}>curl · /api/validate-transaction</span>
          </div>
          <pre className={styles.code}>
            <code>
              <span className={styles.c1}>curl</span> -X POST
              /api/validate-transaction \{"\n"}
              {"  "}-H <span className={styles.c2}>&apos;content-type: application/json&apos;</span> \{"\n"}
              {"  "}-d <span className={styles.c2}>&apos;{"{"} &quot;amount&quot;: 1499.9, &quot;channel&quot;: &quot;pix&quot; {"}"}&apos;</span>
              {"\n\n"}
              <span className={styles.c3}># → {"{"} &quot;decision&quot;: </span>
              <span className={styles.c4}>&quot;approve&quot;</span>
              <span className={styles.c3}>, &quot;risk_score&quot;: 0.06, &quot;latency_ms&quot;: 4 {"}"}</span>
            </code>
          </pre>
        </Reveal>
      </div>
    </section>
  );
}
