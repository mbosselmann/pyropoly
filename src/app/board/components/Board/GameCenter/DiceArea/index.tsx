import styles from "./styles.module.css";
import Dice from "../Dice/Dice";
import { useState } from "react";

export default function DiceArea({
  rotations,
}: {
  rotations: { x: number; y: number }[];
}) {
  return (
    <div className={styles.area}>
      <Dice rotation={rotations[0]} /> <Dice rotation={rotations[1]} />
    </div>
  );
}
