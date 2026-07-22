"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Hexagon,
  LayoutDashboard,
  ListChecks,
  ArrowLeft,
} from "lucide-react";
import styles from "./Sidebar.module.css";

const NAV = [
  { href: "/dashboard", label: "Visão geral", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/transactions", label: "Transações", icon: ListChecks },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Link href="/" className={styles.brand}>
        <span className={styles.mark}>
          <Hexagon size={18} strokeWidth={2.4} />
        </span>
        <span className={styles.brandText}>
          Fusion<span className={styles.accent}>Gate</span>
        </span>
      </Link>

      <nav className={styles.nav} aria-label="Navegação do app">
        {NAV.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${active ? styles.active : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={18} strokeWidth={2.2} />
              {label}
            </Link>
          );
        })}
      </nav>

      <Link href="/" className={styles.back}>
        <ArrowLeft size={16} strokeWidth={2.2} />
        Voltar ao site
      </Link>
    </aside>
  );
}
