import { ReactNode, useState } from "react";
import Checkbox from "../Checkbox";
import styled from "styled-components";

type CardProps = {
  question: string;
  options: string[];
  answerIndex: number;
  updateAmountOfCorrectAnswers: () => void;
  selectedAnswer: string;
  updateSelectedAnswer: (arg0: string) => void;
};

const Form = styled.form`
  display: grid;
  gap: 0.8rem;
  padding: 1rem 0;
`;

const Result = styled.div<{ $isAnswerSelected: boolean; children?: ReactNode }>`
  ${({ $isAnswerSelected }) => !$isAnswerSelected && "visibility: hidden;"}
  height: 4rem;
`;

export default function Card({
  question,
  options,
  answerIndex,
  updateAmountOfCorrectAnswers,
  selectedAnswer,
  updateSelectedAnswer,
}: CardProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const correctAnswer = options[answerIndex];

  function handleChange(option: string) {
    updateSelectedAnswer(option);
    setIsChecked(true);
    if (option === correctAnswer) {
      updateAmountOfCorrectAnswers();
    }
  }

  return (
    <article>
      <h3>{question}</h3>
      <Form>
        {options.map((option, index) => (
          <Checkbox
            key={index}
            question={question}
            index={String(index)}
            option={option}
            onChange={() => handleChange(option)}
            isDisabled={isChecked}
            isSelected={option === selectedAnswer && isChecked}
            isAnswerCorrect={correctAnswer === selectedAnswer}
          />
        ))}
      </Form>
      <Result $isAnswerSelected={!!selectedAnswer}>
        {correctAnswer === selectedAnswer && <p>This is correct!</p>}
        {isChecked && correctAnswer !== selectedAnswer && (
          <p>Oh no! The correct answer is: {correctAnswer}</p>
        )}
      </Result>
    </article>
  );
}
