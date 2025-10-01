import React from "react";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";
import Image from "next/image";

export default function EnableAI() {
  return (
    <div className="flex items-center flex-col md:flex-row gap-4">
      <div className="">
        <H1 className="text-primary mb-4">EvoCloud Architecture</H1>
        <P1 className="text-secondary">
          EvoCloud provides a unified platform for managing infrastructure,
          pipelines, and deployments. This allows platform engineers to provide
          an internal developer platform that enables developers to focus on
          building digital experiences.
        </P1>
      </div>
      <Image
        src="/images/evocloud-architecture.svg"
        width={640}
        height={480}
        alt="EvoCloud Multicloud"
        className="bg-white border border-border shadow-md rounded-2xl"
      />
    </div>
  );
}
