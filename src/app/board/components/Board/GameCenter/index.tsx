import { useGameData } from "@/context";
import styles from "./styles.module.css";
import { useState } from "react";
import { Avatar } from "@/types/Avatar";
import PlayerOverview from "./PlayerOverview";
import ActivityZone from "./ActivityZone";

export default function GameCenter() {
  const {
    selectedPlayers,
    currentPlayer,
  }: { selectedPlayers: Avatar[]; currentPlayer: number } = useGameData();
  const [playerDetailsId, setPlayerDetailsId] = useState<number | null>(null);

  const playerLocationOfCurrentPlayer = selectedPlayers.find(
    (player) => Number(player.id) === currentPlayer
  )?.playerLocation;

  return (
    <section className={styles.section}>
      <PlayerOverview onSelectPlayer={(id: number) => setPlayerDetailsId(id)} />
      <ActivityZone
        player={
          selectedPlayers.find(
            (player) => Number(player.id) === playerDetailsId
          ) ?? null
        }
        onClosePlayerDetails={() => setPlayerDetailsId(null)}
        playerLocationOfCurrentPlayer={playerLocationOfCurrentPlayer}
      />
    </section>
  );
}
