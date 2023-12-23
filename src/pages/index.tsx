import { useState } from "react";
import Layout from "@/components/Layout";
import NewGame from "@/components/NewGame";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

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
          <button type="button">What is Monopoly?</button>
          <button type="button">What are the rules?</button>
          <button type="button">
            Quiz to Check if you are ready to start.
          </button>
        </section>
      )}
    </Layout>
  );
}
