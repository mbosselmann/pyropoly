import styled from "styled-components";
import GameFigure from "./GameFigure";
import { useGameData } from "@/context";

export default function FieldItem({
  name,
  fieldNumber,
}: {
  name: string;
  fieldNumber: number;
}) {
  const { selectedPlayers } = useGameData();
  return (
    <ListItem>
      {name} Icon
      {selectedPlayers &&
        selectedPlayers
          .filter((player) => player.isSelected || player.isOpponent)
          .map(
            ({ playerLocation, id, name, username }) =>
              playerLocation === fieldNumber && (
                <GameFigure key={id} name={username ?? name} />
              )
          )}
    </ListItem>
  );
}

const ListItem = styled.li`
  border: outset hotpink;
  padding: 0.5rem;
`;
