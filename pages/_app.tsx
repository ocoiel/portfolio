import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NavMenu } from "../components/Navbar";
import { Preloader } from "../components/Preloader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <NavMenu />
        <Preloader />
        <Component {...pageProps} />
      </ThemeProvider>

      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          .page-transition-enter-done .page-transition {
            height: 0%;
            width: 100%;
            transition: 500ms;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
