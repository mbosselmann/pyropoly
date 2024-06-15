import styles from "./styles.module.css";
import { useState } from "react";
import Checkbox from "../Checkbox";

type CardProps = {
  question: string;
  options: string[];
  answerIndex: number;
  updateAmountOfCorrectAnswers: () => void;
  selectedAnswer: string;
  updateSelectedAnswer: (arg0: string) => void;
};

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
      <h3 id="question">{question}</h3>
      <form className={styles.form} aria-labelledby="question">
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
      </form>
      <div className={`${styles.result} ${!!selectedAnswer ? "" : "hidden"}`}>
        {correctAnswer === selectedAnswer && <p>This is correct!</p>}
        {isChecked && correctAnswer !== selectedAnswer && (
          <p>Oh no! The correct answer is: {correctAnswer}</p>
        )}
      </div>
    </article>
  );
}
