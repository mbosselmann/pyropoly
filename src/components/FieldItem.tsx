import styled from "styled-components";
import GameFigure from "./GameFigure";
import { usePlayers } from "@/context";

export default function FieldItem({
  name,
  fieldNumber,
}: {
  name: string;
  fieldNumber: number;
}) {
  const { players } = usePlayers();
  return (
    <ListItem>
      {name} Icon
      {players &&
        players.map(
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
