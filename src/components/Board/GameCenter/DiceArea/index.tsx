import styles from "./styles.module.css";
import Dice from "../../Dice";

export default function DiceArea() {
  return (
    <div className={styles.area}>
      <Dice /> <Dice />
    </div>
  );
}
