import styled, { css } from "styled-components";

type CheckboxProps = {
  index: string;
  question: string;
  option: string;
  onChange: () => void;
  isDisabled: boolean;
  isSelected: boolean;
};

const Label = styled.label<{ isSelected: boolean; isDisabled: boolean }>`
  padding: 1rem;
  box-shadow: 0 0 10px var(--box-shadow);
  border-radius: 10px;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--light-bg-color);
      font-weight: bold;
    `}
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: var(--disabled-bg-color);
      box-shadow: none;
    `}
`;

export default function Checkbox({
  index,
  question,
  option,
  onChange,
  isDisabled,
  isSelected,
}: CheckboxProps) {
  return (
    <>
      <input
        id={option}
        name={question}
        type="radio"
        key={index}
        value={option}
        defaultChecked={false}
        onChange={onChange}
        disabled={isDisabled}
        hidden={true}
      />
      <Label
        htmlFor={option}
        isSelected={isSelected}
        isDisabled={!isSelected && isDisabled}
      >
        {option}
      </Label>
    </>
  );
}
