import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import CardList from ".";

const exampleQuestions = [
  {
    id: "3",
    question: "What is the capital of France?",
    options: ["A. Berlin", "B. Paris", "C. London"],
    answerIndex: 1,
  },
  {
    id: "4",
    question: "Which planet is known as the Red Planet?",
    options: ["A. Venus", "B. Mars", "C. Jupiter"],
    answerIndex: 1,
  },
  {
    id: "5",
    question: "What is the square root of 81?",
    options: ["A. 7", "B. 8", "C. 9"],
    answerIndex: 2,
  },
  {
    id: "6",
    question: "Who wrote the novel '1984'?",
    options: ["A. George Orwell", "B. Aldous Huxley", "C. Ray Bradbury"],
    answerIndex: 0,
  },
];

describe("CardList", () => {
  it("renders the first of four questions", () => {
    render(
      <CardList
        quizQuestions={exampleQuestions}
        selectedAnswer=""
        updateSelectedAnswer={() => {}}
        updateAmountOfCorrectAnswers={() => {}}
        count={0}
        updateProgress={() => {}}
      />
    );

    const cards = screen.getAllByRole("listitem");
    expect(cards).toHaveLength(1);

    const cardForm = screen.getByRole("form");
    expect(cardForm).toHaveAccessibleName("What is the capital of France?");

    const cardOptionBerlin = screen.getByLabelText("A. Berlin");
    expect(cardOptionBerlin).toBeInTheDocument();

    const cardOptionParis = screen.getByLabelText("B. Paris");
    expect(cardOptionParis).toBeInTheDocument();

    const cardOptionLondon = screen.getByLabelText("C. London");
    expect(cardOptionLondon).toBeInTheDocument();

    const allCards = screen.getAllByRole("listitem");

    expect(allCards).toHaveLength(1);
  });
});
