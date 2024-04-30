import styled from "styled-components";
import Dice from "../Dice";

const Area = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

export default function DiceArea() {
  return (
    <Area>
      <Dice /> <Dice />
    </Area>
  );
}
