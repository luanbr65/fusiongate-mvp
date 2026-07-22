import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} id="contato">
      <div className={styles.inner}>
        <Reveal className={styles.card} variant="scale">
          <div className={styles.glow} aria-hidden="true" />
          <h2 className={styles.title}>
            Pronto para decidir cada transação em milissegundos?
          </h2>
          <p className={styles.text}>
            Coloque o FusionGate no fluxo do seu produto e transforme sinais
            dispersos em decisões confiáveis — sem penalizar quem é legítimo.
          </p>
          <div className={styles.actions}>
            <Link href="/dashboard" className={styles.btnPrimary}>
              Explorar o Dashboard
              <ArrowRight size={19} strokeWidth={2.5} />
            </Link>
            <a href="mailto:contato@fusiongate.app" className={styles.btnGhost}>
              Falar com o time
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
