import React from "react";
import { twMerge } from "tailwind-merge";

export default function H1({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={twMerge(
        "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
