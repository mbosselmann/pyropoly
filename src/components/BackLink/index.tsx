import Link from "next/link";
import styles from "./styles.module.css";
import Back from "../Icons/Back";

export default function BackLink({ color }: { color: string }) {
  return (
    <Link
      className={`${styles.link} ${styles[color]}`}
      href="/"
      aria-label="Back to start"
      color={color}
    >
      <Back />
    </Link>
  );
}
