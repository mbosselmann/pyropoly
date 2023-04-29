import { useState } from "react";

interface GameCenterProps {
  updatePlayerLocation: (diceNumber: number) => void;
  fieldName: string;
  currentFieldMessage: string;
}

export default function GameCenter({
  updatePlayerLocation,
  fieldName,
  currentFieldMessage,
}: GameCenterProps) {
  const [number, setNumber] = useState(0);
  function rollDice() {
    const newNumber = Math.floor(Math.random() * 3 + 1);
    setNumber(newNumber);
    updatePlayerLocation(newNumber);
  }
  return (
    <section>
      <h2>{fieldName}</h2>
      <p>{currentFieldMessage}</p>
      {number}
      <button type="button" onClick={rollDice}>
        Würfeln!
      </button>
    </section>
  );
}
