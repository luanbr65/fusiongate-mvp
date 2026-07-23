import styles from "./DecisionsChart.module.css";

// Gráfico de barras empilhadas (aprovar/revisar/bloquear) por janela horária.
// Presentational: recebe buckets já agregados.
export default function DecisionsChart({ buckets }) {
  const max = Math.max(1, ...buckets.map((b) => b.total));

  return (
    <div className={styles.chart}>
      <div className={styles.bars}>
        {buckets.map((b, i) => (
          <div className={styles.col} key={i}>
            <div
              className={styles.stack}
              title={`${b.label}: ${b.total} transações`}
            >
              {b.block > 0 && (
                <span
                  className={styles.segBlock}
                  style={{ height: `${(b.block / max) * 100}%` }}
                />
              )}
              {b.review > 0 && (
                <span
                  className={styles.segReview}
                  style={{ height: `${(b.review / max) * 100}%` }}
                />
              )}
              {b.approve > 0 && (
                <span
                  className={styles.segApprove}
                  style={{ height: `${(b.approve / max) * 100}%` }}
                />
              )}
            </div>
            <span className={styles.xlabel}>{b.label}</span>
          </div>
        ))}
      </div>

      <ul className={styles.legend}>
        <li>
          <span className={styles.dotApprove} /> Aprovadas
        </li>
        <li>
          <span className={styles.dotReview} /> Revisão
        </li>
        <li>
          <span className={styles.dotBlock} /> Bloqueadas
        </li>
      </ul>
    </div>
  );
}
