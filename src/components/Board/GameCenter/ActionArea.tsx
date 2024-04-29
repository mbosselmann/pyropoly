import { useState } from "react";
import styled from "styled-components";
import { useGameData, useGameDispatch } from "@/context";
import FieldActions from "../FieldActions";
import { Avatar } from "@/types/Avatar";

export default function ActionArea({
  playerLocationOfCurrentPlayer,
}: {
  playerLocationOfCurrentPlayer: number | undefined;
}) {
  const {
    selectedPlayers,
    currentPlayer,
  }: { selectedPlayers: Avatar[]; currentPlayer: number } = useGameData();
  const dispatch = useGameDispatch();
  const [number, setNumber] = useState<number>(0);
  const [hasRolled, setHasRolled] = useState<boolean>(false);

  const currentPlayerObject: Avatar | undefined = selectedPlayers.find(
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
    <>
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
    </>
  );
}
