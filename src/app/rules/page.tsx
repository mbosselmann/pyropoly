import { gameTexts } from "@/data/gameTexts";
import styles from "./page.module.css";
import Title from "@/components/Title.module.css";

export default function Rules() {
  return (
    <>
      <h2 className={Title.styles}>What are the rules?</h2>
      <ol className={styles.list}>
        {gameTexts.rules.map((rule, index) => (
          <li className={styles["list-item"]} key={index}>
            {rule}
          </li>
        ))}
      </ol>
    </>
  );
}
