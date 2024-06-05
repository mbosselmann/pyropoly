import styles from "./styles.module.css";
import { AVATAR_MAP } from "../AvatarIcons";

type PlayerPreviewCardProps = {
  name: string;
  id: string;
  username?: string;
  color?: string;
  currentPlayer: number;
  onPlayerDetailsId: () => void;
};

export default function PlayerPreviewCard({
  name,
  id,
  username,
  color,
  currentPlayer,
  onPlayerDetailsId,
}: PlayerPreviewCardProps) {
  const isCurrentPlayer = Number(id) === currentPlayer;
  return (
    <article className={styles.player}>
      <div
        className={`${styles["avatar-wrapper"]} ${color}BackgroundColor ${
          isCurrentPlayer ? "border" : "fallbackBorder"
        }`}
      >
        {AVATAR_MAP[name.toLowerCase()]}
      </div>
      <h2 className={styles["player-name"]}>{username ? username : name}</h2>
      <button
        className={styles.button}
        onClick={onPlayerDetailsId}
        type="button"
      >
        <span className="screenreaderonly">Details</span>
      </button>
    </article>
  );
}
