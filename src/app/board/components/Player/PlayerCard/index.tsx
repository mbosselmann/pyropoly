import { AVATAR_MAP } from "@/components/Icons/AvatarIcons";
import styles from "./styles.module.css";
import { useGameData } from "@/context";
import { Color } from "@/types/Color";

interface PlayerProps {
  selectedAvatar: string;
  selectedColor?: string;
  userName?: string;
}

export default function PlayerCard({
  selectedAvatar,
  selectedColor,
  userName,
}: PlayerProps) {
  const { colors }: { colors: Color[] } = useGameData();

  return (
    <article className={styles.card}>
      <div
        className={`${styles["avatar-icon"]} ${
          selectedColor ?? "fallback"
        }BackgroundColor`}
      >
        {AVATAR_MAP[selectedAvatar.toLowerCase()]}
      </div>
      <ul className={styles.list} role="list">
        <li>
          <strong>{userName ?? "SilentParrot"}</strong>
        </li>
        <li>
          Color:{" "}
          {colors.find((color) => color.styleName === selectedColor)?.name ??
            "No color selected"}
        </li>
      </ul>
    </article>
  );
}
