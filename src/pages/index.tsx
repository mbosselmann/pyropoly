import Layout from "@/components/Layout";
import Title from "@/components/Title.module.css";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  margin-top: 3rem;
  display: grid;
  gap: 1.5rem;
  place-content: center;
`;

const NavLink = styled(Link)`
  background-color: var(--sapphire-blue);
  color: #fff;
  text-decoration: none;
  padding: 1.2rem 2rem 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  width: 30rem;
  text-align: center;
  height: 3.5rem;

  &:hover {
    background-color: var(--charcoal-black);
    font-size: 1.1rem;
  }
`;

export default function Home() {
  return (
    <Layout>
      <h2 className={Title.styles}>
        So happy that you are here!
        <br /> What do you want to do?
      </h2>
      <Nav>
        <NavLink href="/new-game">Start a new game</NavLink>
        <NavLink href="/about">What is Pyropoly?</NavLink>
        <NavLink href="/rules">What are the rules?</NavLink>
        <NavLink href="/quiz">Quiz to Check if you are ready to start.</NavLink>
      </Nav>
    </Layout>
  );
}
