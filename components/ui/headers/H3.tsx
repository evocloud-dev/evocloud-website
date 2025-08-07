import React from "react";
import { twMerge } from "tailwind-merge";

export default function H3({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={twMerge(
        "text-base sm:text-lg text-left tracking-[0.128px] font-normal ",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
