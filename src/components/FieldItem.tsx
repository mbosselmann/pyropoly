import styled, { css } from "styled-components";
import GameFigure from "./GameFigure";

export default function FieldItem({
  name,
  fieldNumber,
  variant,
}: {
  name: string;
  fieldNumber: number;
  variant: string;
}) {
  const selectedPlayers = [
    {
      id: "1",
      name: "Bailey",
      playerLocation: 0,
      isSelected: true,
      isOpponent: false,
      username: "Silent Parrot",
      color: "#009efa",
    },
    {
      id: "2",
      name: "Boots",
      playerLocation: 0,
      isSelected: false,
      isOpponent: true,
    },
    {
      id: "3",
      name: "Caspar",
      playerLocation: 0,
      isSelected: false,
      isOpponent: true,
    },
    {
      id: "5",
      name: "Chester",
      playerLocation: 0,
      isSelected: false,
      isOpponent: true,
    },
  ];

  return (
    <ListItem variant={variant}>
      <ColorBox />
      <Name variant={variant}>
        {name} <span>Price</span>
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
    </ListItem>
  );
}

const ListItem = styled.li<{ variant: string }>`
  outline: 3px solid hotpink;
  display: grid;
  position: relative;
  ${({ variant }) =>
    (variant === "horizontal-top" || variant === "horizontal-bottom") &&
    css`
      grid-template-rows: 1fr 2fr 1fr;
    `}

  ${({ variant }) =>
    (variant === "vertical-right" || variant === "vertical-left") &&
    css`
      grid-template-columns: 1fr 2fr 1fr;
    `}
`;

const Name = styled.p<{ variant: string }>`
  outline: 3px solid red;
  padding: 0.4rem;
  word-wrap: break-word;
  white-space: normal;
  margin: 0;

  ${({ variant }) =>
    variant === "vertical-left" &&
    css`
      transform: rotate(90deg);
    `}

  ${({ variant }) =>
    variant === "vertical-right" &&
    css`
      transform: rotate(270deg);
    `}
`;

const Wrapper = styled.div`
  outline: 3px solid blue;
  position: absolute;
`;

const ColorBox = styled.div`
  background-color: black;
`;
