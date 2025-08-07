import React from "react";
import { twMerge } from "tailwind-merge";

export default function Input1({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={twMerge(
        "bg-input px-4 py-2 border border-border text-foreground text-sm rounded-md focus:ring-primary focus:border-primary block w-full",
        className
      )}
      {...props}
    />
  );
}

