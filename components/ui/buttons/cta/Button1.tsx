import React from "react";
import { twMerge } from "tailwind-merge";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   label: string;
//   className?: string;
// }

export default function Button1({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-foreground bg-background hover:opacity-90 shadow-sm transition",
        className
      )}
    >
      {children}
    </button>
  );
}
