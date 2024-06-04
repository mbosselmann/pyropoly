import { Fieldset } from "./Fieldset";
import { useGameData, useGameDispatch } from "@/context";
import { Avatar } from "@/types/Avatar";
import { Color } from "@/types/Color";
import CustomInput from "./CustomInput";

interface FormSectionProps {
  type: string;
  legend: string;
  inputName: string;
  step: number;
}

export default function CustomGroupForm({
  type,
  legend,
  inputName,
  step,
}: FormSectionProps) {
  const {
    players,
    user,
    colors,
  }: { players: Avatar[]; user: Avatar; colors: Color[] } = useGameData();
  const dispatch = useGameDispatch();

  const colorCodesCopy = colors
    ?.map((color) => color.styleName)
    ?.filter((color) => color !== (user.color as string));

  return (
    <Fieldset>
      <legend>{legend}</legend>
      {step === 1 &&
        players.map(({ id, name, isSelected }) => (
          <CustomInput
            key={id}
            id={id}
            type={type}
            avatarName={name}
            name={inputName}
            labelText={name}
            isSelected={isSelected}
            colorCode={user.color as string}
            onChange={() =>
              dispatch({ type: "updateUser", key: "name", value: name })
            }
          />
        ))}
      {step === 4 &&
        players
          .filter((player) => player.name !== user?.name)
          .map(({ id, name, isOpponent }, index) => (
            <CustomInput
              key={id}
              id={id}
              type={type}
              avatarName={name}
              name={inputName}
              colorCode={colorCodesCopy ? colorCodesCopy[index] : ""}
              labelText={name}
              isSelected={isOpponent}
              onChange={() =>
                dispatch({
                  type: "updateOpponents",
                  value: { id, color: colorCodesCopy[index] },
                })
              }
            />
          ))}
      {step === 3 &&
        colors &&
        colors.map(({ id, name, styleName }) => (
          <CustomInput
            key={id}
            id={id}
            type={type}
            avatarName={name}
            name={inputName}
            labelText={name}
            isSelected={(user.color as string) === styleName}
            colorCode={styleName}
            onChange={() =>
              dispatch({ type: "updateUser", key: "color", value: styleName })
            }
          />
        ))}
    </Fieldset>
  );
}
