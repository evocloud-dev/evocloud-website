import React from "react";
import { twMerge } from "tailwind-merge";

export default function H4({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={twMerge(
        "text-3xl text-muted-foreground text-left tracking-[0.128px] font-normal ",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}
