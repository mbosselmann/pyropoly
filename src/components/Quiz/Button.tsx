import styled, { css } from "styled-components";

export const Button = styled.button<{
  $isAnswerSelected: boolean;
}>`
  justify-self: end;
  width: 10rem;
  padding: 0.8rem 1.2rem;
  background-color: var(--sapphire-blue);
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 15px
    var(
      ${({ $isAnswerSelected }) =>
        $isAnswerSelected ? "--sapphire-blue" : "--box-shadow"}
    );

  ${({ $isAnswerSelected }) =>
    $isAnswerSelected &&
    css`
      font-weight: bold;
      text-transform: uppercase;
    `}
`;
