import styled from "styled-components";
import PlayerDetailsCard from "../../Player/PlayerDetailsCard";
import ActionArea from "./ActionArea";
import DiceArea from "./DiceArea";
import CardArea from "./CardArea";
import { Avatar } from "@/types/Avatar";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr 2fr;
`;

export default function ActivityZone({
  player,
  onClosePlayerDetails,
  playerLocationOfCurrentPlayer,
}: {
  player: Avatar | null;
  onClosePlayerDetails: () => void;
  playerLocationOfCurrentPlayer: number | undefined;
}) {
  return (
    <>
      {player !== null ? (
        <PlayerDetailsCard
          player={player}
          onClosePlayerDetails={onClosePlayerDetails}
        />
      ) : (
        <Wrapper>
          <ActionArea
            playerLocationOfCurrentPlayer={playerLocationOfCurrentPlayer}
          />
          <DiceArea />
          <CardArea />
        </Wrapper>
      )}
    </>
  );
}
