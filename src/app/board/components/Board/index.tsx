"use client";

import styles from "./styles.module.css";
import Panel from "./Panel";
import GameCenter from "./GameCenter";
import { useGameData } from "@/context";
import { Field } from "@/types/Field";

export default function Board() {
  const { fields }: { fields: Field[][] } = useGameData();

  return (
    <div className={styles.container}>
      <Panel fields={fields[0]} variant="horizontal-top" />
      <div className={styles.grid}>
        <Panel fields={fields[1]} variant="vertical-left" />
        <GameCenter />
        <Panel fields={fields[2]} variant="vertical-right" />
      </div>
      <Panel fields={fields[3]} variant="horizontal-bottom" />
    </div>
  );
}
