import { FC, ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => {
  return <div className="mx-auto w-full px-4 md:max-w-5xl">{children}</div>;
};
