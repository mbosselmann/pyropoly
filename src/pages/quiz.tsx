import styled from "styled-components";
import Layout from "@/components/Layout";
import { useState } from "react";
import CardList from "@/components/Quiz/CardList";
import { quizQuestions } from "@/data/quiz";

const Section = styled.section`
  display: grid;
  padding-top: 1rem;
  grid-template-rows: 2rem auto 3rem;
`;

const Title = styled.h2`
  text-align: center;
  padding: 1rem;
  font-size: 1.7rem;
`;

const Paragraph = styled.p`
  justify-self: end;
`;

const ProgressContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Progress = styled.progress`
  appearance: none;
  display: block;
  width: 50%;
  height: 1rem;
`;

export default function QuizPage() {
  const [count, setCount] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [amountOfCorrectAnswers, setAmountOfCorrectAnswers] =
    useState<number>(0);

  function updateProgress() {
    if (!selectedAnswer) return;

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
      <Title>Quiz: Are you ready for Monopoly On Fire?</Title>
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
        <p> You answered {amountOfCorrectAnswers} questions correct.</p>
      )}
    </Layout>
  );
}
