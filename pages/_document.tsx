import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        /> */}
        {/* <script src="//www.ezojs.com/ezoic/sa.min.js" defer></script> */}
        <script
          id="fluid-background-js"
          src="/assets/lib/fluid-background.js"
          async
        ></script>

        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script> */}
      </Head>
      <body className="prose-headings:font-headings">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
