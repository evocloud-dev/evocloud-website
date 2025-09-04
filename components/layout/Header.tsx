"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleLink from "@/components/ui/links/SimpleLink";
import { GiHamburgerMenu } from "react-icons/gi";
import Button4 from "@/components/ui/buttons/cta/Button4";
import { link } from "fs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      title: "Solutions",
      links: [
        { title: "EvoCloud", href: "/evocloud" },
        { title: "EvoCluster Apps", href: "/evocluster-apps" },
        { title: "Application Catalog", href: "/application-catalog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Documentation", href: "/documentation" },
        { title: "Blog & Tutorials", href: "#" },
        { title: "Training Courses", href: "#" },
        { title: "Certifications", href: "#" },
      ],
    },
    {
      title: "Comparisons",
      links: [
        { title: "EvoCloud vs OpenShift", href: "#" },
        { title: "EvoCloud vs Rancher", href: "#" },
        { title: "EvoCLoud vs VMware", href: "#" },
      ],
    },
    {
      title: "Community",
      href: "#",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Pricing",
      href: "/pricing",
      links: [
        { title: "Infrastructure Pricing", href: "/pricing/infrastructure-pricing" },
        { title: "Application Pricing", href: "/pricing/application-pricing" },
        { title: "Engineering Support", href: "/pricing/engineering-support" },
      ]
    }
  ];

  return (
    <nav className="bg-background border-border">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-0 md:py-8">
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Image
            // src="/favicon-96x96.png"
            src="/images/logos/newfavicon-114x114.png"
            width={32}
            height={32}
            alt="EvoCloud Logo"
          />
          <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-foreground">
            EvoCloud
          </span>
        </Link>
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
          <Button4>Request A Demo</Button4>
          <button
            onClick={handleToggle}
            className="inline-flex items-center w-10 h-10 justify-center text-sm text-foreground rounded-lg md:hidden hover:bg-muted focus:outline-none focus:ring-2 focus:ring-muted"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col w-full items-stretch gap-y-2 font-medium md:p-4 md:p-0 mt-4 border rounded-lg bg-muted border-border md:space-x-8 rtl:space-x-reverse md:w-auto md:flex-row md:items-start md:mt-0 md:border-0 md:bg-background">
            {links.map((link) => (
              <SimpleLink
                key={link.title}
                href={link.href}
                links={link.links}
              >
                {link.title}
              </SimpleLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}