import styles from "./styles.module.css";
import priceStyles from "./Price.module.css";
import colorBoxStyles from "./ColorBox.module.css";
import GameFigure from "./GameFigure/GameFigure";
import { useGameData } from "@/context";
import Chance from "../../../Icons/Chance";
import Chest from "../../../Icons/Chest";
import { Avatar } from "@/types/Avatar";
import { FieldName as Name } from "./FieldName";

export default function FieldItem({
  name,
  fieldNumber,
  variant,
  color,
  type,
  price,
}: {
  name: string;
  fieldNumber: number;
  variant: string;
  type: string;
  color?: string;
  price?: number;
}) {
  const {
    selectedPlayers,
    currentPlayer,
  }: { selectedPlayers: Avatar[]; currentPlayer: number } = useGameData();

  return (
    <li className={`${styles["list-item"]} ${styles[variant]}`}>
      {color && (
        <div
          className={`${colorBoxStyles["color-box"]} ${colorBoxStyles[variant]} ${colorBoxStyles[color]}`}
        />
      )}
      <Name $variant={variant} $fieldType={type}>
        {name}
      </Name>
      {type === "chance" && <Chance />}
      {type === "chest" && <Chest />}
      <div className={styles.wrapper}>
        {selectedPlayers &&
          selectedPlayers
            .filter((player) => player.isSelected || player.isOpponent)
            .map(
              ({ playerLocation, id, name, username, color }) =>
                playerLocation === fieldNumber && (
                  <GameFigure
                    key={id}
                    name={username ?? name}
                    color={color ?? "black"}
                    isCurrentPlayer={Number(id) === currentPlayer}
                  />
                )
            )}
      </div>
      {price && (
        <p className={`${priceStyles.paragraph} ${priceStyles[variant]}`}>
          {price} 💎
        </p>
      )}
    </li>
  );
}
