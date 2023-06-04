import styled from "styled-components";
import { AVATAR_MAP } from "@/components/AvatarIcons";
import type { Color } from "@/types/Color";

const AvatarIcon = styled.div<{ selectedColor: string }>`
  width: 200px;
  height: 200px;
  background-color: ${({ selectedColor }) =>
    selectedColor ? selectedColor : "rgba(232, 231, 231, 0.75)"};
  border-radius: 0.5rem 0.5rem 0 0;
`;

const Article = styled.article`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 18px 0px rgba(158, 158, 158, 0.75);
`;

const List = styled.ul`
  list-style: none;
  padding: 0.3rem 1rem;
`;

interface PlayerProps {
  selectedAvatar: string;
  selectedColor: string;
  userName: string;
  colors: Color[];
}

export default function Player({
  selectedAvatar,
  selectedColor,
  userName,
  colors,
}: PlayerProps) {
  return (
    <Article>
      <AvatarIcon selectedColor={selectedColor}>
        {AVATAR_MAP[selectedAvatar.toLowerCase()]}
      </AvatarIcon>
      <List role="list">
        <li>Name: {userName}</li>
        <li>
          Color:{" "}
          {colors.find((color) => color.code === selectedColor)?.name ??
            "No color selected"}
        </li>
      </List>
    </Article>
  );
}
