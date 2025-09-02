import React from "react";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";
import Image from "next/image";

export default function AutomateWorkflows() {
  return (
    <div className="flex items-center flex-col md:flex-row gap-4">
      <Image
        src="/images/evocloud-automation.webp"
        width={640}
        height={650}
        alt="EvoCloud Automation"
        className="bg-white border border-border shadow-md rounded-2xl"
      />
      <div className="">
        <H1 className="text-primary mb-4">Automation at its Core</H1>
        <P1 className="text-secondary">
          Built around a robust automation and orchestration framework,
          EvoCloud makes it easier for platform engineers to build and
          scale within clear guardrails and security best practices.
          Benefits of using the EvoCloud Platform:
          <li> Infrastructure as Code </li>
          <li> Application as Code </li>
          <li> Policy as Code </li>
          <li> Orchestration Framework </li>
          <li> GitOps and Controller logic </li>
          <li> Desire State, Drift Detection, and Smart Reconciliation </li>
        </P1>
      </div>
    </div>
  );
}
