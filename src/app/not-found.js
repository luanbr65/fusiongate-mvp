import Link from "next/link";
import { Hexagon, ArrowLeft, LayoutDashboard } from "lucide-react";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Página não encontrada — FusionGate",
};

export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.mark}>
          <Hexagon size={30} strokeWidth={2.2} />
        </span>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Esta rota não passou na validação</h1>
        <p className={styles.text}>
          A página que você procura não existe ou foi movida. Vamos te levar de
          volta para um caminho seguro.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
            <ArrowLeft size={18} strokeWidth={2.4} />
            Voltar ao início
          </Link>
          <Link href="/dashboard" className={styles.btnGhost}>
            <LayoutDashboard size={18} strokeWidth={2.2} />
            Ir para o Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
