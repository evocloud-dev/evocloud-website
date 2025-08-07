import React from "react";
import { twMerge } from "tailwind-merge";

export default function H2({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={twMerge(
        "text-lg font-normal tracking-[0.128px] leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
