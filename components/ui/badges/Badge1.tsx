import React from "react";
import { twMerge } from "tailwind-merge";

interface Badge1Props extends React.HTMLAttributes<HTMLSpanElement> {
  type: "Composition" | "Template" | "Plugin" | "Runtime" | "Addon" | string;
}

const typeStyles: Record<string, string> = {
  Composition: "bg-indigo-900 text-indigo-300 border border-indigo-400",
  Template: "bg-blue-900 text-blue-300 border border-blue-400",
  Plugin: "bg-amber-900 text-amber-300 border border-amber-400",
  Runtime: "bg-green-900 text-green-300 border border-green-400",
  Addon: "bg-pink-900 text-pink-300 border border-pink-400",
  default: "bg-gray-700 text-gray-300 border border-gray-400",
};

export default function Badge1({
  children,
  className,
  type,
  ...props
}: Badge1Props) {
  const style = typeStyles[type] || typeStyles.default;

  return (
    <span
      {...props}
      className={twMerge(
        "text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm",
        style,
        className
      )}
    >
      {children}
    </span>
  );
}
