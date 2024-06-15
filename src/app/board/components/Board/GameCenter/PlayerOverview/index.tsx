import { useGameData } from "@/context";
import styles from "./styles.module.css";
import { Avatar } from "@/types/Avatar";
import PlayerPreviewCard from "../../../Player/PlayerPreviewCard";

export default function PlayerOverview({
  onSelectPlayer,
}: {
  onSelectPlayer: (id: number) => void;
}) {
  const {
    selectedPlayers,
    currentPlayer,
  }: { selectedPlayers: Avatar[]; currentPlayer: number } = useGameData();

  return (
    <ul className={styles.list} role="list">
      {selectedPlayers.map(({ name, id, username, color }) => (
        <li key={id}>
          <PlayerPreviewCard
            name={name}
            id={id}
            username={username}
            color={color}
            currentPlayer={currentPlayer}
            onPlayerDetailsId={() => onSelectPlayer(Number(id))}
          />
        </li>
      ))}
    </ul>
  );
}
