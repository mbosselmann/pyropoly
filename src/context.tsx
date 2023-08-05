import { createContext, useContext, useReducer } from "react";
import { avatars } from "@/db";
import { Avatar } from "@/types/Avatar";
import playersReducer from "./reducer";

const PlayersContext = createContext<{
  players: Avatar[];
  currentPlayer: number;
  user: Avatar;
  selectedPlayers: Avatar[];
}>({
  players: avatars,
  currentPlayer: NaN,
  user: avatars[3],
  selectedPlayers: [],
});

const PlayersDispatchContext = createContext<React.Dispatch<any>>(() => null);

export function PlayersProvider({ children }: { children: React.ReactNode }) {
  const initialState = {
    players: avatars,
    currentPlayer: Number(avatars[0].id),
  };

  const [{ players, currentPlayer }, dispatch] = useReducer(
    playersReducer,
    initialState
  );

  const value = {
    players,
    currentPlayer,
    user: players.find((player) => player.isSelected) ?? avatars[3],
    selectedPlayers: players.filter(
      (player) => player.isSelected || player.isOpponent
    ),
  };

  return (
    <PlayersContext.Provider value={value}>
      <PlayersDispatchContext.Provider value={dispatch}>
        {children}
      </PlayersDispatchContext.Provider>
    </PlayersContext.Provider>
  );
}

export function usePlayers() {
  return useContext(PlayersContext);
}

export function usePlayersDispatch() {
  return useContext(PlayersDispatchContext);
}
