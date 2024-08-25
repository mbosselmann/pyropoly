import styles from "./styles.module.css";
import { useGameDispatch } from "@/context";
import ActionArea from "../ActionArea";
import DiceArea from "../DiceArea";
import CardArea from "../CardArea";
import { Avatar } from "@/types/Avatar";
import { useState } from "react";
import PlayerDetailsCard from "../../../Player/PlayerDetailsCard/PlayerDetailsCard";

const min = 1;
const max = 24;

function getRandom(max: number, min: number) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}

function getDiceFace(rotation: { x: number; y: number }): number {
  let { x, y } = rotation;
  x = x % 360;
  y = y % 360;
  console.log(x, y);
  if (x === 0 && y === 0) return 1;
  if (x === 180 && y === 180) return 1;
  if (x === 180 && y === 0) return 2;
  if (x === 0 && y === 180) return 2;
  if (x === 180 && y === 90) return 3;
  if (x === 0 && y === 270) return 3;
  if (x === 0 && y === 90) return 4;
  if (x === 180 && y === 270) return 4;
  if (x === 270 && y === 180) return 5;
  if (x === 270 && y === 90) return 5;
  if (x === 270 && y === 270) return 5;
  if (x === 270 && y === 0) return 5;
  if (x === 90 && y === 180) return 6;
  if (x === 90 && y === 90) return 6;
  if (x === 90 && y === 0) return 6;
  if (x === 90 && y === 270) return 6;

  return 0;
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
  const [number, setNumber] = useState<number>(0);
  const [diceRotation, setDiceRotation] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [diceResult, setDiceResult] = useState<number[]>([0, 0]);
  const [hasRolled, setHasRolled] = useState<boolean>(false);

  function handleNextPlayer() {
    dispatch({ type: "setNextPlayer" });
    setHasRolled(false);
    setNumber(0);
  }

  function handleResult() {
    const newRotation = [...diceRotation];
    newRotation[0] = { x: getRandom(max, min), y: getRandom(max, min) };
    newRotation[1] = { x: getRandom(max, min), y: getRandom(max, min) };
    setDiceRotation(newRotation);
    const newResult = [...diceResult];
    newResult[0] = getDiceFace(newRotation[0]);
    newResult[1] = getDiceFace(newRotation[1]);
    console.log(newResult);
    setDiceResult(newResult);
    dispatch({
      type: "updatePlayerLocation",
      value: newResult[0] + newResult[1],
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
            diceResult={number}
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
