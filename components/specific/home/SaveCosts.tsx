import React from "react";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";

export default function SaveCosts() {
  return (
    <div className="flex items-center flex-col md:flex-row gap-4">
      <div className="">
        <H1 className="text-primary mb-4">Save Costs</H1>
        <P1 className="text-muted-foreground">
          Choreo provides a unified platform for managing infrastructure,
          pipelines, and deployments. This allows platform engineers to provide
          an internal developer platform that enables developers to focus on
          building digital experiences.
        </P1>
      </div>
      <img src="/images/card-cilium.webp" alt="" className="" />
    </div>
  );
}
