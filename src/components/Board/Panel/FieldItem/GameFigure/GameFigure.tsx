import styles from "./styles.module.css";

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
      <span className="screenreaderonly">{name}</span>
    </div>
  );
}
