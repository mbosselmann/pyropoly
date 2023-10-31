import { useGameData } from "@/context";

export default function FieldAction({
  playerLocationOfCurrentPlayer,
  onNextPlayer,
}: {
  playerLocationOfCurrentPlayer: number | undefined;
  onNextPlayer: () => void;
}) {
  const { fields } = useGameData();

  const fieldOfCurrentPlayer = fields
    ?.flatMap((field) => field)
    ?.find((field) => field.fieldNumber === playerLocationOfCurrentPlayer);

  return (
    <section>
      <h2>{fieldOfCurrentPlayer?.name ?? ""}</h2>
      <p>{fieldOfCurrentPlayer?.message ?? ""}</p>
      <button type="button" onClick={onNextPlayer}>
        I am done. Next player!
      </button>
    </section>
  );
}
