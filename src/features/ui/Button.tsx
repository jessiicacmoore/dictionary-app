import React from "react";
import { cn } from "@utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...props }: ButtonProps) {
  const buttonClasses =
    "group bg-primary-purple-800 translate-y-0.5 rounded-2xl p-0";
  const mergedClasses = cn(buttonClasses, className);
  return (
    <button {...props} className={mergedClasses}>
      <span className="bg-primary-purple-500 relative block h-full -translate-y-1 rounded-2xl p-6 text-gray-100 transition-transform ease-in-out group-hover:-translate-y-2 group-focus:-translate-y-2 group-active:-translate-y-0.5">
        {children}
      </span>
    </button>
  );
}

export default Button;
