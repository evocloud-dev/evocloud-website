import Link from "next/link";
import Image from "next/image";
import React from "react";
import H2 from "@/components/ui/headers/H2";
import P1 from "@/components/ui/paragraphs/P1";
// import P3 from "@/components/ui/paragraphs/P3";
import Link2 from "@/components/ui/links/Link2";
import Input1 from "@/components/ui/inputs/Input1";
import Button3 from "@/components/ui/buttons/cta/Button3";
import Card from "@/components/general/Card";
import Label1 from "@/components/ui/labels/Label1";
import CheckBox1 from "@/components/ui/checkboxes/CheckBox1";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  const links = [
    {
      title: "Products",
      links: [
        { title: "WSO2 API Manager", href: "#" },
        { title: "WSO2 API Platform for K8s", href: "#" },
        { title: "Choreo for APIM", href: "#" },
      ],
    },
    {
      title: "Integrations",
      links: [
        { title: "WSO2 Integrator", href: "#" },
        { title: "Choreo for Integration", href: "#" },
      ],
    },
    {
      title: "Identity & Access Management",
      links: [
        { title: "WSO2 Identity Server", href: "#" },
        { title: "Asgardeo", href: "#" },
      ],
    },
    {
      title: "Internal Developer Platform",
      links: [{ title: "Choreo", href: "#" }],
    },
    {
      title: "Solutions",
      links: [
        { title: "Health care", href: "#" },
        { title: "Finance", href: "#" },
        { title: "Government", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Customer stories", href: "#" },
        { title: "Documentation", href: "#" },
        { title: "Events", href: "#" },
        { title: "Library", href: "#" },
        { title: "Open Source", href: "#" },
        { title: "Research", href: "#" },
        { title: "Training & Certification", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Subscriptions", href: "#" },
        { title: "Updates", href: "#" },
        { title: "Consulting Services", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About WSO2", href: "#" },
        { title: "Partners", href: "#" },
        { title: "Team", href: "#" },
        { title: "Careers", href: "#" },
        { title: "News", href: "#" },
      ],
    },
  ];

  return (
    <>
      <footer className="px-4 py-6 md:px-4 md:py-12">
        <div className="max-w-screen-xl w-full mx-auto gap-4 sm:gap-x-6 sm:gap-y-12 flex flex-col-reverse sm:flex-row items-start">
          <div className="">
            <Card className="px-4 py-6 md:w-sm">
              <P1 className="text-primary">Get Updates on Choreo</P1>

              <Input1 placeholder="Enter your email address" />

              <div className="flex items-center gap-2">
                <CheckBox1 />
                <Label1>I agree to the WSO2 Data Privacy Policy.</Label1>
              </div>

              <Button3 type="button">Subscribe To choreo Newsletter</Button3>
            </Card>

            <div className="p-4">
              <P1 className="mb-4 text-foreground">Follow us on:</P1>
              <div className="flex items-center gap-4 text-foreground mb-4">
                <Link href="#" className="text-foreground hover:text-primary">
                  <FaDiscord className="min-h-6 min-w-6" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary">
                  <FaTwitter className="min-h-6 min-w-6" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary">
                  <FaLinkedinIn className="min-h-6 min-w-6" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary">
                  <FaYoutube className="min-h-6 min-w-6" />
                </Link>
              </div>
              <Link2 href="#" className="text-foreground mb-2 inline-block">
                @{new Date().getFullYear()} WSO2. All rights reserved
              </Link2>
              {/* <Link2 href="#" className="text-foreground mb-2 inline-block">
              @{new Date().getFullYear()} WSO2. All rights reserved
            </Link2> */}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-x-6 sm:gap-y-12 ">
            {links.map((link) => (
              <div key={link.title} className="">
                <P1 className="text-primary font-semibold mb-4">
                  {link.title}
                </P1>
                <div className="flex flex-col gap-y-1 items-start">
                  {link.links.map((link) => (
                    <Link2 key={link.title} href={link.href}>
                      {link.title}
                    </Link2>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
