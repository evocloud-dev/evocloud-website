import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Link2({
  href,
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href!}
      {...props}
      className={twMerge(
        "text-sm text-foreground hover:text-primary hover:underline transition",
        className
      )}
    >
      <span>{children}</span>
    </Link>
  );
}
