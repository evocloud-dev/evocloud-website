import React, { useState, useEffect } from "react";
import { useClickAway, useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaChevronDown } from "react-icons/fa";
import Link2 from "@/components/ui/links/Link2";
import { usePathname } from "next/navigation";

interface SimpleLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  links?: {
    title: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

const CLOSE_DROPDOWN_TIMEOUT = 100;

export default function SimpleLink({
  href,
  children,
  className,
  links,
  ...props
}: SimpleLinkProps) {
  const pathname = usePathname();
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
        className="inline-flex flex-col items-stretch md:flex-row md:items-center gap-2 justify-between py-2 px-3 md:p-0 text-black rounded-sm md:bg-transparent cursor-pointer hover:text-primary"
      >
        <span
          className={`flex items-center justify-between gap-2 ${
            links?.some((link) => pathname?.endsWith(link.href)) &&
            "text-primary"
          }`}
        >
          <span>{children}</span>
          <FaChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
        </span>
      </span>

      {isOpen && (
        <div className="md:absolute md:top-[115%] md:left-1/2 md:-translate-x-1/2 bg-white z-50 font-normal divide-y rounded-lg shadow-sm shadow-primary/50 md:w-48">
          <ul className="py-2 text-sm text-muted-foreground divide-y-2">
            {links?.map((link) => (
              <li key={link.title} className="w-full">
                <Link2
                  {...props}
                  href={link.href}
                  className={twMerge(
                    "block w-full px-4 py-2 hover:no-underline",
                    `${pathname?.endsWith(link.href) && "text-primary"}`
                  )}
                  onClick={() =>
                    setTimeout(() => setIsOpen(false), CLOSE_DROPDOWN_TIMEOUT)
                  }
                >
                  <span className="w-full flex items-center gap-2">
                    {link.icon}
                    {link.title}
                  </span>
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
        "inline-flex items-center gap-2 justify-between py-2 px-3 md:p-0 text-black hover:text-primary rounded-sm md:bg-transparent",
        `${pathname?.endsWith(href!) && "text-primary"}`,
        className
      )}
    >
      <span>{children}</span>
    </Link>
  );
}
