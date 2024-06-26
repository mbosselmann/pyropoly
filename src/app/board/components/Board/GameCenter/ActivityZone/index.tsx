import styles from "./styles.module.css";
import { useGameDispatch } from "@/context";
import ActionArea from "../ActionArea";
import DiceArea from "../DiceArea";
import CardArea from "../CardArea";
import { Avatar } from "@/types/Avatar";
import { useState } from "react";
import PlayerDetailsCard from "../../../Player/PlayerDetailsCard/PlayerDetailsCard";

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
        <div className={styles.wrapper}>
          <ActionArea
            diceResult={number}
            hasRolled={hasRolled}
            handleNextPlayer={handleNextPlayer}
            rollDice={rollDice}
            playerLocationOfCurrentPlayer={playerLocationOfCurrentPlayer}
          />
          <DiceArea />
          <CardArea />
        </div>
      )}
    </>
  );
}
