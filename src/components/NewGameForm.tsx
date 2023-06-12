import Link from "next/link";
import CustomGroupForm from "@/components/CustomGroupForm";
import { Avatar } from "@/types/Avatar";
import { Color } from "@/types/Color";
import styled from "styled-components";

interface NewGameFormProps {
  avatars: Avatar[];
  colors: Color[];
  currentStep: number;
  updateCurrentStep: (arg0: number) => void;
  updateOpponents: (arg0: string) => void;
  user: { name: string; avatar: string; color: string };
  updateUser: (arg0: string, arg1: string) => void;
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
  user,
  updateUser,
}: NewGameFormProps) {
  return (
    <Form aria-labelledby="game-start">
      {currentStep === 1 && (
        <div>
          <label htmlFor="user-name">Enter your name:</label>
          <input
            type="text"
            id="user-name"
            defaultValue={user.name}
            onChange={(event) => updateUser("name", event.target.value)}
          />
        </div>
      )}
      {currentStep === 2 && (
        <CustomGroupForm
          type="radio"
          avatars={avatars}
          selectedAvatar={user.avatar}
          legend="Select your avatar:"
          updateUser={updateUser}
          selectedColor={user.color}
          inputName="avatar"
        />
      )}
      {currentStep === 3 && (
        <CustomGroupForm
          type="radio"
          colors={colors}
          selectedAvatar={user.avatar}
          legend="Select your color:"
          updateUser={updateUser}
          selectedColor={user.color}
          inputName="color"
        />
      )}
      {currentStep === 4 && (
        <CustomGroupForm
          type="checkbox"
          colors={colors}
          avatars={avatars.filter((avatar) => avatar.name !== user.name)}
          selectedAvatar={user.avatar}
          legend="Select your opponents:"
          updateOpponents={updateOpponents}
          selectedColor={user.color}
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
