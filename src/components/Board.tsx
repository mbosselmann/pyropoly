import styled from "styled-components";
import Panel from "./Panel";
import GameCenter from "./GameCenter";
import type { Field } from "../types/Field";

export default function Board({
  fields,
  currentFieldMessage,
}: {
  fields: Field[][];
  currentFieldMessage: string;
}) {
  return (
    <Container>
      <Panel fields={fields[0]} variant="horizontal" />
      <Grid>
        <Panel fields={fields[1]} variant="vertical" />
        <GameCenter
          fieldName={"Field"}
          currentFieldMessage={currentFieldMessage}
        />
        <Panel fields={fields[2]} variant="vertical" />
      </Grid>
      <Panel fields={fields[3]} variant="horizontal" />
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
