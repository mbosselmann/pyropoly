import { ScreenReaderOnly } from "../Styles/ScreenReaderOnly";
import styled from "styled-components";
import { AVATAR_MAP } from "@/components/Player/AvatarIcons";

interface RadioInputProps {
  id: string;
  type: string;
  name: string;
  labelText: string;
  isSelected: boolean;
  colorCode: string;
  avatarName?: string;
  onChange: () => void;
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label<{
  $isSelected: boolean;
  $colorCode: string;
}>`
  display: block;
  border: ${({ $isSelected }) =>
    $isSelected ? "5px solid black" : "5px solid lightgrey"};
  border-radius: 0.5rem;
  background-color: ${({ $colorCode }) =>
    $colorCode ? $colorCode : "rgba(232, 231, 231, 0.75)"};
  width: 100px;
  height: 100px;
`;

export default function CustomInput({
  id,
  name,
  type,
  labelText,
  isSelected,
  onChange,
  colorCode = "",
  avatarName = "",
}: RadioInputProps) {
  return (
    <p>
      <Input
        type={type}
        id={String(id) + name}
        name={name}
        onChange={onChange}
      />
      <Label
        htmlFor={String(id) + name}
        $isSelected={isSelected}
        $colorCode={colorCode}
      >
        <ScreenReaderOnly>{labelText}</ScreenReaderOnly>
        {avatarName && AVATAR_MAP[avatarName.toLowerCase()]}
      </Label>
    </p>
  );
}
