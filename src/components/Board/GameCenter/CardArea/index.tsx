import styles from "./styles.module.css";
import Chance from "../../../Icons/Chance";
import Chest from "../../../Icons/Chest";

export default function CardArea() {
  return (
    <section className={styles["card-section"]}>
      <div className={styles["card-border"]}>
        <div className={styles.card}>
          <Chest />
        </div>
      </div>
      <div className={styles["card-border"]}>
        <div className={styles.card}>
          <Chance />
        </div>
      </div>
    </section>
  );
}
