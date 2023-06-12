import CustomInput from "@/components/CustomInput";
import { Fieldset } from "./StyledFieldset";
import { Avatar } from "@/types/Avatar";
import { Color } from "@/types/Color";

interface FormSectionProps {
  avatars?: Avatar[] | null;
  colors?: Color[];
  type: string;
  onChange: (arg0: string) => void;
  selectedColor: string;
  selectedAvatar: string;
  legend: string;
  inputName: string;
}

export default function CustomGroupForm({
  avatars = null,
  colors,
  onChange,
  type,
  selectedColor,
  selectedAvatar,
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
        avatars.map(({ id, name }) => (
          <CustomInput
            key={id}
            id={id}
            type={type}
            avatarName={name}
            name={inputName}
            labelText={name}
            isSelected={selectedAvatar === name}
            colorCode={selectedColor}
            onChange={() => onChange(name)}
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
            onChange={() => onChange(id)}
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
            onChange={() => onChange(code)}
          />
        ))}
    </Fieldset>
  );
}
