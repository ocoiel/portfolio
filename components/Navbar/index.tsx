import { useEffect, useState } from "react";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <div
        className={`${
          isActive
            ? "font-bold text-gray-900 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400"
        } 'hidden md:inline-block p-1 sm:px-6 sm:py-2 rounded-full hover:bg-gray-100 dark:hover:bg-midnight transition-all`}
      >
        <span
          className={`${
            isActive
              ? "py-1 border-b-2 border-[#29d] dark:[#2689c2] dark:text-slate-100"
              : "capsize"
          }`}
        >
          {text}
        </span>
      </div>
    </NextLink>
  );
}

export function NavMenu({}) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // A flag to know when the page has mounted so the theme can be accessed
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="z-50 sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 text-gray-900 dark:text-gray-100">
      <nav className="flex sticky items-center justify-between max-w-6xl px-4 py-2 mx-auto sm:px-6 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <span className="sr-only">Gabriel Albuquerque</span>
          <Image
            alt="monogram logo AG"
            height={50}
            width={50}
            src={
              resolvedTheme === "dark"
                ? "/assets/images/logo-white.png"
                : "/assets/images/logo-black.png"
            }
            placeholder="blur"
            blurDataURL={"/assets/images/logo-white.png"}
            className="rounded-full z-[80]"
            id="logo-navbar"
          />
        </div>
        <div className="-my-2 -mr-2 md:hidden" onClick={() => setIsOpen(true)}>
          <div className="bg-gray-200 dark:bg-transparent text-gray-600 dark:text-gray-300 rounded-full p-3.5 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 cursor-pointer focus:outline-none general-ring-state">
            <span className="sr-only">Open menu</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 5.75H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 18.25H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 12H19.25"
              ></path>
            </svg>
          </div>
        </div>
        <nav className="hidden sticky space-x-6 text-lg md:flex">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/blog" text="Blog" />
        </nav>
        <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <span className="flex px-3">en/pt-br</span>
          {/* <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full dark:bg-midnight general-ring-state"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && (
              <div>
                {resolvedTheme === "dark" ? (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="3.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 2.75V4.25"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 6.75L16.0659 7.93416"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21.25 12.0001L19.75 12.0001"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 17.2501L16.0659 16.066"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 19.75V21.25"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.9341 16.0659L6.74996 17.25"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.25 12.0001L2.75 12.0001"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.93405 7.93423L6.74991 6.75003"
                    ></path>
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
                    ></path>
                  </svg>
                )}
              </div>
            )}
          </button> */}
        </div>
      </nav>

      {/* Conditional rendering here to ensure that dialog portal isn't removed on route change. */}
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 md:hidden"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />

          <div className="fixed w-full max-w-xs p-6 text-base font-semibold text-gray-900 bg-white rounded-lg shadow-lg top-4 right-4 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span className="sr-only">Close navigation</span>
              <svg
                viewBox="0 0 10 10"
                className="w-2.5 h-2.5 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <ul className="space-y-6">
              <li>
                <NextLink href="/">
                  <div className="border-[#29d] dark:[#2689c2]">Home</div>
                </NextLink>
              </li>
              <li>
                <NextLink href="/about">
                  <div className="border-[#29d] dark:[#2689c2]">About</div>
                </NextLink>
              </li>
              <li>
                <NextLink href="/projects">
                  <div className="border-[#29d] dark:[#2689c2]">Projects</div>
                </NextLink>
              </li>
              <li>
                <NextLink href="/blog">
                  <div className="border-[#29d] dark:[#2689c2]">Blog</div>
                </NextLink>
              </li>
              <li>
                <NextLink href="/community-wall">
                  <div className="border-[#29d] dark:[#2689c2]">
                    Community wall
                  </div>
                </NextLink>
              </li>
            </ul>
            <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-200/10">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="flex items-center justify-center w-full py-3 bg-gray-200 rounded-full dark:bg-midnight-hover general-ring-state"
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
              >
                {mounted && (
                  <>
                    <div>
                      {resolvedTheme === "dark" ? (
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="3.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></circle>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 2.75V4.25"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.25 6.75L16.0659 7.93416"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M21.25 12.0001L19.75 12.0001"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.25 17.2501L16.0659 16.066"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 19.75V21.25"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M7.9341 16.0659L6.74996 17.25"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M4.25 12.0001L2.75 12.0001"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M7.93405 7.93423L6.74991 6.75003"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
                          ></path>
                        </svg>
                      )}
                    </div>
                    {resolvedTheme === "dark" ? (
                      <p className="ml-3 font-semibold">
                        Change to light theme
                      </p>
                    ) : (
                      <p className="ml-3 font-semibold">Change to dark theme</p>
                    )}
                  </>
                )}
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
