import styled from "styled-components";
import RadioInput from "@/components/RadioInput";

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

const Fieldset = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  max-width: 400px;

  & p {
    margin: 0;
    height: 100px;
    width: 100px;
  }
`;

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
