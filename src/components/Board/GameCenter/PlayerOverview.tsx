import { useGameData } from "@/context";
import styled from "styled-components";
import PlayerPreviewCard from "../../Player/PlayerPreviewCard";
import { Avatar } from "@/types/Avatar";

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 5px dotted hotpink;
`;

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
    <List role="list">
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
    </List>
  );
}
