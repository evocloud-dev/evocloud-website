import React from "react";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";

export default function SimplifyInfrastructure() {
  return (
    <div className="flex items-center flex-col md:flex-row gap-4">
      <img src="/images/card-cilium.webp" alt="" className="" />
      <div className="">
        <H1 className="text-primary mb-4">Platform Engineering at Scale</H1>
        <P1 className="text-muted-foreground">
          EvoCloud provides a unified platform for deploying and managing platforms, infrastructures,
          and application runtimes in various cloud environment.
          It is fault-tolerant, highly available, and allows Engineers to run
          modern and complex applications with no sweat.
        </P1>
      </div>
    </div>
  );
}
