import { CheckCircle2, AlertTriangle, ShieldX } from "lucide-react";
import { DECISION_META } from "@/lib/scoring";
import styles from "./RiskBadge.module.css";

const ICONS = {
  approve: CheckCircle2,
  review: AlertTriangle,
  block: ShieldX,
};

export default function RiskBadge({ decision, showLabel = true, size = "md" }) {
  const meta = DECISION_META[decision] ?? DECISION_META.review;
  const Icon = ICONS[decision] ?? AlertTriangle;

  return (
    <span
      className={`${styles.badge} ${styles[meta.tone]} ${styles[size]}`}
      data-tone={meta.tone}
    >
      <Icon size={size === "sm" ? 13 : 15} strokeWidth={2.4} />
      {showLabel && meta.label}
    </span>
  );
}
