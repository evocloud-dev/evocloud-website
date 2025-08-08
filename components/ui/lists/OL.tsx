import React from "react";
import { twMerge } from "tailwind-merge";

export default function OL({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>) {
  return (
    <ol
      className={twMerge(
        "pl-6 text-foreground text-sm leading-relaxed tracking-wide list-decimal",
        className
      )}
      {...props}
    >
      {children}
    </ol>
  );
}
