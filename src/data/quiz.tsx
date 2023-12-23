import { QuizQuestion } from "@/types/QuizQuestion";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "1",
    question: "What happens when a player lands on an unowned property?",
    options: [
      "A. It gets auctioned off immediately.",
      "B. The player can buy it or auction it.",
      "C. The player goes to jail.",
    ],
    answerIndex: 1,
  },
  {
    id: "2",
    question: "How does a player get out of jail?",
    options: [
      "A. Paying a fine or rolling doubles.",
      "B. Skipping three turns.",
      "C. Landing on 'Free Parking'.",
    ],
    answerIndex: 0,
  },
  {
    id: "3",
    question:
      "What must players do when they land on another player's property?",
    options: ["A. Buy it from them.", "B. Pay rent.", "C. Swap properties."],
    answerIndex: 1,
  },
  {
    id: "4",
    question: "What is the starting amount of money each player receives?",
    options: ["A. $1,500", "B. $2,000", "C. $1,000"],
    answerIndex: 0,
  },
  {
    id: "5",
    question: "What happens when a player lands on 'Free Parking'?",
    options: [
      "A. They collect all the taxes paid so far.",
      "B. They earn a free property.",
      "C. Nothing, it's just a free resting place.",
    ],
    answerIndex: 2,
  },
  {
    id: "6",
    question:
      "What is the consequence of rolling doubles three times in a turn?",
    options: [
      "A. The player receives a bonus.",
      "B. The player goes to jail.",
      "C. The player gets an extra turn.",
    ],
    answerIndex: 1,
  },
  {
    id: "7",
    question: "How can players increase the rent owed on their properties?",
    options: [
      "A. By trading properties.",
      "B. By building houses and hotels.",
      "C. By passing 'Go'.",
    ],
    answerIndex: 1,
  },
  {
    id: "8",
    question:
      "What happens when a player declares bankruptcy to another player?",
    options: [
      "A. They swap places on the board.",
      "B. The bankrupt player leaves the game.",
      "C. All their assets are given to that player.",
    ],
    answerIndex: 2,
  },
  {
    id: "9",
    question: "What is the function of mortgaging properties?",
    options: [
      "A. To avoid paying rent.",
      "B. To get money from the bank.",
      "C. To buy more properties.",
    ],
    answerIndex: 1,
  },
  {
    id: "10",
    question: "How is the winner of the game determined?",
    options: [
      "A. Most properties owned.",
      "B. Last player remaining after all others have gone bankrupt.",
      "C. Highest amount of money.",
    ],
    answerIndex: 1,
  },
];
