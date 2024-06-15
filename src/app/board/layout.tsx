import "@/styles.css";
import "@/themes.styles.css";
import styles from "../layout.module.css";
import BackLink from "@/components/BackLink";
import { ReactNode } from "react";

export default function BoardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <header>
        <BackLink color={"light"} />
      </header>
      {children}
    </main>
  );
}
