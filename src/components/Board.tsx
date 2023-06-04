import styled from "styled-components";
import Panel from "./Panel";
import GameCenter from "./GameCenter";
import type { Field } from "../types/Field";
import type { Player } from "../types/PlayerData";

export default function Board({
  fields,
  players,
  currentFieldMessage,
}: {
  fields: Field[][];
  players: Player[];
  currentFieldMessage: string;
}) {
  return (
    <Container>
      <Panel fields={fields[0]} variant="horizontal" players={players} />
      <Grid>
        <Panel fields={fields[1]} variant="vertical" players={players} />
        <GameCenter
          fieldName={"Field"}
          currentFieldMessage={currentFieldMessage}
        />
        <Panel fields={fields[2]} variant="vertical" players={players} />
      </Grid>
      <Panel fields={fields[3]} variant="horizontal" players={players} />
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  width: 40rem;
  height: 40rem;
  margin: 0 auto;
  gap: 0;
  grid-template-rows: 8rem auto 8rem;
  border: 10px solid black;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8rem auto 8rem;
`;
