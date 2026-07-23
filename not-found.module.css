import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Starter",
    price: "R$ 0,08",
    unit: "/ decisão",
    desc: "Para times validando o motor em produção.",
    features: [
      "API de decisão em tempo real",
      "Até 50k decisões/mês",
      "Dashboard e histórico",
      "Suporte por e-mail",
    ],
    cta: "Começar agora",
    highlight: false,
  },
  {
    name: "Growth",
    price: "R$ 0,05",
    unit: "/ decisão",
    desc: "Para operações em escala que precisam de flexibilidade.",
    features: [
      "Tudo do Starter",
      "Volume ilimitado",
      "Análise de grafos e biometria",
      "Webhooks e regras customizadas",
      "Suporte prioritário",
    ],
    cta: "Falar com vendas",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    unit: "",
    desc: "Para instituições com requisitos regulatórios específicos.",
    features: [
      "Tudo do Growth",
      "SLA dedicado e on-premise",
      "Modelos sob medida",
      "Compliance e auditoria avançados",
      "Gerente de conta dedicado",
    ],
    cta: "Solicitar proposta",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Planos</span>
          <h2 className={styles.title}>Preço que acompanha o seu volume</h2>
          <p className={styles.lead}>
            Pague por decisão, sem taxas escondidas. Valores ilustrativos.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              className={`${styles.card} ${p.highlight ? styles.highlight : ""}`}
              delay={i * 100}
            >
              {p.highlight && <span className={styles.badge}>Mais popular</span>}
              <h3 className={styles.name}>{p.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>{p.price}</span>
                {p.unit && <span className={styles.unit}>{p.unit}</span>}
              </div>
              <p className={styles.desc}>{p.desc}</p>
              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={16} strokeWidth={2.6} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#contato"
                className={`${styles.cta} ${p.highlight ? styles.ctaPrimary : ""}`}
              >
                {p.cta}
                <ArrowRight size={16} strokeWidth={2.4} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
