import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const logo = document.getElementById("logo-navbar");
      const coords = logo?.getBoundingClientRect();
      const x = coords?.x;
      const y = coords?.y;
      console.log("x: ", x);
      console.log("y: ", y);

      gsap.to(".preloader", {
        // immediateRender: true,
        ease: "power1.inOut",
        duration: 0.5,
        pointerEvents: "all",
        height: "100%",
        top: "unset",
        bottom: "0%",
      });

      gsap.to(".preloader", {
        // immediateRender: true,
        ease: "power1.inOut",
        duration: 0.5,
        delay: 1,
        pointerEvents: "all",
        height: "0%",
        top: "0%",
        bottom: "unset",
      });

      gsap.fromTo(
        ".my-logo",
        {
          // immediateRender: true,
          ease: "power1.inOut",
          duration: 2,
          delay: 1.5,
          pointerEvents: "all",
          // height: "0%",
          // display: "none",
          // top: "unset",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",

          // bottom: "90%",
          // opacity: 0,
        },
        {
          ease: "power1.inOut",
          duration: 1,
          delay: 1.5,
          x: x,
          y: y,
          width: 48,
          height: 48,
          margin: "0",
          background: "transparent",
        }
      );
      // setTimeout(() => {
      //   gsap.to(".my-logo", {
      //     css: {
      //       display: "none",
      //     },
      //   });
      // }, 2000);

      setTimeout(() => {
        gsap.set(".my-name", {
          css: {
            display: "none",
            opacity: 0,
            height: 0,
            // transition: "all 1s",
          },
        });
        gsap.set(".my-logo", {
          css: {
            display: "none",
            // transition: "all 1s",
          },
        });
        gsap.set(".preloader-circle", {
          css: {
            display: "none",
          },
        });
      }, 1350);

      // setTimeout(() => {}, 1500);
    }
  }, []);

  return (
    <div className="preloader fixed w-full z-[60] flex justify-center items-center bg-white dark:bg-[#10141c] contain-paint">
      <Image
        alt="blur-ball"
        src="/assets/images/blur-ball-blue.webp"
        blurDataURL="/assets/images/blur-ball-blue.webp"
        width={500}
        height={500}
        placeholder="blur"
        className="preloader-circle absolute m-auto inset-0 translate-x-1/4 dark:opacity-60 pointer-events-none"
      />
      <div className="h-full w-full text-center text-6xl text-dark dark:text-white z-50 whitespace-nowrap">
        <Image
          className="my-logo"
          alt="monogram AG logo"
          src="/assets/images/logo-white.png"
          width={480}
          height={480}
          blurDataURL="/assets/images/blur-ball-indigo.webp"
        />
        <span className="my-name text-4xl sm:text-xl">Gabriel </span>{" "}
        <span className="text-cyan-400 text-4xl my-name sm:text-2xl">
          Albuquerque
        </span>
      </div>
      <Image
        alt="blur-ball"
        src="/assets/images/blur-ball-indigo.webp"
        blurDataURL="/assets/images/blur-ball-indigo.webp"
        width={500}
        height={500}
        placeholder="blur"
        className="preloader-circle absolute m-auto inset-0 -translate-x-1/4 dark:opacity-60 dark:hidden pointer-events-none"
      />
      <Image
        alt="blur-ball"
        src="/assets/images/blur-ball-orange.webp"
        blurDataURL="/assets/images/blur-ball-orange.webp"
        width={500}
        height={500}
        placeholder="blur"
        className="preloader-circle absolute m-auto inset-0 -translate-x-1/4 dark:opacity-60 dark: hidden pointer-events-none"
      />
    </div>
  );
};

export { Preloader };
