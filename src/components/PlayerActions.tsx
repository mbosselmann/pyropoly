import { useState } from "react";
import { useGameData, useGameDispatch } from "@/context";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
`;

const CardSection = styled.section`
  align-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  height: 5rem;
  border: 5px solid black;
`;

export default function PlayerActions({
  playerLocationOfCurrentPlayer,
}: {
  playerLocationOfCurrentPlayer: number | undefined;
}) {
  const { fields } = useGameData();

  const fieldOfCurrentPlayer = fields
    ?.flatMap((field) => field)
    ?.find((field) => field.fieldNumber === playerLocationOfCurrentPlayer);

  const { currentPlayer, selectedPlayers } = useGameData();
  const dispatch = useGameDispatch();
  const [number, setNumber] = useState(0);
  const [hasRolled, setHasRolled] = useState(false);

  const currentPlayerObject = selectedPlayers.find(
    (player) => Number(player.id) === currentPlayer
  );

  function rollDice() {
    const newNumber = Math.floor(Math.random() * 3 + 1);
    setNumber(newNumber);
    dispatch({ type: "updatePlayerLocation", value: newNumber });
    setHasRolled(true);
  }

  function handleNextPlayer() {
    dispatch({ type: "setNextPlayer" });
    setHasRolled(false);
    setNumber(0);
  }

  return (
    <Wrapper>
      {currentPlayer && (
        <section>
          {hasRolled ? (
            <section>
              <h2>{fieldOfCurrentPlayer?.name ?? ""}</h2>
              <p>{fieldOfCurrentPlayer?.message ?? ""}</p>
              <button type="button" onClick={handleNextPlayer}>
                I am done. Next player!
              </button>
            </section>
          ) : (
            <section>
              <h2>Current player:</h2>
              {currentPlayerObject ? (
                <p>
                  {currentPlayerObject?.username ?? currentPlayerObject?.name}
                </p>
              ) : (
                <p>You must first select players for your game.</p>
              )}
              <p>
                Dice:
                {number === 0 ? "You need to roll the dice first." : number}
              </p>
              <button type="button" onClick={rollDice}>
                Roll the Dice!
              </button>
            </section>
          )}
        </section>
      )}
      <CardSection>
        <p>Chest</p>
        <p>Chance</p>
      </CardSection>
    </Wrapper>
  );
}
