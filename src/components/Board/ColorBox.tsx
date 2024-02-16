import styled, { css } from "styled-components";

export const ColorBox = styled.div<{ $color?: string; $variant: string }>`
  background-color: ${({ $color }) => $color ?? "black"};
  position: absolute;
  height: 1.5rem;
  bottom: 0;
  left: 0;
  width: 100%;

  ${({ $variant }) =>
    ($variant === "vertical-left" || $variant === "vertical-right") &&
    css`
      height: 100%;
      width: 1.5rem;
    `}

  ${({ $variant }) =>
    $variant === "vertical-left" &&
    css`
      right: 0;
      left: auto;
    `}

  ${({ $variant }) =>
    $variant === "horizontal-bottom" &&
    css`
      bottom: auto;
      top: 0;
    `}
`;
