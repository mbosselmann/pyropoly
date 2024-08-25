import styles from "./styles.module.css";

export default function Dice({
  rotation,
}: {
  rotation: { x: number; y: number };
}) {
  return (
    <div className={styles.container}>
      <div
        className={styles.cube}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className={`${styles.side} ${styles.front}`}>
          <div className={styles.dot} />
        </div>
        <div className={`${styles.side} ${styles.back}`}>
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <div className={`${styles.side} ${styles.right}`}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <div className={`${styles.side} ${styles.left}`}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <div className={`${styles.side} ${styles.top}`}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <div className={`${styles.side} ${styles.bottom}`}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </div>
    </div>
  );
}
