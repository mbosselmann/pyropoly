import styled, { css } from "styled-components";
import Layout from "@/components/Layout";
import Card from "@/components/Quiz/Card";
import { quizQuestions } from "@/data/quiz";
import { QuizQuestion } from "@/types/QuizQuestion";
import { useState } from "react";
import { Button } from "@/components/Quiz/Button";

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

const ListItem = styled.li<{ isDisplayed: boolean }>`
  list-style: none;
  display: ${({ isDisplayed }) => (isDisplayed ? "grid" : "none")};
`;

export default function QuizPage() {
  const [count, setCount] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [amountOfCorrectAnswers, setAmountOfCorrectAnswers] =
    useState<number>(0);
  const [displayedQuestionId, setDisplayedQuestionId] = useState<string>(
    quizQuestions[0].id
  );

  function handleDisplayQuestion() {
    if (!selectedAnswer) return;

    setCount((prevCount) => prevCount + 1);
    setSelectedAnswer("");
    if (count <= 8) {
      setDisplayedQuestionId(quizQuestions[count + 1].id);
    }
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
          <ul role="list">
            {quizQuestions.map(
              ({ id, question, answerIndex, options }: QuizQuestion) => (
                <ListItem key={id} isDisplayed={id === displayedQuestionId}>
                  <Card
                    question={question}
                    answerIndex={answerIndex}
                    options={options}
                    updateAmountOfCorrectAnswers={updateAmountOfCorrectAnswers}
                    selectedAnswer={selectedAnswer}
                    updateSelectedAnswer={updateSelectedAnswer}
                  />
                  <Button
                    type="button"
                    onClick={handleDisplayQuestion}
                    isAnswerSelected={!!selectedAnswer}
                  >
                    Next question
                  </Button>
                </ListItem>
              )
            )}
          </ul>
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
