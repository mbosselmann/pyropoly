import { useState } from "react";
import styles from "./styles.module.css";

const min = 1;
const max = 24;

function getRandom(max: number, min: number) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}

export default function Dice() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    const xRand = getRandom(max, min);
    const yRand = getRandom(max, min);

    setRotation({ x: xRand, y: yRand });
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.cube}
        onClick={handleClick}
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
