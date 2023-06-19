import type { AppProps } from "next/app";
import { useState } from "react";
import { fields } from "../db";
import { avatars } from "@/db";
import { colors } from "@/db";
import GlobalStyles from "../../styles";
import { Avatar } from "@/types/Avatar";

export default function App({ Component, pageProps }: AppProps) {
  const [players, setPlayers] = useState(avatars);
  const [currentFieldMessage, setCurrentFieldMessage] = useState(
    findMessage(0) ?? ""
  );
  const [currentPlayer, setCurrentPlayer] = useState(players[0].id);

  function updateUser(key: string, value: string) {
    if (key === "name") {
      const oldUserAvatar: Avatar | undefined = players.find(
        (player) => player.isSelected
      );
      const newUserAvatar = players.find((player) => player.name === value);
      if (newUserAvatar) {
        return setPlayers(
          players.map((player, index) =>
            player.id === newUserAvatar.id
              ? {
                  ...oldUserAvatar,
                  ...newUserAvatar,
                  isSelected: true,
                  username: oldUserAvatar?.username ?? "Silent Parrot",
                }
              : avatars[index]
          )
        );
      }
    }

    return setPlayers(
      players.map((player) =>
        player.isSelected ? { ...player, [key]: value } : player
      )
    );
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
        updateUser={updateUser}
        user={players.find((player) => player.isSelected) ?? avatars[3]}
      />
    </>
  );
}
