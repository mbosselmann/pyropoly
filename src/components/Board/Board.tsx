import styled from "styled-components";
import Panel from "./Panel";
import GameCenter from "./GameCenter/GameCenter";
import { useGameData } from "@/context";
import { Field } from "@/types/Field";

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
  height: 100%;
  grid-template-columns: var(--field-size) auto var(--field-size);
`;

export default function Board() {
  const { fields }: { fields: Field[][] } = useGameData();

  return (
    <Container>
      <Panel fields={fields[0]} variant="horizontal-top" />
      <Grid>
        <Panel fields={fields[1]} variant="vertical-left" />
        <GameCenter />
        <Panel fields={fields[2]} variant="vertical-right" />
      </Grid>
      <Panel fields={fields[3]} variant="horizontal-bottom" />
    </Container>
  );
}
