import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <body id="body" className="bg-[#1D1B29]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
