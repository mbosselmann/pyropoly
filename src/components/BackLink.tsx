import Link from "next/link";
import styled, { css } from "styled-components";
import Back from "./Icons/Back";

const StyledLink = styled(Link)<{ color: string }>`
  display: inline-block;
  color: ${({ color }) => color};
  width: 50px;
  height: 50px;
  border-radius: 50%;

  ${({ color }) =>
    color === "#fff" &&
    css`
      &:hover {
        filter: drop-shadow(0 0 10px #ffafcc);
      }
    `}
`;

export default function BackLink({ color }: { color: string }) {
  return (
    <StyledLink href="/" aria-label="Back to start" color={color}>
      <Back />
    </StyledLink>
  );
}
