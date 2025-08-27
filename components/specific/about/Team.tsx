import React from "react";
import Card, { Cards } from "@/components/general/Card";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";

type Member = {
  fullname: string;
  countryCode?: string;
  image?: string;
  title: string;
  linkedin?: string;
};

const members: Member[] = [
  {
    fullname: "Dimitri Patricio",
    title: "CEO",
    linkedin: "https://www.linkedin.com/in/dimitri-patricio/",
    countryCode: "EU",
    image: "https://avatar.iran.liara.run/public/boy?username=Ash",
  },
  {
    fullname: "Sophia Martins",
    title: "CTO",
    linkedin: "https://www.linkedin.com/in/sophia-martins/",
    countryCode: "PT",
    image: "https://avatar.iran.liara.run/public/girl?username=Sophia",
  },
  {
    fullname: "Ethan Johnson",
    title: "Lead Engineer",
    linkedin: "https://www.linkedin.com/in/ethan-johnson/",
    countryCode: "US",
    image: "https://avatar.iran.liara.run/public/boy?username=Ethan",
  },
  {
    fullname: "Maya Okafor",
    title: "Head of Design",
    linkedin: "https://www.linkedin.com/in/maya-okafor/",
    countryCode: "NG",
    image: "https://avatar.iran.liara.run/public/girl?username=Maya",
  },
  {
    fullname: "Lucas Fernandez",
    title: "Product Manager",
    linkedin: "https://www.linkedin.com/in/lucas-fernandez/",
    countryCode: "ES",
    image: "https://avatar.iran.liara.run/public/boy?username=Lucas",
  },
  {
    fullname: "Aria Chen",
    title: "Marketing Director",
    linkedin: "https://www.linkedin.com/in/aria-chen/",
    countryCode: "CN",
    image: "https://avatar.iran.liara.run/public/girl?username=Aria",
  },
  {
    fullname: "Noah Schmidt",
    title: "Data Scientist",
    linkedin: "https://www.linkedin.com/in/noah-schmidt/",
    countryCode: "DE",
    image: "https://avatar.iran.liara.run/public/boy?username=Noah",
  },
  {
    fullname: "Isabella Rossi",
    title: "HR Manager",
    linkedin: "https://www.linkedin.com/in/isabella-rossi/",
    countryCode: "IT",
    image: "https://avatar.iran.liara.run/public/girl?username=Isabella",
  },
  {
    fullname: "Omar Khalid",
    title: "Operations Lead",
    linkedin: "https://www.linkedin.com/in/omar-khalid/",
    countryCode: "AE",
    image: "https://avatar.iran.liara.run/public/boy?username=Omar",
  },
  {
    fullname: "Chloe Dubois",
    title: "Finance Officer",
    linkedin: "https://www.linkedin.com/in/chloe-dubois/",
    countryCode: "FR",
    image: "https://avatar.iran.liara.run/public/girl?username=Chloe",
  },
  {
    fullname: "Raj Patel",
    title: "Business Analyst",
    linkedin: "https://www.linkedin.com/in/raj-patel/",
    countryCode: "IN",
    image: "https://avatar.iran.liara.run/public/boy?username=Raj",
  },
];

type Software = {
  name: string;
  description: string;
  image: string;
};

const softwares: Software[] = [
  {
    name: "Next.js",
    description: "The React framework for production",
    image: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "TypeScript",
    description: "A strongly typed programming language that builds on JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building modern designs",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "PostgreSQL",
    description: "The world's most advanced open-source relational database",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
];


export default function Team() {
  return (
    <div className="flex items-center justify-center bg-linear-to-b from-accent to-primary px-4 py-6 md:px-4 md:py-16">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <H1 className=" text-center">Our amazing team</H1>

        <P1 className="text-foreground text-center max-w-2xl mx-auto">
          Based in Ireland but building an international team with full remote
          mindset since day one. Our multicultural team is composed of
          passionate engineers pushing the boundaries. Open-source is at the
          core of our technology and business, contributing back with code and
          money is one of our main goal.
        </P1>

        <div className="grid gap-4 md:gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <MemberCard key={member.fullname} member={member} />
          ))}
        </div>

        <H1 className=" text-center">Built on open source</H1>

        <P1 className="text-foreground text-center max-w-2xl mx-auto">
          Elestio is used to manage the software and services we use in
          production Aliquyam dolore sed kasd diam labore tempor nonumy
          gubergren kasd.
        </P1>

        <div className="grid gap-4 md:gap-y-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {
            softwares.map((software) => (
              <SoftwareCard key={software.name} software={software} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        {member?.image ? (
          <img
            src={member.image}
            alt={member.fullname}
            className="w-32 h-32 rounded-full"
          />
        ) : (
          <CgProfile className="w-32 h-32" />
        )}
      </div>

      <P1 className="text-center font-semibold tracking-wide">
        {member.fullname}{" "}
        <img
          className="inline w-4 h-4"
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${member.countryCode}.svg`}
          alt={member.countryCode}
        />
      </P1>
      <P1 className="text-center text-sm tracking-wide text-white">
        {member.title}
      </P1>
    </div>
  );
}

function SoftwareCard({software}: {software: Software}) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image src={software.image} alt={software.name} className="w-32 h-32" width={128} height={128}/>
      <P1 className="text-center font-semibold tracking-wide">{software.name}</P1>
      <P1 className="text-center text-sm tracking-wide text-white">
        {software.description}
      </P1>
    </div>
  );
}
