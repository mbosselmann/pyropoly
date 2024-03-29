import styled from "styled-components";
import Head from "next/head";
import Board from "../components/Board/Board";
import BackLink from "@/components/BackLink";

const Header = styled.header`
  width: 45rem;
  height: 3.5rem;
  margin: 0;
  color: #fff;
`;

export default function BoardPage() {
  return (
    <>
      <Head>
        <title>Pyropoly</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header>
          <BackLink color="#fff" />
        </Header>
        <Board />
      </main>
    </>
  );
}
