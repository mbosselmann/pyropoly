import styled from "styled-components";
import Chance from "../../Icons/Chance";
import Chest from "../../Icons/Chest";

const CardSection = styled.section`
  align-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  height: 100%;
`;

const CardBorder = styled.div`
  border: 5px dotted hotpink;
  width: 80%;
  height: 90%;
  padding: 0.5rem;
`;

const Card = styled.div`
  border: 3px outset #f47aa6;
  display: grid;
  place-items: center;
  border-radius: 5px;
  background-color: #ffc8dd;
  height: 100%;
  box-shadow: 0 0 20px inset #ffafcc;

  & svg {
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 0 20px white);
  }
`;

export default function CardArea() {
  return (
    <CardSection>
      <CardBorder>
        <Card>
          <Chest />
        </Card>
      </CardBorder>
      <CardBorder>
        <Card>
          <Chance />
        </Card>
      </CardBorder>
    </CardSection>
  );
}
