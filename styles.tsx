import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
  --field-size: 7rem;
  --board-size: 50rem;
 }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
      background-color: teal;
  }

  #__next {
    display: grid;
    place-items: center;
    height: 100vh;
  }
`;
