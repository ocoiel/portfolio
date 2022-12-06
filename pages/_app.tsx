import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NavMenu } from "../components/Navbar";
import { Preloader } from "../components/Preloader";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <NextNProgress />
        <NavMenu />
        <Preloader />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
