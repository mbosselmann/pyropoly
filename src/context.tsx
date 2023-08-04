import { createContext, useContext, useReducer } from "react";
import { avatars } from "@/db";
import { Avatar } from "@/types/Avatar";
import playersReducer from "./reducer";

const PlayersContext = createContext<{
  players: Avatar[];
  currentPlayer: string;
  user: Avatar;
}>({ players: avatars, currentPlayer: "", user: avatars[3] });

const PlayersDispatchContext = createContext<React.Dispatch<any>>(() => null);

export function PlayersProvider({ children }: { children: React.ReactNode }) {
  const initialState = {
    players: avatars,
    currentPlayer: avatars[0].id,
  };

  const [{ players, currentPlayer }, dispatch] = useReducer(
    playersReducer,
    initialState
  );

  const value = {
    players,
    currentPlayer,
    user: players?.find((player) => player.isSelected) ?? avatars[3],
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
