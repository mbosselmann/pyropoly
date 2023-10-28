import { useGameData } from "@/context";
import styled from "styled-components";
import { useState } from "react";
import PlayerDetailsCard from "./PlayerDetailsCard";
import PlayerPreviewCard from "./PlayerPreviewCard";

const Section = styled.section`
  padding: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
`;

export default function GameCenter() {
  const { selectedPlayers, currentPlayer, fields } = useGameData();
  const [playerDetailsId, setPlayerDetailsId] = useState<number | null>(null);

  const playerLocationOfCurrentPlayer = selectedPlayers.find(
    (player) => Number(player.id) === currentPlayer
  )?.playerLocation;

  const fieldOfCurrentPlayer = fields
    ?.flatMap((field) => field)
    ?.find((field) => field.fieldNumber === playerLocationOfCurrentPlayer);
  console.log(selectedPlayers);

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
        <>
          <h2>{fieldOfCurrentPlayer?.name ?? ""}</h2>
          <p>{fieldOfCurrentPlayer?.message ?? ""}</p>
        </>
      )}
    </Section>
  );
}
