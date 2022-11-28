import { useEffect, useState } from "react";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTheme } from 'next-themes';

export default function HomeHeroSection() {
  const [mounted, isMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  console.log(resolvedTheme);
  return (
    <div className="h-screen w-full relative">
    <div
      className="h-full w-full absolute bg-center bg-no-repeat bg-cover transition dark:duration-300 dark:opacity-50 opacity-100"
      style={resolvedTheme === 'dark' ?
       {backgroundImage: 'url(./assets/images/hero-section-bg-dark.webp)'} : {backgroundImage: 'url(./assets/images/hero-section-bg-light.webp)'}}
    ></div>
      <canvas className="h-screen w-full absolute" id="liquid-canvas"></canvas>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-white translate-y-1 pointer-events-none dark:opacity-50 opacity-100 bottom-0"></div>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-bgColor translate-y-1 pointer-events-none opacity-50 dark:opacity-100 bottom-0"></div>
      <div className="absolute w-full h-full pointer-events-none">
        <div className="skew absolute top-0 left-0 bottom-0 right-0 m-auto z-10 h-fit w-fit px-10">
          <div className="md:px-6">
            <span className="m-auto block text-2xl md:text-xl text-black  md:text-center">
              Hi {"I'm "}
              <span
                title="This is not a link fool."
                className="underline underline-offset-8 pointer-events-auto cursor-pointer text-pink dark:text-blue"
              >
                Gabriel Albuquerque
              </span>
            </span>
            <span className="md:leading-[9rem] mb-6 block text-[13vw] sm:text-[7rem]  md:text-center font-secondary max-w-[100vw] md:max-w-[80rem]">
              Building Websites, Products, Interfaces & Experiences
            </span>
            <span className="md:m-auto block text-black  text-2xl md:text-xl leading-10 md:text-center max-w-xl my-4">
              I am a{" "}
              <span
                title="Still not a link."
                className="pointer-events-auto cursor-pointer text-pink dark:text-blue"
              >
                Full Stack Developer
              </span>{" "}
              by profession, and a design enthusiast and learner by passion.
            </span>
            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                className="text-black  text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="https://github.com/Jaagrav"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
              <a
                className="text-black  text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="https://linkedin.com/in/jaagrav"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                className="text-black  text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="mailto:contact@jaagrav.in"
                target="_blank"
                rel="noreferrer"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <span
        onClick={scrollDown}
        className="block w-full text-center text-white text-xl absolute bottom-16 pointer-events-auto cursor-pointer"
      >
        Scroll down
      </span> */}
    </div>
  );
}
