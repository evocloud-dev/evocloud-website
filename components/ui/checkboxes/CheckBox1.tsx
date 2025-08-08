import React from "react";
import { twMerge } from "tailwind-merge";

export default function CheckBox1({
  children,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="checkbox"
      className={twMerge(
        "min-w-4 min-h-4 w-4 h-4 border border-foreground accent-primary rounded-sm focus:ring-primary focus:border-primary",
        className
      )}
    >
      {children}
    </input>
  );
}

{/* <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
</div> */}