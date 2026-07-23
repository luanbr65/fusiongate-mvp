import { Gauge, TrendingUp, ShieldCheck, Network } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import Counter from "@/components/ui/Counter/Counter";
import styles from "./Metrics.module.css";

const metrics = [
  { icon: Gauge, value: 200, prefix: "<", suffix: "ms", label: "Latência do motor de decisão" },
  { icon: TrendingUp, value: 30, prefix: "+", suffix: "%", label: "Aprovação de clientes legítimos" },
  { icon: ShieldCheck, value: 85, prefix: "-", suffix: "%", label: "Perdas por fraude transacional" },
  { icon: Network, value: 40, prefix: "+", suffix: "", label: "Sinais fundidos por decisão" },
];

export default function Metrics() {
  return (
    <section className={styles.section} aria-label="Resultados">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Resultados</span>
          <h2 className={styles.title}>
            Impacto mensurável desde a primeira semana
          </h2>
        </Reveal>

        <div className={styles.row}>
          {metrics.map(({ icon: Icon, value, prefix, suffix, label }, i) => (
            <Reveal className={styles.block} key={label} delay={i * 90}>
              <span className={styles.icon}>
                <Icon size={22} strokeWidth={2.2} />
              </span>
              <span className={styles.value}>
                <Counter value={value} prefix={prefix} suffix={suffix} />
              </span>
              <span className={styles.label}>{label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.note}>
          Métricas ilustrativas, baseadas em benchmarks típicos do setor.
        </Reveal>
      </div>
    </section>
  );
}
