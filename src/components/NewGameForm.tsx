import Link from "next/link";
import CustomGroupForm from "@/components/CustomGroupForm";
import { Avatar } from "@/types/Avatar";
import { Color } from "@/types/Color";
import styled from "styled-components";
import { usePlayers, usePlayersDispatch } from "@/context";

interface NewGameFormProps {
  avatars: Avatar[];
  colors: Color[];
  currentStep: number;
  updateCurrentStep: (arg0: number) => void;
  updateOpponents: (arg0: string) => void;
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

export default function NewGameForm({
  avatars,
  colors,
  currentStep,
  updateOpponents,
  updateCurrentStep,
}: NewGameFormProps) {
  const { user } = usePlayers();
  const dispatch = usePlayersDispatch();
  console.log(user);

  return (
    <Form aria-labelledby="game-start">
      {currentStep === 1 && (
        <CustomGroupForm
          type="radio"
          avatars={avatars}
          legend="Select your avatar:"
          selectedColor={user.color as string}
          inputName="avatar"
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
          selectedColor={user?.color as string}
          inputName="color"
        />
      )}
      {currentStep === 4 && (
        <CustomGroupForm
          type="checkbox"
          colors={colors}
          avatars={avatars.filter((avatar) => avatar.name !== user?.name)}
          legend="Select your opponents:"
          updateOpponents={updateOpponents}
          selectedColor={user?.color as string}
          inputName="avatar"
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
