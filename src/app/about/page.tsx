import styles from "./page.module.css";
import Title from "../../components/Title.module.css";
import { gameTexts } from "@/data/gameTexts";

export default function About() {
  return (
    <>
      <h2 className={Title.styles}>About</h2>
      <ul className={styles.list}>
        {gameTexts.about.map((about, index) => (
          <li className={styles["list-item"]} key={index}>
            {about}
          </li>
        ))}
      </ul>
    </>
  );
}
