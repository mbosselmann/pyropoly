import { useGameData } from "@/context";
import styled from "styled-components";
import { useState } from "react";
import { Avatar } from "@/types/Avatar";
import PlayerOverview from "./PlayerOverview";
import ActivityZone from "./ActivityZone";

const Section = styled.section`
  display: grid;
  grid-template-rows: 1fr 5fr;
  padding: 0.5rem;
  height: 100%;
`;

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
    <Section>
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
    </Section>
  );
}
