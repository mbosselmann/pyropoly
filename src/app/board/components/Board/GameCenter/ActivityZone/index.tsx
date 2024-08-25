import styles from "./styles.module.css";
import { useGameDispatch } from "@/context";
import ActionArea from "../ActionArea";
import DiceArea from "../DiceArea";
import CardArea from "../CardArea";
import { Avatar } from "@/types/Avatar";
import { useState } from "react";
import PlayerDetailsCard from "../../../Player/PlayerDetailsCard/PlayerDetailsCard";

function getDiceFace(number: number): { x: number; y: number } {
  if (number === 1) return { x: 0, y: 0 };
  if (number === 2) return { x: 0, y: 180 };
  if (number === 3) return { x: 0, y: 270 };
  if (number === 4) return { x: 0, y: 90 };
  if (number === 5) return { x: 270, y: 0 };
  if (number === 6) return { x: 90, y: 0 };
  throw new Error("Invalid dice number");
}

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
  const [diceRotation, setDiceRotation] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [diceResult, setDiceResult] = useState<number[]>([0, 0]);
  const [hasRolled, setHasRolled] = useState<boolean>(false);

  function handleNextPlayer() {
    dispatch({ type: "setNextPlayer" });
    setHasRolled(false);
    setDiceResult([0, 0]);
  }

  function handleResult() {
    const newDiceResult = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDiceResult(newDiceResult);
    console.log(newDiceResult);
    const newRotation = [
      getDiceFace(newDiceResult[0]),
      getDiceFace(newDiceResult[1]),
    ].map((rotation) => ({
      x: rotation.x + 360 * Math.floor(Math.random() * 6),
      y: rotation.y + 360 * Math.floor(Math.random() * 6),
    }));

    setDiceRotation(newRotation);

    dispatch({
      type: "updatePlayerLocation",
      value: newDiceResult[0] + newDiceResult[1],
    });
    setHasRolled(true);
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
            diceResult={diceResult[0] + diceResult[1]}
            hasRolled={hasRolled}
            handleNextPlayer={handleNextPlayer}
            rollDice={handleResult}
            playerLocationOfCurrentPlayer={playerLocationOfCurrentPlayer}
          />
          <DiceArea rotations={diceRotation} />
          <CardArea />
        </div>
      )}
    </>
  );
}
