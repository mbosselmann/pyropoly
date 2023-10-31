import { useState } from "react";
import styled from "styled-components";
import { useGameData, useGameDispatch } from "@/context";
import FieldActions from "./FieldActions";
import Chance from "./Icons/Chance";
import Chest from "./Icons/Chest";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 5fr 2fr;
`;

const CardSection = styled.section`
  align-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  height: 100%;
`;

const CardBorder = styled.div`
  border: 5px dotted hotpink;
  width: 80%;
  height: 90%;
  padding: 0.5rem;
`;

const Card = styled.div`
  border: 3px outset #f47aa6;
  display: grid;
  place-items: center;
  border-radius: 5px;
  background-color: #ffc8dd;
  height: 100%;
  box-shadow: 0 0 20px inset #ffafcc;

  & svg {
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 0 20px white);
  }
`;

export default function PlayerActions({
  playerLocationOfCurrentPlayer,
}: {
  playerLocationOfCurrentPlayer: number | undefined;
}) {
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
            <FieldActions
              playerLocationOfCurrentPlayer={playerLocationOfCurrentPlayer}
              onNextPlayer={handleNextPlayer}
            />
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
        <CardBorder>
          <Card>
            <Chest />
          </Card>
        </CardBorder>
        <CardBorder>
          <Card>
            <Chance />
          </Card>
        </CardBorder>
      </CardSection>
    </Wrapper>
  );
}
