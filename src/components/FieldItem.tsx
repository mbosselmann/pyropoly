import styled from "styled-components";
import GameFigure from "./GameFigure";
import { Avatar } from "@/types/Avatar";

export default function FieldItem({
  name,
  fieldNumber,
  players,
}: {
  name: string;
  fieldNumber: number;
  players: Avatar[];
}) {
  return (
    <ListItem>
      {name} Icon
      {players.map(
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
