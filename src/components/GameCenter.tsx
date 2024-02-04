import { useGameData } from "@/context";
import styled from "styled-components";
import { useState } from "react";
import PlayerDetailsCard from "./Player/PlayerDetailsCard";
import PlayerPreviewCard from "./Player/PlayerPreviewCard";
import PlayerActions from "./Player/PlayerActions";
import { Avatar } from "@/types/Avatar";

const Section = styled.section`
  display: grid;
  grid-template-rows: 1fr 5fr;
  padding: 0.5rem;
  height: 100%;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 5px dotted hotpink;
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
      <List role="list">
        {selectedPlayers.map(({ name, id, username, color }) => (
          <li key={id}>
            <PlayerPreviewCard
              name={name}
              id={id}
              username={username}
              color={color}
              currentPlayer={currentPlayer}
              onPlayerDetailsId={() => setPlayerDetailsId(Number(id))}
            />
          </li>
        ))}
      </List>
      {playerDetailsId !== null ? (
        <PlayerDetailsCard
          player={selectedPlayers.find(
            (player) => Number(player.id) === playerDetailsId
          )}
          onClosePlayerDetails={() => setPlayerDetailsId(null)}
        />
      ) : (
        <PlayerActions
          playerLocationOfCurrentPlayer={playerLocationOfCurrentPlayer}
        />
      )}
    </Section>
  );
}
