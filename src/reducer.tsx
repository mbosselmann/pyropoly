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
  state: { players: Avatar[]; currentPlayer: string },
  action: PlayersActions
): { players: Avatar[]; currentPlayer: string } {
  switch (action.type) {
    case "setNextPlayer": {
      const findNextPlayer: number =
        state.players &&
        Number(
          state.players.findIndex((player) => player.id === state.currentPlayer)
        ) + 1;
      const nextPlayer: string = state.players
        ? state.players[findNextPlayer].id
        : state.players[0]["id"];
      return { currentPlayer: nextPlayer, players: state.players };
    }
    case "updateUser": {
      if (action.key === "name") {
        const oldUserAvatar = state.players.find((player) => player.isSelected);
        const newUserAvatar = state.players.find(
          (player) => player.name === action.value
        );
        console.log("old", oldUserAvatar);
        console.log("new", newUserAvatar);

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
          console.log(updatedPlayers);
          return {
            currentPlayer: state.currentPlayer,
            players: updatedPlayers,
          };
        }
      }
      const updatedPlayers = state.players.map((player) =>
        player.isSelected ? { ...player, [action.key]: action.value } : player
      );
      console.log(updatedPlayers);
      return {
        currentPlayer: state.currentPlayer,
        players: updatedPlayers,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
