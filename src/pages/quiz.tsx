import styled from "styled-components";
import Layout from "@/components/Styles/Layout";
import { useState } from "react";
import CardList from "@/components/Quiz/CardList";
import { quizQuestions } from "@/data/quiz";
import { Title } from "@/components/Styles/Title";

const Section = styled.section`
  display: grid;
  padding-top: 1rem;
  grid-template-rows: 2rem auto 6rem;
  height: 85%;
  width: 100%;
  gap: 1rem;
`;

const Paragraph = styled.p`
  justify-self: end;
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 70%;
`;

const Progress = styled.progress`
  appearance: none;
  display: block;
  width: 100%;
  height: 1rem;

  &::-webkit-progress-bar,
  ::-moz-progress-bar,
  ::-webkit-progress-value {
    background-color: var(--sapphire-blue);
  }
`;

export default function QuizPage() {
  const [count, setCount] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [amountOfCorrectAnswers, setAmountOfCorrectAnswers] =
    useState<number>(0);

  function updateProgress() {
    setCount((prevCount) => prevCount + 1);
    setSelectedAnswer("");
  }

  function updateAmountOfCorrectAnswers() {
    setAmountOfCorrectAnswers((prevAmount) => prevAmount + 1);
  }

  function updateSelectedAnswer(option: string) {
    setSelectedAnswer(option);
  }

  return (
    <Layout>
      <Title>Quiz: Are you ready for Pyropoly On Fire?</Title>
      {count < 10 ? (
        <Section>
          <Paragraph>Correct answers: {amountOfCorrectAnswers}/10</Paragraph>
          <CardList
            quizQuestions={quizQuestions}
            selectedAnswer={selectedAnswer}
            updateSelectedAnswer={updateSelectedAnswer}
            updateAmountOfCorrectAnswers={updateAmountOfCorrectAnswers}
            updateProgress={updateProgress}
            count={count}
          />
          <ProgressContainer>
            <Progress id="progress" value={count} max={10}></Progress>
            <label htmlFor="progress"> {count}/10 questions answered</label>
          </ProgressContainer>
        </Section>
      ) : (
        <p>
          You answered {amountOfCorrectAnswers} questions correct. <br />
          {amountOfCorrectAnswers > 7
            ? "Really good! You can start."
            : "Maybe you should study the rules and try again?"}
        </p>
      )}
    </Layout>
  );
}
