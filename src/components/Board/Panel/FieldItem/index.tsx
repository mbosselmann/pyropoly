import styled, { css } from "styled-components";
import styles from "./ColorBox.module.css";
import GameFigure from "./GameFigure";
import { useGameData } from "@/context";
import Chance from "../../../Icons/Chance";
import Chest from "../../../Icons/Chest";
import { Avatar } from "@/types/Avatar";
import { Price } from "./Price";
import { FieldName as Name } from "./FieldName";
import { ColorBox } from "./ColorBox";

const ListItem = styled.li<{ $variant: string; $fieldType: string }>`
  border: 4px solid hotpink;
  border-width: 2px 4px;
  position: relative;

  ${({ $variant }) =>
    ($variant === "horizontal-top" || $variant === "horizontal-bottom") &&
    css`
      border-width: 4px 2px;

      &:first-child,
      :last-child {
        border-width: 4px;
      }
    `}

  & svg {
    width: 40px;
    height: 40px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  z-index: 3;
`;

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
    <ListItem $variant={variant} $fieldType={type}>
      {color &&
        (variant === "vertical-right" || variant === "horizontal-bottom") && (
          <ColorBox $color={color} $variant={variant} />
        )}
      <Name $variant={variant} $fieldType={type}>
        {name}
      </Name>
      {type === "chance" && <Chance />}
      {type === "chest" && <Chest />}
      <Wrapper>
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
      </Wrapper>
      {price && <Price $variant={variant}>{price} 💎</Price>}
      {color &&
        (variant === "vertical-left" || variant === "horizontal-top") && (
          <ColorBox $color={color} $variant={variant} />
        )}
    </ListItem>
  );
}
