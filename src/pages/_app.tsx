import type { AppProps } from "next/app";
import { useState } from "react";
import { fields } from "../db";
import { avatars } from "@/db";
import { colors } from "@/db";
import GlobalStyles from "../../styles";
import { Avatar } from "@/types/Avatar";

export default function App({ Component, pageProps }: AppProps) {
  const [players, setPlayers] = useState<Avatar[]>(avatars);
  const [currentFieldMessage, setCurrentFieldMessage] = useState(
    findMessage(0) ?? ""
  );
  const [currentPlayer, setCurrentPlayer] = useState(players[0].id);
  const [userName, setUserName] = useState("Silent Parrot");
  const [selectedAvatar, setSelectedAvatar] = useState("charlie");
  const [selectedColor, setSelectedColor] = useState("");

  function updateSelectedAvatar(name: string) {
    setSelectedAvatar(name);
  }

  function updateSelectedColor(colorCode: string) {
    setSelectedColor(colorCode);
  }

  function updateUserName(name: string) {
    setUserName(name);
  }

  function findMessage(fieldNumber: number) {
    return fields
      ?.flatMap((field) => field)
      ?.find((field) => field.fieldNumber === fieldNumber)?.message;
  }

  function updatePlayerLocation(diceNumber: number) {
    const updatedPlayers = players.map((player) =>
      player.id === currentPlayer
        ? {
            ...player,
            playerLocation: (player.playerLocation + diceNumber) % 16,
          }
        : player
    );
    const indexOfCurrentPlayer = updatedPlayers.findIndex(
      (player) => player.id === currentPlayer
    );
    setPlayers(updatedPlayers);
    setCurrentFieldMessage(
      findMessage(updatedPlayers[indexOfCurrentPlayer].playerLocation) ?? ""
    );
  }

  function setNextPlayer() {
    const findNextPlayer = players.findIndex(
      (player) => player.id === currentPlayer
    );
    setCurrentPlayer(players[findNextPlayer + 1]?.id ?? players[0].id);
  }

  function updateOpponents(opponentId: string) {
    setPlayers(
      players.map((player) =>
        player.id === opponentId
          ? { ...player, isOpponent: !player.isOpponent }
          : player
      )
    );
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        avatars={players}
        colors={colors}
        players={players.filter(
          (player) => player.isSelected || player.isOpponent
        )}
        fields={fields}
        updatePlayerLocation={updatePlayerLocation}
        currentFieldMessage={currentFieldMessage}
        currentPlayer={currentPlayer}
        setNextPlayer={setNextPlayer}
        updateOpponents={updateOpponents}
        updateSelectedAvatar={updateSelectedAvatar}
        updateSelectedColor={updateSelectedColor}
        updateUserName={updateUserName}
        userName={userName}
        selectedAvatar={selectedAvatar}
        selectedColor={selectedColor}
      />
    </>
  );
}
