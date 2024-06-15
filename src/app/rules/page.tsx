import { gameTexts } from "@/data/gameTexts";
import styles from "./page.module.css";

export default function Rules() {
  return (
    <ol className={styles.list}>
      {gameTexts.rules.map((rule, index) => (
        <li className={styles["list-item"]} key={index}>
          {rule}
        </li>
      ))}
    </ol>
  );
}
