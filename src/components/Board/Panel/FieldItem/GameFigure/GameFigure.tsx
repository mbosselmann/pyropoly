import styles from "./styles.module.css";
import { ScreenReaderOnly } from "../../../../Styles/ScreenReaderOnly";

export default function GameFigure({
  name,
  color,
  isCurrentPlayer,
}: {
  name: string;
  color: string;
  isCurrentPlayer: boolean;
}) {
  return (
    <div
      className={`${styles.container} ${color}BackgroundColor ${
        isCurrentPlayer ? styles.border : ""
      }`}
    >
      <ScreenReaderOnly>{name}</ScreenReaderOnly>
    </div>
  );
}
