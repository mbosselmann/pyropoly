import styled, { css } from "styled-components";

export const FieldName = styled.p<{ $variant: string; $fieldType: string }>`
  margin: 0;
  padding: 0.3rem;
  text-align: center;
  position: absolute;
  hyphens: manual;

  ${({ $variant }) =>
    $variant === "vertical-left" &&
    css`
      top: 0;
      right: 2rem;
      writing-mode: vertical-rl;
      height: 100%;
      padding-right: 0.4rem;
    `}
  ${({ $variant }) =>
    $variant === "vertical-right" &&
    css`
      transform: rotate(270deg);
      bottom: 0;
      top: 0;
      left: 2rem;
      right: 0;
      padding-top: 0.4rem;
    `}
    ${({ $variant, $fieldType }) =>
    $variant === "horizontal-bottom" &&
    css`
      top: 2rem;
      left: 0;
      right: 0;
      padding-top: 0.4rem;
      ${$fieldType === "jail" && "transform: rotate(315deg);"}
      ${$fieldType === "start" && "transform: rotate(45deg);"}
    `}
    ${({ $variant, $fieldType }) =>
    $variant === "horizontal-top" &&
    css`
      bottom: 2rem;
      left: 0;
      right: 0;
      transform: rotate(180deg);
      padding-top: 0.4rem;
      ${$fieldType === "jail" && "transform: rotate(135deg);"}
      ${$fieldType === "bonus" && "transform: rotate(225deg);"}
    `};
`;
