import styled from "styled-components";
import { ScreenReaderOnly } from "../../../Styles/ScreenReaderOnly";

const Container = styled.div<{ $color: string; $isCurrentPlayer: boolean }>`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: ${({ $isCurrentPlayer }) =>
    $isCurrentPlayer ? "3px solid black" : "none"};
`;
export default function GameFigure({
  name,
  color,
  isCurrentPlayer,
}: {
  name: string;
  color: string;
  isCurrentPlayer: boolean;
}) {
  return (
    <Container $color={color} $isCurrentPlayer={isCurrentPlayer}>
      <ScreenReaderOnly>{name}</ScreenReaderOnly>
    </Container>
  );
}
