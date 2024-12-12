import { cn } from "@utils/cn";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

function Container({ children, className, ...props }: ContainerProps) {
  const containerClasses = cn("max-w-screen-md mx-auto px-4", className);
  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
}

export default Container;
