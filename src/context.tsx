import { createContext, useContext, useReducer } from "react";
import { avatars } from "@/db";
import { Avatar } from "@/types/Avatar";
import playersReducer from "./reducer";

const PlayersContext = createContext<{
  players: Avatar[] | null;
  currentPlayer: string;
  dispatch: React.Dispatch<any>;
}>({ players: null, currentPlayer: "", dispatch: () => null });

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

  return (
    <PlayersContext.Provider value={{ players, currentPlayer, dispatch }}>
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
