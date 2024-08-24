"use client";

import "@/styles.css";
import "@/themes.styles.css";
import BackLink from "@/components/BackLink";
import { ReactNode } from "react";
import { Avatar } from "@/types/Avatar";
import { useGameData, useGameDispatch } from "@/context";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/navigation";

export default function BoardLayout({ children }: { children: ReactNode }) {
  const {
    selectedPlayers,
    currentPlayer,
  }: { selectedPlayers: Avatar[]; currentPlayer: number } = useGameData();
  const dispatch = useGameDispatch();
  const router = useRouter();

  const [, setPlayerData] = useLocalStorageState("playerData");

  function handleSave(withReturn: boolean = false) {
    setPlayerData({ selectedPlayers, currentPlayer });

    if (withReturn) {
      router.push("/");
    }
  }

  function handleDelete() {
    setPlayerData(null);
    dispatch({ type: "resetGame" });
    router.push("/");
  }

  return (
    <main>
      <header>
        <button type="button" onClick={() => handleSave(false)}>
          SAVE
        </button>
        <button type="button" onClick={() => handleSave(true)}>
          SAVE AND RETURN
        </button>
        <button type="button" onClick={handleDelete}>
          GIVE UP AND RETURN
        </button>
        <BackLink color={"light"} />
      </header>
      {children}
    </main>
  );
}
