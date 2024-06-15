"use client";

import Head from "next/head";
import styles from "./styles.module.css";
import BackLink from "../BackLink";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Head>
        <title>Pyropoly</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.headline}>Pyropoly</h1>
          {pathname !== "/" && <BackLink color={"dark"} />}
        </header>
        {children}
      </main>
    </>
  );
}
