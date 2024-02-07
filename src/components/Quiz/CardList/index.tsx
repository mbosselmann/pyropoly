import { QuizQuestion } from "@/types/QuizQuestion";
import styled from "styled-components";
import { useState } from "react";
import Card from "../Card";
import { Button } from "../Button";

type CardListProps = {
  quizQuestions: QuizQuestion[];
  selectedAnswer: string;
  updateSelectedAnswer: (arg0: string) => void;
  updateAmountOfCorrectAnswers: () => void;
  count: number;
  updateProgress: () => void;
};

const List = styled.ul<{ role: "list" }>`
  width: 100%;
`;

const ListItem = styled.li<{
  isDisplayed: boolean;
}>`
  list-style: none;
  display: ${({ isDisplayed }) => (isDisplayed ? "grid" : "none")};
`;

export default function CardList({
  quizQuestions,
  selectedAnswer,
  updateAmountOfCorrectAnswers,
  updateSelectedAnswer,
  count,
  updateProgress,
}: CardListProps) {
  const [displayedQuestionId, setDisplayedQuestionId] = useState<string>(
    quizQuestions[0].id
  );

  function handleDisplayQuestion() {
    if (!selectedAnswer) return;

    if (count <= 8) {
      setDisplayedQuestionId(quizQuestions[count + 1].id);
    }
    updateProgress();
  }

  return (
    <List role="list">
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
    </List>
  );
}
