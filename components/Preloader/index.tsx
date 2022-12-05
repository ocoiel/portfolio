import gsap from "gsap";
import Image from "next/image";

function playTransition () {
  gsap.to(".preloader", {
    ease: "power1.inOut",
    uration: 0.5,
    pointerEvents: "all",
    height: "100%",
    top: "unset",
    bottom: "0%",
  });

  gsap.to(".page-transition", {
    ease: "power1.inOut",
    duration: 0.5,
    delay: 1,
    pointerEvents: "all",
    height: "0%",
    top: "0%",
    bottom: "unset",
  });
}

function startTransition () {
  gsap.to(".page-transition", {
    ease: "power1.inOut",
    duration: 0,
    pointerEvents: "all",
    height: "100%",
    top: "unset",
    bottom: "0%",
  });
  gsap.to(".page-transition", {
    ease: "power1.inOut",
    duration: 0.5,
    delay: 1,
    pointerEvents: "all",
    height: "0%",
    top: "0%",
    bottom: "unset",
  });
}

const Preloader = () => {
  return (
    <div className="page-transition fixed w-full z-40 flex justify-center items-center bg-white dark:bg-bgColor contain-paint">
      <Image
        alt="blur-ball"
        src="/assets/images/blur-ball-blue.webp"
        className="absolute m-auto inset-0 translate-x-1/4 dark:opacity-60 pointer-events-none"
      />
      <div className="my-name h-fit w-fit text-6xl text-lightTextColor dark:text-white absolute inset-0 m-auto z-50 whitespace-nowrap">
        Gabriel <span className="text-border">Albuquerque</span>
      </div>
      <Image
        alt="blur-ball"
        src="/assets/images/blur-ball-indigo.webp"
        className="absolute m-auto inset-0 -translate-x-1/4 dark:opacity-60 dark:hidden pointer-events-none"
      />
      <Image
        alt="blur-ball"
        src="/assets/images/blur-ball-orange.webp"
        className="absolute m-auto inset-0 -translate-x-1/4 dark:opacity-60 dark:block hidden pointer-events-none"
      />
    </div>
  );
}

export { Preloader, playTransition, startTransition }
