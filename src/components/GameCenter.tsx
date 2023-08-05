import { useGameData } from "@/context";

export default function GameCenter() {
  const { selectedPlayers, currentPlayer, fields } = useGameData();

  const playerLocationOfCurrentPlayer = selectedPlayers.find(
    (player) => Number(player.id) === currentPlayer
  )?.playerLocation;

  const fieldOfCurrentPlayer = fields
    ?.flatMap((field) => field)
    ?.find((field) => field.fieldNumber === playerLocationOfCurrentPlayer);
  console.log(fieldOfCurrentPlayer);
  return (
    <section>
      <h2>{fieldOfCurrentPlayer?.name ?? ""}</h2>
      <p>{fieldOfCurrentPlayer?.message ?? ""}</p>
    </section>
  );
}
