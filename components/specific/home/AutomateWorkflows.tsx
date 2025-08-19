import React from "react";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";

export default function AutomateWorkflows() {
  return (
    <div className="flex items-center flex-col md:flex-row gap-4">
      <img src="/images/card-cilium.webp" alt="" className="" />
      <div className="">
        <H1 className="text-primary mb-4">Automation at its Core</H1>
        <P1 className="text-muted-foreground">
          The EvoCloud platform is built around a robust automation and orchestration framework,
          that allows platform engineers to provide
          an internal developer platform that enables developers to focus on
          building digital experiences.
        </P1>
      </div>
    </div>
  );
}
