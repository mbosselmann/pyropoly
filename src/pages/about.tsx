import Layout from "@/components/Layout";
import { gameTexts } from "@/data/gameTexts";
import styled from "styled-components";
import { Title } from "@/components/Title";

const List = styled.ul`
  list-style: none;
  padding: 1rem 2rem;
  overflow-x: scroll;
  height: 450px;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.2rem;

  &:last-child {
    font-family: var(--luckiest-font);
    font-size: 1.7rem;
    text-align: center;
  }

  &:not(:last-child)::first-letter {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--sapphire-blue);
  }
`;

export default function About() {
  return (
    <Layout>
      <Title>About</Title>
      <List>
        {gameTexts.about.map((about, index) => (
          <ListItem key={index}>{about}</ListItem>
        ))}
      </List>
    </Layout>
  );
}
