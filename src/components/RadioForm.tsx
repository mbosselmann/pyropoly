import RadioInput from "@/components/RadioInput";
import { Fieldset } from "./StyledFieldset";

interface RadioFormSectionProps {
  data: {
    id: number;
    name: string;
    code?: string;
  }[];
  onChange: (arg0: string) => void;
  selectedColor: string;
  selectedAvatar: string;
  legend: string;
  inputName: string;
}

export default function RadioFormSection({
  data,
  onChange,
  selectedColor,
  selectedAvatar,
  legend,
  inputName,
}: RadioFormSectionProps) {
  return (
    <Fieldset>
      <legend>{legend}</legend>
      {data.map(({ id, name, code }) => (
        <RadioInput
          key={id}
          id={id}
          avatarName={name}
          name={inputName}
          labelText={name}
          isSelected={code ? selectedColor === code : selectedAvatar === name}
          selectedColor={selectedColor}
          colorCode={code}
          onChange={() => onChange(code ? code : name)}
        />
      ))}
    </Fieldset>
  );
}
