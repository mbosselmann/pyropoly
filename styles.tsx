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
    font-family: 'Segoe UI', sans-serif;
    background-color: #5e548e;
  }

  #__next {
    display: grid;
    place-items: center;
  }

  ul {
    padding-left: 0;
  }

  p, ul, h1, h2, h3 {
    margin: 0;
  }
`;
