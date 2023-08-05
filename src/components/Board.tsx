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
