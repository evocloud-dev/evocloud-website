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
          We leverage Infrastructure as Code, Policy as Code, GitOps, and some Controller logic to ensure desire state, drift detection, and smart reconciliation.
          Building around such a robust automation and orchestration framework makes it easier for platform engineers to build and scale the EvoCloud platform within clear guardrails and security best practices.
        </P1>
      </div>
    </div>
  );
}
