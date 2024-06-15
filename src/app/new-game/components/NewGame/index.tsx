"use client";

import styles from "./styles.module.css";
import Form from "@/app/new-game/components/Form";
import { useGameData } from "@/context";
import { Avatar } from "@/types/Avatar";
import PlayerCard from "@/app/board/components/Player/PlayerCard";

export default function NewGame() {
  const { user }: { user: Avatar } = useGameData();

  return (
    <section className={styles.section}>
      <div className={styles["current-state"]}>
        {user && (
          <PlayerCard
            selectedAvatar={user.name}
            selectedColor={user?.color}
            userName={user?.username}
          />
        )}
      </div>
      <Form />
    </section>
  );
}
