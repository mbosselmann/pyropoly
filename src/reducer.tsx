import type { Avatar } from "./types/Avatar";
import { avatars } from "./db";

type PlayersActions = {
  key: string;
  value: string;
  type:
    | "updateUser"
    | "updateOpponents"
    | "updatePlayerLocation"
    | "setNextPlayer";
};

export default function playersReducer(
  state: { players: Avatar[]; currentPlayer: number },
  action: PlayersActions
): { players: Avatar[]; currentPlayer: number } {
  switch (action.type) {
    case "setNextPlayer": {
      const selectedPlayers = state.players.filter(
        (player) => player.isSelected || player.isOpponent
      );
      const findCurrentPlayerIndex = selectedPlayers.findIndex(
        (player) => Number(player.id) === state.currentPlayer
      );
      const nextPlayer = Number(
        selectedPlayers[
          selectedPlayers.length - 1 === findCurrentPlayerIndex
            ? 0
            : findCurrentPlayerIndex + 1
        ].id
      );
      return { currentPlayer: nextPlayer, players: state.players };
    }
    case "updateUser": {
      if (action.key === "name") {
        const oldUserAvatar = state.players.find((player) => player.isSelected);
        const newUserAvatar = state.players.find(
          (player) => player.name === action.value
        );

        if (newUserAvatar) {
          const updatedPlayers = state.players.map((player, index) =>
            player.id === newUserAvatar.id
              ? {
                  ...oldUserAvatar,
                  ...newUserAvatar,
                  isSelected: true,
                  username: oldUserAvatar?.username ?? "Silent Parrot",
                }
              : avatars[index]
          );
          return {
            currentPlayer: state.currentPlayer,
            players: updatedPlayers,
          };
        }
      }
      const updatedPlayers = state.players.map((player) =>
        player.isSelected ? { ...player, [action.key]: action.value } : player
      );
      return {
        currentPlayer: state.currentPlayer,
        players: updatedPlayers,
      };
    }
    case "updateOpponents": {
      const updatedPlayers = state.players.map((player) => {
        if (player.id === action.value) {
          return { ...player, isOpponent: !player.isOpponent };
        }
        return player;
      });
      return { currentPlayer: state.currentPlayer, players: updatedPlayers };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
