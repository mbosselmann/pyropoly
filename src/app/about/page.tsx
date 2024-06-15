import styles from "./page.module.css";
import { gameTexts } from "@/data/gameTexts";

export default function About() {
  return (
    <ul className={styles.list}>
      {gameTexts.about.map((about, index) => (
        <li className={styles["list-item"]} key={index}>
          {about}
        </li>
      ))}
    </ul>
  );
}
