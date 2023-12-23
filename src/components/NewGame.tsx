import styled from "styled-components";
import NewGameForm from "@/components/NewGameForm";
import PlayerCard from "@/components/PlayerCard";
import { useGameData } from "@/context";

const Section = styled.section`
  display: grid;
  height: 100%;
  grid-template-areas: "title title title" "user-input form form" "user-input form form" "user-input form form";
`;

const Title = styled.h2`
  grid-area: title;
`;

const CurrentStateOfUserInput = styled.div`
  width: 250px;
  grid-area: user-input;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  & p {
    margin: 0;
  }
`;

export default function NewGame() {
  const { user } = useGameData();

  return (
    <Section>
      <Title id="game-start">Start a new game:</Title>
      <CurrentStateOfUserInput>
        {user && (
          <PlayerCard
            selectedAvatar={user.name}
            selectedColor={user?.color}
            userName={user?.username}
          />
        )}
      </CurrentStateOfUserInput>
      <NewGameForm />
    </Section>
  );
}
