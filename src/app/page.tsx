import styles from "./page.module.css";
import Title from "@/components/Title.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className={Title.styles}>
        So happy that you are here!
        <br /> What do you want to do?
      </h2>
      <nav className={styles.nav}>
        <Link className={styles["nav-link"]} href="/new-game">
          Start a new game
        </Link>
        <Link className={styles["nav-link"]} href="/about">
          What is Pyropoly?
        </Link>
        <Link className={styles["nav-link"]} href="/rules">
          What are the rules?
        </Link>
        <Link className={styles["nav-link"]} href="/quiz">
          Quiz to Check if you are ready to start.
        </Link>
      </nav>
    </>
  );
}
