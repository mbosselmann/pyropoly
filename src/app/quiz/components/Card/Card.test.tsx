import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from ".";

describe("QuizCard", () => {
  test("Should render the question correctly", () => {
    render(
      <Card
        question="What's the capital of France?"
        options={["Paris", "Berlin", "Madrid", "Rome"]}
        answerIndex={0}
        updateAmountOfCorrectAnswers={() => {}}
        selectedAnswer=""
        updateSelectedAnswer={() => {}}
      />
    );

    const question = screen.getByText(/what's the capital of france/i);
    expect(question).toBeInTheDocument();
  });

  test("Should render the options correctly", () => {
    render(
      <Card
        question="What's the capital of France?"
        options={["Paris", "Berlin", "Madrid", "Rome"]}
        answerIndex={0}
        updateAmountOfCorrectAnswers={() => {}}
        selectedAnswer=""
        updateSelectedAnswer={() => {}}
      />
    );

    const parisRadio = screen.getByLabelText("Paris");
    const berlinRadio = screen.getByLabelText("Berlin");
    const madridRadio = screen.getByLabelText("Madrid");
    const romeRadio = screen.getByLabelText("Rome");

    expect(parisRadio).toBeInTheDocument();
    expect(berlinRadio).toBeInTheDocument();
    expect(madridRadio).toBeInTheDocument();
    expect(romeRadio).toBeInTheDocument();
  });

  test("Should allow selecting an option", async () => {
    const user = userEvent.setup();

    render(
      <Card
        question="What's the capital of France?"
        options={["Paris", "Berlin", "Madrid", "Rome"]}
        answerIndex={0}
        updateAmountOfCorrectAnswers={() => {}}
        selectedAnswer=""
        updateSelectedAnswer={() => {}}
      />
    );

    const parisRadio = screen.getByLabelText("Paris");
    const berlinRadio = screen.getByLabelText("Berlin");
    const madridRadio = screen.getByLabelText("Madrid");
    const romeRadio = screen.getByLabelText("Rome");

    expect(parisRadio).not.toBeDisabled();
    await user.click(parisRadio);

    expect(parisRadio).toBeDisabled();
    expect(berlinRadio).toBeDisabled();
    expect(madridRadio).toBeDisabled();
    expect(romeRadio).toBeDisabled();

    await user.click(berlinRadio);
    expect(berlinRadio).toBeDisabled();

    await user.click(madridRadio);
    expect(madridRadio).toBeDisabled();

    await user.click(romeRadio);
    expect(romeRadio).toBeDisabled();
  });

  test("Should display feedback when the correct answer is selected", async () => {
    const user = userEvent.setup();

    render(
      <Card
        question="What's the capital of France?"
        options={["Paris", "Berlin", "Madrid", "Rome"]}
        answerIndex={0}
        updateAmountOfCorrectAnswers={() => {}}
        selectedAnswer={"Paris"}
        updateSelectedAnswer={() => {}}
      />
    );

    const parisRadio = screen.getByLabelText("Paris");
    await user.click(parisRadio);

    expect(parisRadio).toBeChecked();
    const result = screen.getByText(/this is correct/i);

    await user.click(parisRadio);
    expect(result).toBeInTheDocument();
  });

  test("Should display feedback when an incorrect answer is selected", async () => {
    const user = userEvent.setup();

    render(
      <Card
        question="What's the capital of France?"
        options={["Paris", "Berlin", "Madrid", "Rome"]}
        answerIndex={0}
        updateAmountOfCorrectAnswers={() => {}}
        selectedAnswer={"Berlin"}
        updateSelectedAnswer={() => {}}
      />
    );

    const berlinRadio = screen.getByLabelText("Berlin");
    await user.click(berlinRadio);

    expect(berlinRadio).toBeChecked();
    const result = screen.getByText(/the correct answer is: paris/i);

    await user.click(berlinRadio);
    expect(result).toBeInTheDocument();
  });

  test("Should update the count of correct answers upon selecting the correct option", async () => {
    const user = userEvent.setup();
    const updateAmountOfCorrectAnswers = jest.fn();

    render(
      <Card
        question="What's the capital of France?"
        options={["Paris", "Berlin", "Madrid", "Rome"]}
        answerIndex={0}
        updateAmountOfCorrectAnswers={updateAmountOfCorrectAnswers}
        selectedAnswer=""
        updateSelectedAnswer={() => {}}
      />
    );

    const parisRadio = screen.getByLabelText("Paris");
    await user.click(parisRadio);

    expect(updateAmountOfCorrectAnswers).toHaveBeenCalledTimes(1);
  });

  test("Should not update the count of correct answers upon selecting an incorrect option", async () => {
    const user = userEvent.setup();
    const updateAmountOfCorrectAnswers = jest.fn();

    render(
      <Card
        question="What's the capital of France?"
        options={["Paris", "Berlin", "Madrid", "Rome"]}
        answerIndex={0}
        updateAmountOfCorrectAnswers={updateAmountOfCorrectAnswers}
        selectedAnswer=""
        updateSelectedAnswer={() => {}}
      />
    );

    const berlinRadio = screen.getByLabelText("Berlin");
    await user.click(berlinRadio);

    expect(updateAmountOfCorrectAnswers).not.toHaveBeenCalled();
  });
});
