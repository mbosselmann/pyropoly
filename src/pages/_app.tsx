import type { AppProps } from "next/app";
import GlobalStyles from "../../styles";
import { PlayersProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayersProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </PlayersProvider>
  );
}
