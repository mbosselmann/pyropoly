import styled from "styled-components";
import { AVATAR_MAP } from "@/components/Player/AvatarIcons";
import { useGameData } from "@/context";
import { Color } from "@/types/Color";

const AvatarIcon = styled.div<{ $selectedColor: string | undefined }>`
  height: 220px;
  background-color: ${({ $selectedColor }) =>
    $selectedColor ? $selectedColor : "rgba(232, 231, 231, 0.75)"};
  border-radius: 0.5rem 0.5rem 0 0;
`;

const Article = styled.article`
  width: 220px;
  height: 280px;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 18px 0px rgba(158, 158, 158, 0.75);
`;

const List = styled.ul`
  list-style: none;
  padding: 0.3rem 1rem;

  li {
    text-align: center;
  }
`;

interface PlayerProps {
  selectedAvatar: string;
  selectedColor?: string;
  userName?: string;
}

export default function PlayerCard({
  selectedAvatar,
  selectedColor,
  userName,
}: PlayerProps) {
  const { colors }: { colors: Color[] } = useGameData();

  return (
    <Article>
      <AvatarIcon $selectedColor={selectedColor}>
        {AVATAR_MAP[selectedAvatar.toLowerCase()]}
      </AvatarIcon>
      <List role="list">
        <li>
          <strong>{userName ?? "SilentParrot"}</strong>
        </li>
        <li>
          Color:{" "}
          {colors.find((color) => color.code === selectedColor)?.name ??
            "No color selected"}
        </li>
      </List>
    </Article>
  );
}
