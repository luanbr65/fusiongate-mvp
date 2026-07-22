import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Reduzimos falsos positivos no PIX sem abrir mão da segurança. A decisão explicável facilitou muito o trabalho do time de risco.",
    name: "Head de Risco",
    role: "Banco Exemplo (ilustrativo)",
    initials: "BE",
  },
  {
    quote:
      "Integramos o gateway em pouco mais de uma semana. A API é direta e os webhooks nos deram visibilidade que não tínhamos antes.",
    name: "Tech Lead",
    role: "Fintech Demo (ilustrativo)",
    initials: "FD",
  },
  {
    quote:
      "A análise de grafos expôs anéis de contas de passagem que passavam despercebidos. O impacto em chargebacks foi imediato.",
    name: "Gerente de Fraude",
    role: "Adquirente Modelo (ilustrativo)",
    initials: "AM",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} aria-label="Depoimentos">
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Quem opera com o FusionGate</span>
          <h2 className={styles.title}>Times de risco que decidem com confiança</h2>
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name + t.role}
              className={styles.card}
              delay={i * 100}
            >
              <span className={styles.quoteIcon}>
                <Quote size={22} strokeWidth={2.2} />
              </span>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar}>{t.initials}</span>
                <span className={styles.authorMeta}>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
