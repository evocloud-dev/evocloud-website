import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface TabProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
  href: string;
}

export default function Tab({
  children,
  active = false,
  className,
  href = "#",
  onClick,
  ...props
}: TabProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick?.(e);
  }

  return (
    <li className="me-2">
      <Link
        href={href}
        className={twMerge(
          "inline-block p-4 border-b-2 rounded-t-lg transition-colors cursor-pointer",
          active
            ? "text-primary border-primary"
            : "text-muted-foreground border-transparent hover:text-primary hover:border-border",
          className
        )}
        aria-current={active ? "page" : undefined}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export function Tabs({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("flex justify-start", className)}>
      <div className="text-sm font-medium text-center max-w-full overflow-x-auto overflow-y-hidden md:w-auto text-muted-foreground border-b border-border">
        <ul className="flex md:flex-wrap -mb-px">{children}</ul>
      </div>
    </div>
  );
}
