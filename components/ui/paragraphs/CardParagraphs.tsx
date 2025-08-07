import React from "react";
import { twMerge } from "tailwind-merge";

export function PTop({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={twMerge(
        "text-lg text-center text-muted-foreground tracking-[0.128px]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
export function PMid({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={twMerge(
        "text-5xl text-center font-bold flex justify-center items-center gap-2 text-foreground ",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
export function PBottom({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={twMerge(
        "text-xl text-center text-muted-foreground tracking-[0.128px]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

{
  /* <h3
        className="text-lg mb-8"
        style={{ color: "var(--muted-foreground)", letterSpacing: "0.128px" }}
      >
        {text1}
      </h3>

      <div
        className="text-5xl font-bold flex justify-center items-center gap-2 mb-8"
        style={{ color: "white" }}
      >
        <span>{text2}</span>
      </div>

      <p
        className="text-xl tracking-wide"
        style={{ color: "var(--muted-foreground)", letterSpacing: "0.128px" }}
      >
        {text3}
      </p> */
}
