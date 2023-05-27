import Link from "next/link";
import RadioForm from "@/components/RadioForm";
import { Avatar } from "@/types/Avatar";
import { Color } from "@/types/Color";

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
    <form aria-labelledby="game-start">
      {currentStep === 1 && (
        <>
          <label htmlFor="user-name">Enter your name:</label>
          <input
            type="text"
            id="user-name"
            defaultValue={userName}
            onChange={(event) => updateUserName(event.target.value)}
          />
        </>
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
        <>
          <fieldset>
            <legend>Select amount of opponents</legend>
            <input type="radio" id="one-opponent" name="amount-of-opponents" />
            <label htmlFor="one-opponents">1</label>
            <input type="radio" id="two-opponents" name="amount-of-opponents" />
            <label htmlFor="two-opponents">2</label>
            <input
              type="radio"
              id="three-opponents"
              name="amount-of-opponents"
            />
            <label htmlFor="three-opponents">3</label>
            <input
              type="radio"
              id="four-opponents"
              name="amount-of-opponents"
            />
            <label htmlFor="four-opponents">4</label>
            <input
              type="radio"
              id="five-opponents"
              name="amount-of-opponents"
            />
            <label htmlFor="five-opponents">5</label>
          </fieldset>
        </>
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
        <button
          type="button"
          onClick={() => updateCurrentStep(currentStep + 1)}
        >
          Next Step
        </button>
        {currentStep === 4 && (
          <>
            <button type="button" onClick={() => updateCurrentStep(1)}>
              Back to step one
            </button>
            <Link href="/board">Start</Link>
          </>
        )}
      </section>
    </form>
  );
}
