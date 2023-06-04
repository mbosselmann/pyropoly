import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  max-width: 400px;
  border: none;

  & p {
    margin: 0;
    height: 100px;
    width: 100px;
  }
`;
