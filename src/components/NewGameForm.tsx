import Link from "next/link";
import RadioForm from "@/components/RadioForm";
import { Avatar } from "@/types/Avatar";
import { Color } from "@/types/Color";
import styled from "styled-components";

interface NewGameFormProps {
  userName: string;
  avatars: Avatar[];
  colors: Color[];
  currentStep: number;
  selectedAvatar: string;
  updateSelectedAvatar: (arg0: string) => void;
  selectedColor: string;
  updateSelectedColor: (arg0: string) => void;
  updateCurrentStep: (arg0: number) => void;
  updateUserName: (arg0: string) => void;
}

const Form = styled.form`
  grid-area: form;
  display: grid;
  grid-template-rows: 1fr 3rem;
  place-items: center;
  padding: 1rem;
  border: 0.4rem solid black;
  border-left: 0.2rem solid black;
  border-radius: 0 0.5rem 0.5rem 0;
  min-height: 430px;
`;

export default function NewGameForm({
  userName,
  avatars,
  colors,
  currentStep,
  updateUserName,
  selectedAvatar,
  updateSelectedAvatar,
  selectedColor,
  updateSelectedColor,
  updateCurrentStep,
}: NewGameFormProps) {
  return (
    <Form aria-labelledby="game-start">
      {currentStep === 1 && (
        <div>
          <label htmlFor="user-name">Enter your name:</label>
          <input
            type="text"
            id="user-name"
            defaultValue={userName}
            onChange={(event) => updateUserName(event.target.value)}
          />
        </div>
      )}
      {currentStep === 2 && (
        <RadioForm
          data={avatars}
          selectedAvatar={selectedAvatar}
          legend="Select your avatar:"
          onChange={updateSelectedAvatar}
          selectedColor={selectedColor}
          inputName="avatar"
        />
      )}
      {currentStep === 3 && (
        <RadioForm
          data={colors}
          selectedAvatar={selectedAvatar}
          legend="Select your color:"
          onChange={updateSelectedColor}
          selectedColor={selectedColor}
          inputName="color"
        />
      )}
      {currentStep === 4 && (
        <RadioForm
          data={avatars}
          selectedAvatar={selectedAvatar}
          legend="Select your opponents:"
          onChange={updateSelectedAvatar}
          selectedColor={selectedColor}
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
