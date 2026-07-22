import Sidebar from "@/components/app/Sidebar/Sidebar";
import styles from "./layout.module.css";

export const metadata = {
  title: "FusionGate · Dashboard de decisão",
};

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
