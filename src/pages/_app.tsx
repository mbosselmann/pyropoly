import type { AppProps } from "next/app";
import "../styles.css";
import "../themes.styles.css";
import { PlayersProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayersProvider>
      <Component {...pageProps} />
    </PlayersProvider>
  );
}
