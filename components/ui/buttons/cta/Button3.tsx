import React from "react";
import { twMerge } from "tailwind-merge";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   label: string;
//   className?: string;
// }

export default function Button3({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center gap-2 cursor-pointer sm:gap-3 px-6 py-3 rounded-lg font-medium text-white bg-primary hover:bg-opacity-90 transition",
        className
      )}
    >
      {children}
    </button>
  );
}
