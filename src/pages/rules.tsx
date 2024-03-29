import Layout from "@/components/Styles/Layout";
import { gameTexts } from "@/data/gameTexts";
import styled from "styled-components";
import { Title } from "@/components/Styles/Title";

const List = styled.ol`
  padding: 0.8rem 3rem 0;
  list-style: none;
  counter-reset: items;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: var(--sapphire-blue) transparent;
  height: 55vh;
`;

const ListItem = styled.li`
  counter-increment: items;
  padding: 2rem;
  position: relative;
  height: 120px;

  &:nth-child(even) {
    border-right: 5px solid var(--sapphire-blue);
    border-bottom: 5px dashed var(--sapphire-blue);
    border-radius: 0 20px 20px 0;
    margin-left: 30px;
    border-width: 8px;
  }

  &:nth-child(odd) {
    border-left: 5px solid var(--sapphire-blue);
    border-bottom: 5px dashed var(--sapphire-blue);
    border-radius: 20px 0 0 20px;
    margin-right: 30px;
    border-width: 8px;
  }

  &:last-child {
    border: none;
  }

  &::before,
  ::after {
    background-color: var(--sapphire-blue);
    padding: 0.5rem;
    color: #fff;
    height: 3rem;
    width: 3rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
  }

  &:nth-child(even)::after {
    content: counter(items) ". ";
    position: absolute;
    font-weight: bold;
    top: -0.5rem;
    right: -1.5rem;
  }

  &:nth-child(odd)::before {
    content: counter(items) ". ";
    position: absolute;
    font-weight: bold;
    top: -0.5rem;
    left: -1.5rem;
  }
`;

export default function Rules() {
  return (
    <Layout>
      <Title>What are the rules?</Title>
      <List>
        {gameTexts.rules.map((rule, index) => (
          <ListItem key={index}>{rule}</ListItem>
        ))}
      </List>
    </Layout>
  );
}
