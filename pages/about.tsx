import { AnimatedPage } from "../components/AnimatedPage";
import Typed from "react-typed";
import Link from "next/link";
import Image from "next/image";

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
      <div className="mx-auto w-full px-4 md:max-w-6xl">
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
            👑, read good books on Brazilian literature 📚, listen to{" "}
            <Link
              className="link-about"
              href="https://open.spotify.com/user/ocoiel355"
              target="_blank"
            >
              music
            </Link>{" "}
            from about 50 years ago 🎶 and trying write{" "}
            <Link
              className="link-about"
              href="https://ocoiel.medium.com/"
              target="_blank"
            >
              poetry
            </Link>{" "}
            📝, in addition to improving my English 🇺🇸.
          </p>
        </section>
        <section className="flex flex-col mt-4">
          <h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
            Some of my daily technologies
          </h2>
          <div className="flex flex-wrap items-center justify-center mt-8 mx-auto gap-x-12 gap-y-6">
            <Image
              alt="Typescript"
              src="/assets/tools/typescript.png"
              // className="w-28"
              width={96}
              height={96}
              aria-label="Typescript"
            />
            <Image
              alt="ReactJS"
              src="/assets/tools/react.svg"
              // className="w-26 md:w-36"
              width={96}
              height={96}
              aria-label="ReactJS"
            />
            <Image
              alt="NextJS"
              src="/assets/tools/nextjs.svg"
              // className="w-32 md:w-40"
              width={128}
              height={64}
              aria-label="NextJS"
            />
            <Image
              alt="Storybook"
              src="/assets/tools/storybook.svg"
              // className="w-38 md:w-40"
              width={128}
              height={64}
              aria-label="Storybook"
            />
            <Image
              alt="Vecel"
              src="/assets/tools/vercel.svg"
              // className="w-32 md:w-36"
              width={128}
              height={64}
              aria-label="Vercel"
            />
            <Image
              alt="Redux"
              src="/assets/tools/Redux.png"
              // className="w-32"
              width={128}
              height={128}
              aria-label="Redux"
            />
            <Image
              alt="prisma"
              src="/assets/tools/prisma.svg"
              // className="w-32"
              width={128}
              height={128}
              aria-label="prisma"
            />
          </div>
        </section>
        <section className="flex flex-col mt-4">
          <h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
            Databases that i&apos;ve worked with
          </h2>
          <div className="flex flex-wrap items-center justify-center max-w-5xl mt-2 mx-auto gap-x-16 gap-y-8">
            <Image
              alt="Postgres"
              src="/assets/tools/postgres.png"
              width={96}
              height={96}
              aria-label="Postgres"
            />
            <Image
              alt="MySQL"
              src="/assets/tools/mysql.svg"
              width={96}
              height={96}
              aria-label="MySQL"
            />
            <Image
              alt="Firebase"
              src="/assets/tools/firebase.png"
              width={64}
              height={64}
              aria-label="Firebase"
            />
            <Image
              alt="mongodb"
              src="/assets/tools/mongodb-logo.svg"
              width={96}
              height={96}
              aria-label="mongodb"
            />
            <Image
              alt="supabase"
              src="/assets/tools/supabase.svg"
              width={96}
              height={96}
              aria-label="supabase"
            />
            <Image
              alt="redis"
              src="/assets/tools/redis.png"
              width={96}
              height={96}
              aria-label="redis"
            />
          </div>
        </section>
        <section className="flex flex-col mt-4">
          <h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
            My favorites CMS
          </h2>
          <div className="flex flex-wrap items-center justify-center max-w-5xl mt-2 mx-auto gap-x-16 gap-y-8">
            <Image
              alt="sanity"
              src="/assets/tools/sanity.svg"
              width={96}
              height={96}
              aria-label="sanity"
            />
            <Image
              alt="hygraph"
              src="/assets/tools/hygraph.svg"
              width={96}
              height={96}
              aria-label="hygraph"
            />
            <Image
              alt="strapi"
              src="/assets/tools/strapi.svg"
              width={96}
              height={96}
              aria-label="strapi"
            />
          </div>
        </section>
        <section className="flex flex-col mt-4">
          <h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
            Tests are... amazing!
          </h2>
          <div className="flex flex-wrap items-center justify-center max-w-5xl mt-2 mx-auto gap-x-16 gap-y-8">
            <Image
              alt="jest"
              src="/assets/tools/jest.png"
              width={96}
              height={96}
              aria-label="jest"
            />
            <Image
              alt="cypress"
              src="/assets/tools/cypress.svg"
              width={96}
              height={96}
              aria-label="cypress"
            />
            <Image
              alt="React Testing Libary"
              src="/assets/tools/octopus.png"
              width={88}
              height={88}
              aria-label="React Testing Libary"
            />
          </div>
        </section>
        <section className="flex flex-col mt-4">
          <h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
            My design side
          </h2>
          <div className="flex flex-wrap items-center justify-center max-w-5xl mt-2 mx-auto gap-x-16 gap-y-8">
            <Image
              alt="gsap"
              src="/assets/tools/gsap.png"
              width={96}
              height={96}
              aria-label="gsap"
            />
            <Image
              alt="three-js"
              src="/assets/tools/three-js-logo.png"
              width={96}
              height={96}
              aria-label="three-js"
            />
            <Image
              alt="webgl"
              src="/assets/tools/webgl.png"
              width={96}
              height={96}
              aria-label="webgl"
            />
            <Image
              alt="framer-motion"
              src="/assets/tools/framer-motion.png"
              width={96}
              height={96}
              aria-label="framer-motion"
            />
            <Image
              alt="tailwindcss"
              src="/assets/tools/tailwindcss.png"
              width={156}
              height={96}
              aria-label="tailwindcss"
            />
            <Image
              alt="styled-components"
              src="/assets/tools/styled-components.png"
              width={96}
              height={96}
              aria-label="styled-components"
            />
          </div>
        </section>
        <section className="flex flex-col mt-4">
          <h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
            Backend techologies
          </h2>
          <div className="flex flex-wrap items-center justify-center max-w-5xl mt-2 mx-auto gap-x-16 gap-y-8">
            <Image
              alt="node"
              src="/assets/tools/node.png"
              width={84}
              height={84}
              aria-label="node"
            />
            <Image
              alt="nestjs"
              src="/assets/tools/nestjs.svg"
              width={96}
              height={96}
              aria-label="nestjs"
            />
            <Image
              alt="express"
              src="/assets/tools/express.svg"
              width={128}
              height={128}
              aria-label="express"
            />
            <Image
              alt="docker"
              src="/assets/tools/docker.png"
              width={96}
              height={96}
              aria-label="docker"
            />
          </div>
        </section>
        <section className="flex flex-col mt-4">
          <h2 className="text-cyan-600 font-bold text-xl md:text-2xl lg:text-3xl mt-24 text-center">
            I&apos;m watching <span className="">👀</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center max-w-5xl mt-2 mx-auto gap-x-16 gap-y-8">
            <Image
              alt="solidJS"
              src="/assets/tools/solidJS.png"
              width={84}
              height={84}
              aria-label="solidJS"
            />
            <Image
              alt="remix"
              src="/assets/tools/remix.svg"
              width={96}
              height={96}
              aria-label="remix"
            />
            <Image
              alt="trpc"
              src="/assets/tools/trpc.svg"
              width={88}
              height={88}
              aria-label="trpc"
            />
            <Image
              alt="graphql"
              src="/assets/tools/graphql.svg"
              width={128}
              height={128}
              aria-label="graphql"
            />
            <Image
              alt="apollo"
              src="/assets/tools/apollo.svg"
              width={96}
              height={96}
              aria-label="apollo"
            />
            <Image
              alt="astro"
              src="/assets/tools/astro.png"
              width={88}
              height={88}
              aria-label="astro"
            />
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}

About.theme = "light";

export default About;
