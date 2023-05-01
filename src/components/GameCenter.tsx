interface GameCenterProps {
  fieldName: string;
  currentFieldMessage: string;
}

export default function GameCenter({
  fieldName,
  currentFieldMessage,
}: GameCenterProps) {
  return (
    <section>
      <h2>{fieldName}</h2>
      <p>{currentFieldMessage}</p>
    </section>
  );
}
