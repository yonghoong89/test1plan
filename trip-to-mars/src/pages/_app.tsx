import "../styles/index.scss";

import Head from "next/head";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
