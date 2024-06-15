import CardList from "../CardList";
import styles from "./styles.module.css";
import { quizQuestions } from "@/data/quiz";

type QuizProps = {
  amountOfCorrectAnswers: number;
  selectedAnswer: string;
  updateSelectedAnswer: (option: string) => void;
  updateAmountOfCorrectAnswers: () => void;
  updateProgress: () => void;
  count: number;
};

export function Quiz({
  amountOfCorrectAnswers,
  selectedAnswer,
  updateSelectedAnswer,
  updateAmountOfCorrectAnswers,
  updateProgress,
  count,
}: QuizProps) {
  return (
    <section className={styles.section}>
      <p className={styles.paragraph}>
        Correct answers: {amountOfCorrectAnswers}/10
      </p>
      <CardList
        quizQuestions={quizQuestions}
        selectedAnswer={selectedAnswer}
        updateSelectedAnswer={updateSelectedAnswer}
        updateAmountOfCorrectAnswers={updateAmountOfCorrectAnswers}
        updateProgress={updateProgress}
        count={count}
      />
      <div className={styles["progress-container"]}>
        <progress
          className={styles.progress}
          id="progress"
          value={count}
          max={10}
        ></progress>
        <label htmlFor="progress"> {count}/10 questions answered</label>
      </div>
    </section>
  );
}
