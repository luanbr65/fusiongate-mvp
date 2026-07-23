import styles from "./StatCard.module.css";

export default function StatCard({ icon: Icon, label, value, hint, tone = "accent" }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.iconWrap} ${styles[tone]}`}>
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <div className={styles.body}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
        {hint && <span className={styles.hint}>{hint}</span>}
      </div>
    </div>
  );
}
