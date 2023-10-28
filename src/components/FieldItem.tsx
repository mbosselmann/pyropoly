import styled, { css } from "styled-components";
import GameFigure from "./GameFigure";
import { useGameData } from "@/context";

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
  const { selectedPlayers } = useGameData();

  return (
    <ListItem $variant={variant} $fieldType={type}>
      {color &&
        (variant === "vertical-right" || variant === "horizontal-bottom") && (
          <ColorBox $color={color} $variant={variant} />
        )}
      <Name $variant={variant} $fieldType={type}>
        {name}
      </Name>
      <Wrapper>
        {selectedPlayers &&
          selectedPlayers
            .filter((player) => player.isSelected || player.isOpponent)
            .map(
              ({ playerLocation, id, name, username }) =>
                playerLocation === fieldNumber && (
                  <GameFigure key={id} name={username ?? name} />
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
`;

const Name = styled.p<{ $variant: string; $fieldType: string }>`
  word-wrap: break-all;
  white-space: normal;
  margin: 0;
  text-align: center;
  position: absolute;

  ${({ $variant }) =>
    $variant === "vertical-left" &&
    css`
      top: 0;
      right: 2rem;
      writing-mode: vertical-rl;
      height: 100%;
      padding-right: 0.4rem;
    `}

  ${({ $variant }) =>
    $variant === "vertical-right" &&
    css`
      transform: rotate(270deg);
      bottom: 0;
      top: 0;
      left: 2rem;
      right: 0;
      padding-top: 0.4rem;
    `}

    ${({ $variant, $fieldType }) =>
    $variant === "horizontal-bottom" &&
    css`
      top: 2rem;
      left: 0;
      right: 0;
      padding-top: 0.4rem;
      ${$fieldType === "jail" && "transform: rotate(315deg);"}
      ${$fieldType === "start" && "transform: rotate(45deg);"}
    `}

    ${({ $variant, $fieldType }) =>
    $variant === "horizontal-top" &&
    css`
      bottom: 2rem;
      left: 0;
      right: 0;
      transform: rotate(180deg);
      padding-top: 0.4rem;
      ${$fieldType === "jail" && "transform: rotate(135deg);"}
      ${$fieldType === "bonus" && "transform: rotate(225deg);"}
    `}
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

const ColorBox = styled.div<{ $color?: string; $variant: string }>`
  background-color: ${({ $color }) => $color ?? "black"};
  position: absolute;
  height: 1.5rem;
  bottom: 0;
  left: 0;
  width: 100%;

  ${({ $variant }) =>
    ($variant === "vertical-left" || $variant === "vertical-right") &&
    css`
      height: 100%;
      width: 1.5rem;
    `}

  ${({ $variant }) =>
    $variant === "vertical-left" &&
    css`
      right: 0;
      left: auto;
    `}

  ${({ $variant }) =>
    $variant === "horizontal-bottom" &&
    css`
      bottom: auto;
      top: 0;
    `}
`;

const Price = styled.p<{ $variant: string }>`
  margin: 0;
  position: absolute;
  text-align: center;
  width: fit-content;
  padding: 0.2rem;

  ${({ $variant }) =>
    $variant === "vertical-left" &&
    css`
      transform: rotate(90deg);
      top: 50%;
      left: -1.7rem;
      translate: 0 -50%;
      width: 4rem;
      height: 1.5rem;
    `}

  ${({ $variant }) =>
    $variant === "vertical-right" &&
    css`
      transform: rotate(270deg);
      top: 50%;
      right: -1.7rem;
      translate: 0 -50%;
      width: 4rem;
      height: 1.5rem;
    `}

    ${({ $variant }) =>
    $variant === "horizontal-bottom" &&
    css`
      bottom: 0;
      width: 100%;
    `}

    ${({ $variant }) =>
    $variant === "horizontal-top" &&
    css`
      top: 0;
      width: 100%;
      transform: rotate(180deg);
    `}
`;
