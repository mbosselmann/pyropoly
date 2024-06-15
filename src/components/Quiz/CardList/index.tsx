import styles from "./styles.module.css";
import { QuizQuestion } from "@/types/QuizQuestion";
import { useState } from "react";
import Card from "../Card";
import Button from "../Button.module.css";

type CardListProps = {
  quizQuestions: QuizQuestion[];
  selectedAnswer: string;
  updateSelectedAnswer: (arg0: string) => void;
  updateAmountOfCorrectAnswers: () => void;
  count: number;
  updateProgress: () => void;
};

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
    <ul className={styles.list} role="list">
      {quizQuestions.map(
        ({ id, question, answerIndex, options }: QuizQuestion) => (
          <li
            className={`${styles["list-item"]} ${
              id === displayedQuestionId ? "" : "hidden"
            }`}
            key={id}
          >
            <Card
              question={question}
              answerIndex={answerIndex}
              options={options}
              updateAmountOfCorrectAnswers={updateAmountOfCorrectAnswers}
              selectedAnswer={selectedAnswer}
              updateSelectedAnswer={updateSelectedAnswer}
            />
            <button
              className={`${Button.styles} ${
                !!selectedAnswer ? Button["is-selected"] : ""
              }`}
              type="button"
              onClick={handleDisplayQuestion}
            >
              Next question
            </button>
          </li>
        )
      )}
    </ul>
  );
}
