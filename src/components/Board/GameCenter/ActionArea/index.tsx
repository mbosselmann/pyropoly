import { useGameData } from "@/context";
import FieldActions from "../../FieldActions";
import { Avatar } from "@/types/Avatar";

export default function ActionArea({
  playerLocationOfCurrentPlayer,
  hasRolled,
  diceResult,
  handleNextPlayer,
  rollDice,
}: {
  playerLocationOfCurrentPlayer: number | undefined;
  hasRolled: boolean;
  diceResult: number;
  handleNextPlayer: () => void;
  rollDice: () => void;
}) {
  const {
    selectedPlayers,
    currentPlayer,
  }: { selectedPlayers: Avatar[]; currentPlayer: number } = useGameData();

  const currentPlayerObject: Avatar | undefined = selectedPlayers.find(
    (player) => Number(player.id) === currentPlayer
  );

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
                {diceResult === 0
                  ? "You need to roll the dice first."
                  : diceResult}
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
