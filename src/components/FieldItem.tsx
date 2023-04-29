import styled from "styled-components";
import Player from "./Player";

export default function FieldItem({
  name,
  fieldNumber,
  playerLocation,
}: {
  name: string;
  fieldNumber: number;
  playerLocation: number;
}) {
  return (
    <ListItem>
      {name} Icon
      {fieldNumber === playerLocation && <Player />}
    </ListItem>
  );
}

const ListItem = styled.li`
  border: outset hotpink;
  padding: 0.5rem;
`;
