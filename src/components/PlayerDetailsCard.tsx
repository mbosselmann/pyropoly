import styled from "styled-components";
import { useGameData } from "@/context";
import { Avatar } from "@/types/Avatar";
import PlayerCard from "./PlayerCard";

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0px 0px 18px 0px rgba(158, 158, 158, 0.75);

  & :first-child {
    align-self: center;
  }
`;

type PlayerDetailsCardProps = {
  player: Avatar | undefined;
  onClosePlayerDetails: () => void;
};

export default function PlayerDetailsCard({
  player,
  onClosePlayerDetails,
}: PlayerDetailsCardProps) {
  const { fields } = useGameData();

  if (!player) {
    return null;
  }

  console.log(player);

  const getFieldName = (playerLocation: number) => {
    return fields
      ?.flatMap((field) => field)
      ?.find((field) => field.fieldNumber === playerLocation)?.name;
  };

  const { name, username, color, playerLocation, gems } = player;

  return (
    <Article>
      <PlayerCard
        selectedAvatar={name}
        selectedColor={color}
        userName={username ? username : name}
      />
      <div>
        <button type="button" onClick={onClosePlayerDetails}>
          Close
        </button>
        <h3>About {username ? username : name}:</h3>
        <p>
          On field: <strong>{getFieldName(playerLocation)}</strong>
        </p>
        <p>Gems: {gems} 💎</p>
      </div>
    </Article>
  );
}
