import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NavMenu } from "../components/Navbar";
import { Preloader } from "../components/Preloader";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 767px)").matches) {
        window.process = {} as NodeJS.Process;
        const progress = document.getElementById("progressbar");
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function () {
          const progressHeight = (window.pageYOffset / totalHeight) * 100;
          progress!.style.height = progressHeight + "%";
        };
      }
    }
  }, []);

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        // forcedTheme=""
      >
        <div id="progressbar"></div>
        <div id="scrollpath"></div>
        <NextNProgress />
        <NavMenu />
        <Preloader />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
