import CustomInput from "@/components/CustomInput";
import { Fieldset } from "./StyledFieldset";
import { Avatar } from "@/types/Avatar";
import { Color } from "@/types/Color";

interface FormSectionProps {
  avatars?: Avatar[] | null;
  colors?: Color[];
  type: string;
  updateOpponents?: (arg0: string) => void;
  updateUser?: (arg0: string, arg1: string) => void;
  selectedColor: string;
  legend: string;
  inputName: string;
}

export default function CustomGroupForm({
  avatars = null,
  colors,
  updateOpponents,
  updateUser,
  type,
  selectedColor,
  legend,
  inputName,
}: FormSectionProps) {
  const colorCodesCopy = colors
    ?.map((color) => color.code)
    ?.filter((color) => color !== selectedColor);

  return (
    <Fieldset>
      <legend>{legend}</legend>
      {type === "radio" &&
        avatars &&
        avatars.map(({ id, name, isSelected }) => (
          <CustomInput
            key={id}
            id={id}
            type={type}
            avatarName={name}
            name={inputName}
            labelText={name}
            isSelected={isSelected}
            colorCode={selectedColor}
            onChange={() => {
              if (updateUser) updateUser("name", name);
            }}
          />
        ))}
      {type === "checkbox" &&
        avatars &&
        avatars.map(({ id, name, isOpponent }, index) => (
          <CustomInput
            key={id}
            id={id}
            type={type}
            avatarName={name}
            name={inputName}
            colorCode={colorCodesCopy ? colorCodesCopy[index] : ""}
            labelText={name}
            isSelected={isOpponent}
            onChange={() => {
              if (updateOpponents) updateOpponents(id);
            }}
          />
        ))}
      {!avatars &&
        colors &&
        colors.map(({ id, name, code }) => (
          <CustomInput
            key={id}
            id={id}
            type={type}
            avatarName={name}
            name={inputName}
            labelText={name}
            isSelected={selectedColor === code}
            colorCode={code}
            onChange={() => {
              if (updateUser) updateUser("color", code);
            }}
          />
        ))}
    </Fieldset>
  );
}
