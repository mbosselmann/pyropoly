import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
  --field-size: 6.5rem;
  --board-size: 45rem;
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
  }

  ul {
    padding-left: 0;
  }

  p, ul {
    margin: 0;
  }
`;
