"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Quanto tempo leva para integrar o FusionGate?",
    a: "A integração básica via API REST costuma levar de poucos dias a duas semanas, dependendo da complexidade do seu fluxo. Os webhooks e SDKs aceleram ainda mais o processo.",
  },
  {
    q: "O motor de decisão funciona em tempo real?",
    a: "Sim. Cada chamada ao endpoint /validate-transaction retorna a decisão (aprovar, revisar ou bloquear) em milissegundos, adequada para autorização síncrona de PIX, cartão e onboarding.",
  },
  {
    q: "Como vocês reduzem falsos positivos?",
    a: "Em vez de regras isoladas, o gateway funde múltiplos sinais ponderados em um único score. Isso separa fraudadores reais de clientes legítimos com muito mais precisão do que abordagens baseadas só em regras.",
  },
  {
    q: "A solução atende às exigências do Banco Central?",
    a: "O FusionGate gera trilhas de decisão auditáveis e relatórios de risco pensados para os requisitos regulatórios brasileiros, facilitando o trabalho de compliance.",
  },
  {
    q: "É possível customizar as regras de decisão?",
    a: "Sim. A partir do plano Growth você pode ajustar limiares, criar regras específicas por canal e receber eventos via webhook para orquestrar ações no seu backend.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>Perguntas frequentes</span>
          <h2 className={styles.title}>Tudo que você precisa saber</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <ChevronDown
                    size={20}
                    strokeWidth={2.3}
                    className={styles.chevron}
                  />
                </button>
                <div className={styles.answerWrap} data-open={isOpen}>
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
