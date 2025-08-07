import React from "react";
import { twMerge } from "tailwind-merge";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   label: string;
//   className?: string;
// }

export default function Button2({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-background border border-background bg-transparent cursor-pointer hover:bg-background hover:text-white transition",
        className
      )}
    >
      {children}
    </button>
  );
}
