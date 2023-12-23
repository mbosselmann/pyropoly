import Head from "next/head";
import styled from "styled-components";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Main = styled.main`
  width: 45rem;
  padding: 2rem 1rem 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  min-height: 90%;
`;

const Headline = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Monopoly (on Fire)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Headline className={luckiestGuy.className}>
          Monopoly (on Fire)
        </Headline>
        {children}
      </Main>
    </>
  );
}
