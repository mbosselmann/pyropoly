import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { fields } from "@/data/fields";
import { themes } from "@/data/colors";
import { avatars } from "@/data/avatars";
import gameReducer from "./reducer";
import type { Avatar } from "./types/Avatar";
import type { Field } from "./types/Field";
import type { Color } from "./types/Color";
import useLocalStorageState from "use-local-storage-state";

export type PlayerData = {
  selectedPlayers: Avatar[];
  currentPlayer: number;
  selectedColorTheme: Color[];
};

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
  const [playerData, setPlayerData] = useLocalStorageState<PlayerData>(
    "playerData",
    {
      defaultValue: {
        selectedPlayers: avatars,
        currentPlayer: NaN,
        selectedColorTheme: themes[0],
      },
    }
  );

  const initialState = useMemo(
    () => ({
      players: playerData.selectedPlayers,
      currentPlayer: playerData.currentPlayer,
      colors: themes[0],
      isInitial: true,
    }),
    [playerData.currentPlayer, playerData.selectedPlayers]
  );

  const [{ players, currentPlayer, colors, isInitial }, dispatch] = useReducer(
    gameReducer,
    initialState
  );

  const selectedPlayers = players.filter(
    (player) => player.isSelected || player.isOpponent
  );

  useEffect(() => {
    dispatch({
      type: "initialize",
      initialState,
    });
  }, [initialState]);

  useEffect(() => {
    if (!isInitial) {
      setPlayerData({
        selectedPlayers,
        currentPlayer,
        selectedColorTheme: colors,
      });
    }
  }, [
    players,
    currentPlayer,
    colors,
    setPlayerData,
    isInitial,
    selectedPlayers,
  ]);

  const value = {
    players,
    currentPlayer: currentPlayer ?? playerData.currentPlayer,
    user: players.find((player) => player.isSelected) ?? avatars[3],
    selectedPlayers: selectedPlayers ?? [],
    fields,
    colors: colors,
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
