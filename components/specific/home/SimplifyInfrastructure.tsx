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
          application runtimes, and deployments across various cloud environment.
          It is fault-tolerant and highly available out of the box, which allows Engineers to run
          modern and complex applications with no sweat leveraging built-in tools and orchestrators.
        </P1>
      </div>
    </div>
  );
}
