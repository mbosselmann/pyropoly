import { useState } from "react";
import styled from "styled-components";
import Panel from "./Panel";
import GameCenter from "./GameCenter";
import type { Field } from "../types/Field";

export default function Board({ fields }: { fields: Field[][] }) {
  const [playerLocation, setPlayerLocation] = useState(0);
  const [currentFieldMessage, setCurrentFieldMessage] = useState(
    findMessage(0) ?? ""
  );

  function findMessage(fieldNumber: number) {
    return fields
      ?.flatMap((field) => field)
      ?.find((field) => field.fieldNumber === fieldNumber)?.message;
  }

  function updatePlayerLocation(diceNumber: number) {
    const newPlayerLocation = (playerLocation + diceNumber) % 16;
    setPlayerLocation(newPlayerLocation);
    setCurrentFieldMessage(findMessage(newPlayerLocation) ?? "");
  }
  return (
    <Container>
      <Panel
        fields={fields[0]}
        variant="horizontal"
        playerLocation={playerLocation}
      />
      <Grid>
        <Panel
          fields={fields[1]}
          variant="vertical"
          playerLocation={playerLocation}
        />
        <GameCenter
          fieldName={"Field"}
          updatePlayerLocation={updatePlayerLocation}
          currentFieldMessage={currentFieldMessage}
        />
        <Panel
          fields={fields[2]}
          variant="vertical"
          playerLocation={playerLocation}
        />
      </Grid>
      <Panel
        fields={fields[3]}
        variant="horizontal"
        playerLocation={playerLocation}
      />
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
