import { useGameData } from "@/context";
import { Field } from "@/types/Field";

export default function FieldAction({
  playerLocationOfCurrentPlayer,
  onNextPlayer,
}: {
  playerLocationOfCurrentPlayer: number | undefined;
  onNextPlayer: () => void;
}) {
  const { fields }: { fields: Field[][] } = useGameData();

  const fieldOfCurrentPlayer: Field | undefined = fields
    ?.flatMap((field) => field)
    ?.find((field) => field.fieldNumber === playerLocationOfCurrentPlayer);

  if (!fieldOfCurrentPlayer) return <p>Dudu.</p>;

  return (
    <section>
      <h2>{fieldOfCurrentPlayer.name ?? ""}</h2>
      <p>{fieldOfCurrentPlayer.message ?? ""}</p>
      <button type="button" onClick={onNextPlayer}>
        I am done. Next player!
      </button>
    </section>
  );
}
