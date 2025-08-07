import React from "react";
import { twMerge } from "tailwind-merge";

export default function Card({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={twMerge("rounded-2xl text-left px-8 py-8 w-full border border-border shadow-md flex flex-col justify-between gap-4  bg-linear-to-b from-from to-to", className)}>
      {children}
    </div>
  );
}

export function Cards({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}
