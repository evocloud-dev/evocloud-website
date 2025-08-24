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
        { title: "EvoCloud Platform", href: "#" },
        { title: "EvoCluster Apps", href: "#" },
        { title: "EvoRuntime Services", href: "#" },
      ],
    },
    {
      title: "Integrations",
      links: [
        { title: "GCP Infrastructure", href: "#" },
        { title: "Oracle Cloud Infrastructure", href: "#" },
        { title: "AWS Infrastructure", href: "#" },
      ],
    },
    {
      title: "Core Components",
      links: [
        { title: "Orchestration Layer", href: "#" },
        { title: "Runtime Services", href: "#" },
        { title: "Identity Provider", href: "#" },
        { title: "CI/CD and GitOps", href: "#" },
        { title: "Cloud-native Applications", href: "#" },
      ],
    },
    {
      title: "Platform Services",
      links: [
        { title: "Application Catalog", href: "#" },
        { title: "Provided Services", href: "#" },
      ],
    },
    {
      title: "Use Cases",
      links: [
        { title: "Sovereign Cloud", href: "#" },
        { title: "Internal Developer PaaS", href: "#" },
        { title: "Hybrid IaaS Support", href: "#" },
        { title: "Self-service Provisioning", href: "#" },
        { title: "Unified Cloud Orchestration", href: "#" },
        { title: "Multi-Cluster Management", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Documentation", href: "#" },
        { title: "Blog & Tutorials", href: "#" },
        { title: "White Papers", href: "#" },
        { title: "Training & Certification", href: "#" },
        { title: "News and Events", href: "#" },
        { title: "Glossary", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Community Support", href: "#" },
        { title: "Experts Consulting", href: "#" },
        { title: "Managed Services", href: "#" },
        { title: "Subscription Services", href: "#" },
        { title: "FAQs", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About Us", href: "#" },
        { title: "Solution Partners", href: "#" },
        { title: "Core Maintainers", href: "#" },
        { title: "Join our Startup", href: "#" },
        { title: "News and Events", href: "#" },
      ],
    },
  ];

  return (
    <>
      <footer className="px-4 py-6 md:px-4 md:py-16">
        <div className="max-w-screen-xl w-full mx-auto gap-4 sm:gap-x-6 sm:gap-y-12 flex flex-col-reverse sm:flex-row items-start">
          <div className="">
            <Card className="px-4 py-6 md:w-sm">
              <P1 className="text-primary">Get Updates on EvoCloud</P1>

              <Input1 placeholder="Enter your email address" />

              <div className="flex items-center gap-2">
                <CheckBox1 />
                <Label1>I agree to the EvoCloud Data Privacy Policy.</Label1>
              </div>

              <Button3 type="button">Subscribe to our Newsletter</Button3>
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
                @{new Date().getFullYear()} EvoCloud. All rights reserved
              </Link2>
              {/* <Link2 href="#" className="text-foreground mb-2 inline-block">
              @{new Date().getFullYear()} EvoCloud. All rights reserved
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
