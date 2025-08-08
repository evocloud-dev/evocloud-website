import React, { useState, useEffect } from "react";
import { useClickAway, useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaChevronDown } from "react-icons/fa";
import Link2 from "@/components/ui/links/Link2";

interface SimpleLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  links?: {
    title: string;
    href: string;
  }[];
}

export default function SimpleLink({
  href,
  children,
  className,
  links,
  ...props
}: SimpleLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldClose, setShouldClose] = useState(false);
  const debouncedShouldClose = useDebounce(shouldClose, 150);

  useEffect(() => {
    if (debouncedShouldClose) {
      setIsOpen(false);
      setShouldClose(false);
    }
  }, [debouncedShouldClose]);

  const ref = useClickAway<HTMLDivElement>(() => {
    if (isOpen) setShouldClose(true);
  });

  const showDropdown = links?.length ? true : false;

  return showDropdown ? (
    <div ref={ref} className={twMerge("relative", className)}>
      <span
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex flex-col items-stretch md:flex-row md:items-center gap-2 justify-between py-2 px-3 md:p-0 text-foreground rounded-sm md:bg-transparent cursor-pointer hover:text-primary"
      >
        <span className={`flex items-center justify-between gap-2 ${isOpen && "text-primary"}`}>
          <span>{children}</span>
          <FaChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
        </span>
      </span>

      {isOpen && (
        <div className="md:absolute md:top-[115%] md:left-1/2 md:-translate-x-1/2 bg-background z-10 font-normal divide-y divide-border rounded-lg shadow-sm shadow-primary/50 md:w-48">
          <ul className="py-2 text-sm text-muted-foreground divide-y-2 divide-border">
            {links?.map((link) => (
              <li key={link.title}>
                <Link2
                  {...props}
                  href={link.href}
                  className="block px-4 py-2 hover:no-underline"
                >
                  {link.title}
                </Link2>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : (
    <Link
      href={href!}
      {...props}
      className={twMerge(
        "inline-flex items-center gap-2 justify-between py-2 px-3 md:p-0 text-foreground hover:text-primary rounded-sm md:bg-transparent",
        className
      )}
    >
      <span>{children}</span>
    </Link>
  );
}
