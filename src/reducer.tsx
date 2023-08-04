import { Avatar } from "./types/Avatar";

type PlayersActions = {
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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
