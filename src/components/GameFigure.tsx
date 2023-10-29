import styled from "styled-components";
import { ScreenReaderOnly } from "./ScreenReaderOnly";

const Container = styled.div<{ $color: string }>`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;
export default function GameFigure({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return (
    <Container $color={color}>
      <ScreenReaderOnly>{name}</ScreenReaderOnly>
    </Container>
  );
}
