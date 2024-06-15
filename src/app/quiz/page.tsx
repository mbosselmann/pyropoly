"use client";

import { useState } from "react";
import { Quiz } from "@/app/quiz/components/Quiz";

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
    <>
      {count < 10 ? (
        <Quiz
          amountOfCorrectAnswers={amountOfCorrectAnswers}
          selectedAnswer={selectedAnswer}
          updateSelectedAnswer={updateSelectedAnswer}
          updateAmountOfCorrectAnswers={updateAmountOfCorrectAnswers}
          updateProgress={updateProgress}
          count={count}
        />
      ) : (
        <p>
          You answered {amountOfCorrectAnswers} questions correct. <br />
          {amountOfCorrectAnswers > 7
            ? "Really good! You can start."
            : "Maybe you should study the rules and try again?"}
        </p>
      )}
    </>
  );
}
