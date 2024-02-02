import { createGlobalStyle } from "styled-components";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default createGlobalStyle`

 :root {
  --field-size: 6.5rem;
  --board-size: 45rem;
  --bg-color: #5e548e;
  --light-bg-color: #9d8cef;
  --disabled-bg-color: #f3f2fd;
  --box-shadow: #c9c8d4;
  --luckiest-font: ${luckiestGuy.style.fontFamily};
 }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: var(--bg-color);
    height: 100vh;
  }

  #__next {
    display: grid;
    place-items: center;
    height: 100%;
  }

  ul {
    padding-left: 0;
  }

  p, ul, h1, h2, h3 {
    margin: 0;
  }
`;
