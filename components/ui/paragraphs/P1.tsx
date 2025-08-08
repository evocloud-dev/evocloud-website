import React from "react";
import { twMerge } from "tailwind-merge";

export default function P1({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
  return (
    <p
      className={twMerge(
        "text-base text-left tracking-[0.128px] font-normal ",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
