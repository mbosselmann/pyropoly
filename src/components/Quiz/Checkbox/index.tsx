import styled, { css } from "styled-components";

type CheckboxProps = {
  index: string;
  question: string;
  option: string;
  onChange: () => void;
  isDisabled: boolean;
  isSelected: boolean;
  isAnswerCorrect: boolean;
};

const Label = styled.label<{
  isSelected: boolean;
  isDisabled: boolean;
  isAnswerCorrect: boolean;
}>`
  padding: 1rem;
  box-shadow: 0 0 10px var(--box-shadow);
  border-radius: 10px;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(
        ${props.isAnswerCorrect ? "--sapphire-blue" : "--burning-crimson"}
      );
      color: #fff;
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
  isAnswerCorrect,
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
        isAnswerCorrect={isAnswerCorrect}
      >
        {option}
      </Label>
    </>
  );
}
