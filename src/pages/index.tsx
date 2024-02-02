import { useState } from "react";
import Layout from "@/components/Layout";
import NewGame from "@/components/NewGame";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Layout>
      {isOpen ? (
        <NewGame />
      ) : (
        <section>
          <h2>So happy that you are here!</h2>
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            Start a New Game
          </button>
          <Link href="/about">What is Monopoly?</Link>
          <Link href="/rules">What are the rules?</Link>
          <Link href="/quiz">Quiz to Check if you are ready to start.</Link>
        </section>
      )}
    </Layout>
  );
}
