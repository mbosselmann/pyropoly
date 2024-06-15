import "@/styles.css";
import "@/themes.styles.css";
import styles from "../layout.module.css";
import Title from "@/components/Title.module.css";
import BackLink from "@/components/BackLink";
import { ReactNode } from "react";

export default function NewGameLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.headline}>Pyropoly</h1>
        <BackLink color={"dark"} />
      </header>
      <h2 className={Title.styles}>About</h2>
      {children}
    </main>
  );
}
