import styles from "./styles.module.css";
import NewGameForm from "@/components/NewGame/NewGameForm/NewGameForm";
import PlayerCard from "@/components/Player/PlayerCard";
import { useGameData } from "@/context";
import { Avatar } from "@/types/Avatar";

export default function NewGame() {
  const { user }: { user: Avatar } = useGameData();

  return (
    <section className={styles.section}>
      <h2 className={styles.title} id="game-start">
        Start a new game:
      </h2>
      <div className={styles["current-state"]}>
        {user && (
          <PlayerCard
            selectedAvatar={user.name}
            selectedColor={user?.color}
            userName={user?.username}
          />
        )}
      </div>
      <NewGameForm />
    </section>
  );
}
