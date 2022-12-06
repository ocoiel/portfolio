import { AnimatedPage } from "../components/AnimatedPage";
import { Container } from "../components/Container";
import Typed from "react-typed";
import Link from "next/link";

function About() {
  const talkAbout = [
    "React 🥇",
    "TypeScript 🚧",
    "JavaScript 💛",
    "Next.js ▲",
    "Redux 🟣",
    "RESTful APIs 🧩",
    "Type-safety 🛂",
    "Accessibility ♿️",
    "User experience ✅",
    "UI/UX Desing 🎨",
    "Styled-Components 💅",
    "TailwindCSS 🔮",
    "Zustand 🐻",
    "React-query 🛠",
  ];

  return (
    <AnimatedPage>
      <Container>
        <section className="flex flex-col my-4">
          <h1 className="headline text-4xl md:text-6xl lg:text-8xl mt-8">
            Hi, there, I&apos;m Gabriel 🚀
          </h1>
          <h2 className="font-bold text-2xl md:text-4xl mt-2">
            Full-Stack developer from{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-400">
              Rio de Janeiro
            </span>{" "}
            🇧🇷
          </h2>
          <p className="mt-8 text-lg text-justify">
            As a passionate developer and technology lover, I build websites and
            web apps to make the internet a better place, but beyond that,{" "}
            <span className="highlight">I create experiences</span>. I am
            type-safety worker, an advocate for web performance and
            accessibility and a evangelist for the{" "}
            <Link
              href="https://create.t3.gg/"
              className="link-about"
              target="_blank"
            >
              T3-Stack.
            </Link>{" "}
            You can talk to me about {/* <span className="highlight"> */}
            <Typed
              loop
              typeSpeed={70}
              backSpeed={20}
              strings={talkAbout}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
            />
            {/* </span> */}.
          </p>
          <p className="mt-8 text-lg text-justify">
            I&apos;m 20 years old and I started my journey in this wonderful
            world, which I&apos;m very proud of, in 2017 in high school at{" "}
            <Link
              className="link-about"
              href="http://cefet-rj.br"
              target="_blank"
            >
              CEFET/RJ
            </Link>
            . In the meantime, I studied from Java with springboot, C# with
            .NET, to Laravel with VueJS 3, until in 2019 I fell in love with the
            React ecosystem. Since then, I&apos;ve focused my studies on the
            best code practices, always up to date with market demands,
            accessibility and, without doubt, UI/UX design. After more than a
            year reserved for military purposes, I am back with my work
            activities.
          </p>
          <p className="mt-8 text-lg text-justify">
            When I&apos;m not programming, I like to spend time with my family
            👑, read good books on Brazilian literature 📚, listen to music from
            about 50 years ago 🎶 and trying write poetry 📝, in addition to
            improving my English 🇺🇸.
          </p>
        </section>
        <section className="flex flex-col mt-4">
          <Container>
            <h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
              Some of my favourite tools
            </h2>
            {/* // import LogoCypress from "public/assets/tools/cypress.svg"; //
            import LogoFigma from "public/assets/tools/figma.svg"; // import
            LogoHygraph from "public/assets/tools/hygraph.svg"; // import
            LogoNext from "public/assets/tools/nextjs.svg"; // import
            LogoPrismic from "public/assets/tools/prismic.svg"; // import
            LogoStorybook from "public/assets/tools/storybook.svg"; // import
            LogoVercel from "public/assets/tools/vercel.svg"; */}
            <div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
              <img
                alt="NextJS"
                src="/assets/tools/nextjs.svg"
                className="w-32"
                // width={32}
                // height={}
                aria-label="Next.js"
              />
              <img
                alt="GraphCMS"
                src="/assets/tools/hygraph.svg"
                className="w-28 md:w-36"
                // width={28}
                // height={}
                aria-label="GraphCMS"
              />
              <img
                alt="PrismcCMS"
                src="/assets/tools/prismic.svg"
                className="w-32 md:w-40"
                // width={32}
                // height={}
                aria-label="PrismicCMS"
              />
              <img
                alt="Storybook"
                src="/assets/tools/storybook.svg"
                className="w-32 md:w-40"
                // width={32}
                // height={}
                aria-label="Storybook"
              />
              <img
                alt="Vecel"
                src="/assets/tools/vercel.svg"
                className="w-32 md:w-36"
                // width={32}
                // height={}
                aria-label="Vercel"
              />
              <img
                alt="Figma"
                src="/assets/tools/figma.svg"
                className="w-8"
                // width={8}
                // height={}
                aria-label="Figma"
              />
              <img
                alt="Cypress"
                src="/assets/tools/cypress.svg"
                className="w-32 md:w-40"
                // width={32}
                // height={}
                aria-label="Cypress"
              />
            </div>
          </Container>
        </section>
        <section className="flex flex-col my-4">
          <h1 className="headline text-4xl md:text-6xl lg:text-8xl mt-8">
            Hi, there, I&apos;m Gabriel 🚀
          </h1>
          <h2 className="font-bold text-2xl md:text-4xl mt-2">
            Full-Stack developer from{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-400">
              Rio de Janeiro
            </span>{" "}
            🇧🇷
          </h2>
          <p className="mt-8 text-lg text-justify">
            As a passionate developer and technology lover, I build websites and
            web apps to make the internet a better place, but beyond that,{" "}
            <span className="highlight">I create experiences</span>. I am
            type-safety worker, an advocate for web performance and
            accessibility and a evangelist for the{" "}
            <Link
              href="https://create.t3.gg/"
              className="link-about"
              target="_blank"
            >
              T3-Stack.
            </Link>{" "}
            You can talk to me about {/* <span className="highlight"> */}
            <Typed
              loop
              typeSpeed={70}
              backSpeed={20}
              strings={talkAbout}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
            />
            {/* </span> */}.
          </p>
          <p className="mt-8 text-lg text-justify">
            I&apos;m 20 years old and I started my journey in this wonderful
            world, which I&apos;m very proud of, in 2017 in high school at{" "}
            <Link
              className="link-about"
              href="http://cefet-rj.br"
              target="_blank"
            >
              CEFET/RJ
            </Link>
            . In the meantime, I studied from Java with springboot, C# with
            .NET, to Laravel with VueJS 3, until in 2019 I fell in love with the
            React ecosystem. Since then, I&apos;ve focused my studies on the
            best code practices, always up to date with market demands,
            accessibility and, without doubt, UI/UX design. After more than a
            year reserved for military purposes, I am back with my work
            activities.
          </p>
          <p className="mt-8 text-lg text-justify">
            When I&apos;m not programming, I like to spend time with my family
            👑, read good books on Brazilian literature 📚, listen to music from
            about 50 years ago 🎶 and trying write poetry 📝, in addition to
            improving my English 🇺🇸.
          </p>
        </section>
      </Container>
    </AnimatedPage>
  );
}

export default About;
