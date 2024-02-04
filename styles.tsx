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
  --disabled-bg-color: #fbdedb;
  --luckiest-font: ${luckiestGuy.style.fontFamily};
  --fiery-red: #FF5733;
  --blazing-orange: #FFA500;
  --golden-yellow: #FFD700;
  --flame-scarlet: #D73D19;
  --burning-crimson: #c72516;
  --box-shadow: #d9d0cf;
  --searing-magenta: #FF3366;
  --charcoal-black: #333333;
  --ashen-grey: #808080;
  --radiant-gold: #FDDC57;
  --sapphire-blue: #0066CC;
 }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: var(--charcoal-black);
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
