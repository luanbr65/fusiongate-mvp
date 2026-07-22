import { UserCheck, Activity, Share2, FileCheck2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./Features.module.css";

const features = [
  {
    icon: UserCheck,
    title: "Identidade & Onboarding",
    text: "Validação documental, biometria e background check para barrar laranjas e falsidade ideológica na entrada.",
  },
  {
    icon: Activity,
    title: "Comportamento em tempo real",
    text: "Perfil comportamental e velocidade de transações detectam engenharia social e desvios do padrão do titular.",
  },
  {
    icon: Share2,
    title: "Análise de rede (grafos)",
    text: "Mapeamento de conexões entre contas expõe contas de passagem e anéis de fraude antes que o dinheiro saia.",
  },
  {
    icon: FileCheck2,
    title: "Compliance & Auditoria",
    text: "Trilhas de decisão auditáveis e relatórios prontos para as exigências do Banco Central.",
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Cobertura completa</span>
          <h2 className={styles.title}>
            Todos os vetores de fraude, um só ponto de decisão
          </h2>
          <p className={styles.lead}>
            O FusionGate reúne sinais que normalmente ficam em sistemas
            separados e os transforma em uma decisão única e explicável.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="article"
              key={title}
              className={styles.card}
              variant="up"
              delay={i * 90}
            >
              <span className={styles.icon}>
                <Icon size={24} strokeWidth={2.1} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
