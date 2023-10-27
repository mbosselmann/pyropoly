import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
  --field-size: 7rem;
  --board-size: 60rem;
 }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
      background-color: #5e548e;
  }

  #__next {
    display: grid;
    place-items: center;
    height: 100vh;
  }
`;
