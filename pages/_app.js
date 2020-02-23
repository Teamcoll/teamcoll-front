import React from "react";
import Head from "next/head";

export default function Teamcoll({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Teamcoll</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="reset/normalize.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
