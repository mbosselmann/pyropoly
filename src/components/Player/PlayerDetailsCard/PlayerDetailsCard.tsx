import styles from "./styles.module.css";
import { useGameData } from "@/context";
import { Avatar } from "@/types/Avatar";
import PlayerCard from "../PlayerCard";
import { Field } from "@/types/Field";

type PlayerDetailsCardProps = {
  player: Avatar | undefined;
  onClosePlayerDetails: () => void;
};

export default function PlayerDetailsCard({
  player,
  onClosePlayerDetails,
}: PlayerDetailsCardProps) {
  const { fields }: { fields: Field[][] } = useGameData();

  if (!player) {
    return null;
  }

  const getFieldName = (playerLocation: number) => {
    return fields
      ?.flatMap((field) => field)
      ?.find((field) => field.fieldNumber === playerLocation)?.name;
  };

  const { name, username, color, playerLocation, gems } = player;

  return (
    <article className={styles.article}>
      <PlayerCard
        selectedAvatar={name}
        selectedColor={color}
        userName={username ? username : name}
      />
      <div>
        <button type="button" onClick={onClosePlayerDetails}>
          Close
        </button>
        <h3>About {username ? username : name}:</h3>
        <p>
          On field: <strong>{getFieldName(playerLocation)}</strong>
        </p>
        <p>Gems: {gems} 💎</p>
      </div>
    </article>
  );
}
