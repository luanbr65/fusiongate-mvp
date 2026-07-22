import Link from "next/link";
import { Hexagon, LayoutDashboard } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Navegação principal">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="FusionGate">
          <span className={styles.logoMark}>
            <Hexagon size={20} strokeWidth={2.4} />
          </span>
          <span className={styles.logoText}>
            Fusion<span className={styles.logoAccent}>Gate</span>
          </span>
        </Link>

        <ul className={styles.links}>
          <li>
            <a href="#features">Recursos</a>
          </li>
          <li>
            <a href="#how">Como funciona</a>
          </li>
          <li>
            <a href="#pricing">Planos</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        <Link href="/dashboard" className={styles.cta}>
          <LayoutDashboard size={16} strokeWidth={2.3} />
          Acessar o Dashboard
        </Link>
      </div>
    </nav>
  );
}
