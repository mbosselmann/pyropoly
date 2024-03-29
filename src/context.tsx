import { createContext, useContext, useReducer } from "react";
import { fields } from "@/data/fields";
import { themes } from "@/data/colors";
import { avatars } from "@/data/avatars";
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
  colors: themes[0],
});

const GameDispatchContext = createContext<React.Dispatch<any>>(() => null);

export function PlayersProvider({ children }: { children: React.ReactNode }) {
  const initialState = {
    players: avatars,
    currentPlayer: Number(avatars[0].id),
    colors: themes[0],
  };

  const [{ players, currentPlayer, colors }, dispatch] = useReducer(
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
