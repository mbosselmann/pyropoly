import { useGameDispatch } from "@/context";
import styled from "styled-components";
import PlayerDetailsCard from "../../Player/PlayerDetailsCard";
import ActionArea from "./ActionArea";
import DiceArea from "./DiceArea";
import CardArea from "./CardArea";
import { Avatar } from "@/types/Avatar";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr 2fr;
`;

export default function ActivityZone({
  player,
  onClosePlayerDetails,
  playerLocationOfCurrentPlayer,
}: {
  player: Avatar | null;
  onClosePlayerDetails: () => void;
  playerLocationOfCurrentPlayer: number | undefined;
}) {
  const dispatch = useGameDispatch();
  const [number, setNumber] = useState<number>(0);
  const [hasRolled, setHasRolled] = useState<boolean>(false);

  function rollDice() {
    const newNumber = Math.floor(Math.random() * 6 + 1);
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
      {player !== null ? (
        <PlayerDetailsCard
          player={player}
          onClosePlayerDetails={onClosePlayerDetails}
        />
      ) : (
        <Wrapper>
          <ActionArea
            diceResult={number}
            hasRolled={hasRolled}
            handleNextPlayer={handleNextPlayer}
            rollDice={rollDice}
            playerLocationOfCurrentPlayer={playerLocationOfCurrentPlayer}
          />
          <DiceArea />
          <CardArea />
        </Wrapper>
      )}
    </>
  );
}
