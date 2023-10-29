import { createContext, useContext, useReducer } from "react";
import { avatars, colors, fields } from "@/data/db";
import gameReducer from "./reducer";
import type { Avatar } from "./types/Avatar";
import type { Field } from "./types/Field";
import type { Color } from "./types/Color";

const GameContext = createContext<{
  players: Avatar[];
  currentPlayer: number;
  user: Avatar;
  selectedPlayers: Avatar[];
  fields: Field[][];
  colors: Color[];
}>({
  players: avatars,
  currentPlayer: NaN,
  user: avatars[3],
  selectedPlayers: [],
  fields: fields,
  colors: colors,
});

const GameDispatchContext = createContext<React.Dispatch<any>>(() => null);

export function PlayersProvider({ children }: { children: React.ReactNode }) {
  const initialState = {
    players: avatars,
    currentPlayer: Number(avatars[0].id),
  };

  const [{ players, currentPlayer }, dispatch] = useReducer(
    gameReducer,
    initialState
  );

  const value = {
    players,
    currentPlayer,
    user: players.find((player) => player.isSelected) ?? avatars[3],
    selectedPlayers: players.filter(
      (player) => player.isSelected || player.isOpponent
    ),
    fields,
    colors,
  };

  return (
    <GameContext.Provider value={value}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}

export function useGameData() {
  return useContext(GameContext);
}

export function useGameDispatch() {
  return useContext(GameDispatchContext);
}
