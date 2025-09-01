import React from "react";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";
import Image from "next/image";

export default function ModernApps() {
  return (
    <div className="flex items-center flex-col md:flex-row gap-4">
      <div className="">
        <H1 className="text-primary mb-4">EvoCloud Platform Plus</H1>
        <P1 className="text-muted-foreground">
          EvoCloud provides a unified platform for managing infrastructure,
          pipelines, and deployments. This allows platform engineers to provide
          an internal developer platform that enables developers to focus on
          building digital experiences.
        </P1>
      </div>
      <Image
        src="/images/evocloud-platform-plus.webp"
        width={640}
        height={650}
        alt="EvoCloud Platform Plus"
        className="bg-white"
      />
    </div>
  );
}
