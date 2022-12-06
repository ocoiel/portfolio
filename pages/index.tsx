/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from "react";
import HomeHeroSection from "../components/HomeHeroPage";
import { Hero } from "../components/Hero";

const Home = () => {
  useEffect(() => {
    window.process = {} as NodeJS.Process;
    const progress = document.getElementById("progressbar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function () {
      const progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress!.style.height = progressHeight + "%";
    };
    console.clear();
    console.log.apply(console, [
      "%c Hi, there 👋! Welcome to my website. 🚀 \n",
      "color: #000; background: #dddd0d; padding:5px 0;",
    ]);
    console.log.apply(console, [
      "%c I'm Gabriel Albuquerque, currently based in Rio de Janeiro, 🇧🇷.\n I'm looking for a new job opportunity.\n",
      "color: #fff; background: #222dc6; padding:5px 0;",
    ]);
    console.log.apply(console, [
      "%c Give me a chance to prove my potential! ✅.\n",
      "color: #000; background: #00ef0c; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Hero />
      <HomeHeroSection />
    </>
  );
};

export default Home;
