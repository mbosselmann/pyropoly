import { useState } from "react";
import styled from "styled-components";
import { usePlayers, usePlayersDispatch } from "@/context";
import Link from "next/link";
import CustomGroupForm from "@/components/CustomGroupForm";
import { Color } from "@/types/Color";

interface NewGameFormProps {
  colors: Color[];
}

const Form = styled.form`
  width: 450px;
  grid-area: form;
  display: grid;
  grid-template-rows: 1fr 3rem;
  place-items: center;
  padding: 1rem;
  min-height: 430px;
`;

export default function NewGameForm({ colors }: NewGameFormProps) {
  const { user } = usePlayers();
  const dispatch = usePlayersDispatch();
  const [currentStep, setCurrentStep] = useState(1);

  function updateCurrentStep(step: number) {
    setCurrentStep(step);
  }

  return (
    <Form
      aria-labelledby="game-start"
      onSubmit={(event) => event.preventDefault()}
    >
      {currentStep === 1 && (
        <CustomGroupForm
          type="radio"
          legend="Select your avatar:"
          inputName="avatar"
          step={1}
        />
      )}
      {currentStep === 2 && (
        <div>
          <label htmlFor="user-name">Enter your name:</label>
          <input
            type="text"
            id="user-name"
            defaultValue={user.username ?? "Silent Parrot"}
            onChange={(event) =>
              dispatch({ type: "updateUser", username: event.target.value })
            }
          />
        </div>
      )}
      {currentStep === 3 && (
        <CustomGroupForm
          type="radio"
          colors={colors}
          legend="Select your color:"
          inputName="color"
          step={3}
        />
      )}
      {currentStep === 4 && (
        <CustomGroupForm
          type="checkbox"
          colors={colors}
          legend="Select your opponents:"
          inputName="avatar"
          step={4}
        />
      )}
      <section>
        {currentStep !== 1 && (
          <button
            type="button"
            onClick={() => updateCurrentStep(currentStep - 1)}
          >
            Back to previous step
          </button>
        )}
        {currentStep !== 4 && (
          <button
            type="button"
            onClick={() => updateCurrentStep(currentStep + 1)}
          >
            Next Step
          </button>
        )}
        {currentStep === 4 && (
          <>
            <button type="button" onClick={() => updateCurrentStep(1)}>
              Back to step one
            </button>
            <Link href="/board">Start</Link>
          </>
        )}
      </section>
    </Form>
  );
}
