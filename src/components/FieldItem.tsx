import styled from "styled-components";
import GameFigure from "./GameFigure";
import type { Player } from "../types/PlayerData";

export default function FieldItem({
  name,
  fieldNumber,
  players,
}: {
  name: string;
  fieldNumber: number;
  players: Player[];
}) {
  return (
    <ListItem>
      {name} Icon
      {players.map(
        ({ playerLocation, id, name }) =>
          playerLocation === fieldNumber && <GameFigure key={id} name={name} />
      )}
    </ListItem>
  );
}

const ListItem = styled.li`
  border: outset hotpink;
  padding: 0.5rem;
`;
