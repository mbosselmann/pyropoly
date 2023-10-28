import styled from "styled-components";
import { AVATAR_MAP } from "./AvatarIcons";
import { ScreenReaderOnly } from "./ScreenReaderOnly";

const Player = styled.article`
  font-size: 0.7rem;
  width: 5rem;
  display: grid;
  place-items: center;
  position: relative;

  & h2 {
    font-size: inherit;
    margin: 0;
  }
`;

const AvatarWrapper = styled.div<{
  $color?: string;
  $currentPlayer: boolean;
}>`
  border: ${({ $currentPlayer }) =>
    $currentPlayer ? "3px solid black" : "3px solid lightgrey"};
  border-radius: 0.5rem;
  background-color: ${({ $color }) =>
    $color ? $color : "rgba(232, 231, 231, 0.75)"};
  width: 50px;
  height: 50px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
`;

type PlayerPreviewCardProps = {
  name: string;
  id: string;
  username?: string;
  color?: string;
  currentPlayer: number;
  onPlayerDetailsId: () => void;
};

export default function PlayerPreviewCard({
  name,
  id,
  username,
  color,
  currentPlayer,
  onPlayerDetailsId,
}: PlayerPreviewCardProps) {
  return (
    <Player>
      <AvatarWrapper
        $color={color}
        $currentPlayer={Number(id) === currentPlayer}
      >
        {AVATAR_MAP[name.toLowerCase()]}
      </AvatarWrapper>
      <h2>{username ? username : name}</h2>
      <Button onClick={onPlayerDetailsId} type="button">
        <ScreenReaderOnly>Details</ScreenReaderOnly>
      </Button>
    </Player>
  );
}
