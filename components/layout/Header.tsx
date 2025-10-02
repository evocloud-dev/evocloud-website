"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SimpleLink from "@/components/ui/links/SimpleLink";
import { GiHamburgerMenu } from "react-icons/gi";
import Button4 from "@/components/ui/buttons/cta/Button4";
import { FaSlack } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import {
  REQUEST_A_DEMO_PARAM_KEY,
  REQUEST_A_DEMO_PARAM_VALUE,
} from "@/lib/constants/ui";
import useSetQueryParam from "@/hooks/routing/useSetQueryParam";
import { useUIStore } from "@/providers/ui-store-provider";

export default function Header() {
  const { setQueryParam } = useSetQueryParam();
  const [isOpen, setIsOpen] = useState(false);

  const { heroInView } = useUIStore((state) => state);

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
        { title: "Blog & Tutorials", href: "/blog" },
        { title: "Training Courses", href: "#" },
        { title: "Certifications", href: "#" },
      ],
    },
    {
      title: "Comparisons",
      links: [
        {
          title: "EvoCloud vs OpenShift",
          href: "/comparisons/evocloud-vs-openshift",
        },
        {
          title: "EvoCloud vs Rancher",
          href: "/comparisons/evocloud-vs-rancher",
        },
        {
          title: "EvoCLoud vs VMware",
          href: "/comparisons/evocloud-vs-vmware",
        },
      ],
    },
    {
      title: "Community",
      href: "/community",
      links: [
        {
          title: "Slack",
          href: "#",
          icon: <FaSlack />,
        },
        {
          title: "GitHub",
          href: "#",
          icon: <FaGithub />,
        },
        {
          title: "LinkedIn",
          href: "#",
          icon: <FaLinkedinIn />,
        },
        {
          title: "Twitter",
          href: "#",
          icon: <FaXTwitter />,
        },
        {
          title: "Telegram",
          href: "#",
          icon: <FaTelegramPlane />,
        },
      ],
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Enterprise Support",
      href: "/enterprise-support",
      links: [
        {
          title: "Infrastructure Pricing",
          href: "/enterprise-support/infrastructure-pricing",
        },
        {
          title: "Application Pricing",
          href: "/enterprise-support/application-pricing",
        },
        {
          title: "Engineering Support",
          href: "/enterprise-support/engineering-support",
        },
      ],
    },
  ];

  const requestADemoHandler = () => {
    setQueryParam(REQUEST_A_DEMO_PARAM_KEY, REQUEST_A_DEMO_PARAM_VALUE);
  };

  return (
    <nav
      className={`bg-gray-100 border-border top-0 z-50 transition-all duration-300 ${
        heroInView ? "relative" : "sticky shadow-md"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-0 md:py-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Image
            src="/images/logos/evocloud.svg"
            width={190}
            height={57}
            alt="EvoCloud Logo"
          />
        </Link>

        {/* Actions */}
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
          <Button4 onClick={requestADemoHandler}>Request A Demo</Button4>
          <button
            onClick={handleToggle}
            className="inline-flex items-center w-10 h-10 justify-center text-sm text-foreground rounded-lg md:hidden hover:bg-muted focus:outline-none focus:ring-2 focus:ring-muted"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`items-center justify-between ${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col w-full items-stretch gap-y-2 font-medium text-primary md:p-0 mt-4 rounded-lg bg-muted border-border md:space-x-8 rtl:space-x-reverse md:w-auto md:flex-row md:items-start md:mt-0 md:border-0 md:bg-gray-100">
            {links.map((link) => (
              <SimpleLink key={link.title} href={link.href} links={link.links}>
                {link.title}
              </SimpleLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
