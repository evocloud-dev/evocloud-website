import React from "react";
import { twMerge } from "tailwind-merge";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   label: string;
//   className?: string;
// }

export default function Button4({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center gap-2 cursor-pointer sm:gap-3 px-2 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-primary border border-primary hover:bg-primary hover:text-white transition",
        className
      )}
    >
      {children}
    </button>
  );
}
