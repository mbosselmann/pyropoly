import styled, { css } from "styled-components";

export const Price = styled.p<{ $variant: string }>`
  margin: 0;
  position: absolute;
  text-align: center;
  width: fit-content;
  padding: 0.2rem;

  ${({ $variant }) =>
    $variant === "vertical-left" &&
    css`
      transform: rotate(90deg);
      top: 50%;
      left: -1.7rem;
      translate: 0 -50%;
      width: 4rem;
      height: 1.5rem;
    `}

  ${({ $variant }) =>
    $variant === "vertical-right" &&
    css`
      transform: rotate(270deg);
      top: 50%;
      right: -1.7rem;
      translate: 0 -50%;
      width: 4rem;
      height: 1.5rem;
    `}

    ${({ $variant }) =>
    $variant === "horizontal-bottom" &&
    css`
      bottom: 0;
      width: 100%;
    `}

    ${({ $variant }) =>
    $variant === "horizontal-top" &&
    css`
      top: 0;
      width: 100%;
      transform: rotate(180deg);
    `}
`;
