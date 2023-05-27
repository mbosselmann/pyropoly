import { ScreenReaderOnly } from "./ScreenReaderOnly";
import styled from "styled-components";
import { AVATAR_MAP } from "@/components/AvatarIcons";

interface RadioInputProps {
  id: number;
  name: string;
  labelText: string;
  isSelected: boolean;
  selectedColor?: string;
  colorCode?: string;
  avatarName?: string;
  onChange: () => void;
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: block;
  width: 100px;
  height: 100px;
`;

const Wrapper = styled.p<{ isSelected: boolean; selectedColor: string }>`
  border: ${({ isSelected }) =>
    isSelected ? "5px solid black" : "5px solid lightgrey"};
  border-radius: 0.5rem;
  background-color: ${({ selectedColor }) => selectedColor && selectedColor};
`;

export default function RadioInput({
  id,
  name,
  labelText,
  isSelected = false,
  onChange,
  selectedColor = "",
  colorCode = "",
  avatarName = "",
}: RadioInputProps) {
  return (
    <Wrapper
      isSelected={isSelected}
      selectedColor={colorCode ? colorCode : selectedColor}
    >
      <Input
        type="radio"
        id={String(id) + name}
        name={name}
        onChange={onChange}
      />
      <Label htmlFor={String(id) + name}>
        <ScreenReaderOnly>{labelText}</ScreenReaderOnly>
        {avatarName && AVATAR_MAP[avatarName.toLowerCase()]}
      </Label>
    </Wrapper>
  );
}
