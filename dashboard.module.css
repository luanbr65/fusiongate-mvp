import { Landmark, CreditCard, Wallet, Building2, ShoppingCart } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./TrustStrip.module.css";

const segments = [
  { icon: Landmark, label: "Bancos digitais" },
  { icon: CreditCard, label: "Adquirentes" },
  { icon: Wallet, label: "Fintechs de crédito" },
  { icon: Building2, label: "Cooperativas" },
  { icon: ShoppingCart, label: "Marketplaces" },
];

export default function TrustStrip() {
  return (
    <section className={styles.section} aria-label="Segmentos atendidos">
      <div className={styles.inner}>
        <Reveal className={styles.label}>
          Construído para o ecossistema financeiro
        </Reveal>
        <div className={styles.logos}>
          {segments.map(({ icon: Icon, label }, i) => (
            <Reveal
              key={label}
              className={styles.logo}
              delay={i * 70}
              variant="up"
            >
              <Icon size={20} strokeWidth={2} />
              {label}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
