import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface IAnimatedPage {
  children: ReactNode;
}

const AnimatedPage: FC<IAnimatedPage> = ({ children }: { children: ReactNode }) => {

  const variants = {
		hidden: { opacity: 0, x: 0, y: 100 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	};

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      variants={variants}
    >
      {children}
    </motion.div>)
}

export { AnimatedPage };
