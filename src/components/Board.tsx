import styled from "styled-components";
import Panel from "./Panel";
import GameCenter from "./GameCenter";
import { useGameData } from "@/context";

export default function Board() {
  const { fields } = useGameData();

  return (
    <Container>
      <Panel fields={fields[0]} variant="horizontal" />
      <Grid>
        <Panel fields={fields[1]} variant="vertical" />
        <GameCenter />
        <Panel fields={fields[2]} variant="vertical" />
      </Grid>
      <Panel fields={fields[3]} variant="horizontal" />
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  width: var(--board-size);
  height: var(--board-size);
  margin: 0 auto;
  background-color: #fff;
  gap: 0;
  grid-template-rows: var(--field-size) auto var(--field-size);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: var(--field-size) auto var(--field-size);
`;
