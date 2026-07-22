import Link from "next/link";
import { Hexagon } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.mark}>
            <Hexagon size={18} strokeWidth={2.4} />
          </span>
          Fusion<span className={styles.accent}>Gate</span>
        </Link>

        <nav className={styles.links} aria-label="Links do rodapé">
          <a href="#features">Recursos</a>
          <a href="#how">Como funciona</a>
          <Link href="/dashboard">Dashboard</Link>
          <a href="#contato">Contato</a>
        </nav>

        <p className={styles.copy}>
          © {new Date().getFullYear()} FusionGate. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
