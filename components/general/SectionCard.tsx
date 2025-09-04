import React from "react";
import { twMerge } from "tailwind-merge";

export default function SectionCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={twMerge(
        "flex justify-center items-center flex-col md:flex-row gap-4 p-8 md:p-12 bg-white border border-border shadow-md rounded-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
