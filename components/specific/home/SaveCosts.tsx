import React from "react";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";

export default function SaveCosts() {
  return (
    <div className="flex items-center flex-col md:flex-row gap-4">
      <div className="">
        <H1 className="text-primary mb-4">Save on Cost</H1>
        <P1 className="text-muted-foreground">
          With its built-in automated workflows, EvoCloud optimizes infrastructure cost
          by leveraging spot instances, auto-scaling capabilities, and real-time cost analysis.
          <li> A cost-efficient strategy could make use of multi-cloud, geo-location, timezone,
          hybrid-cloud, and spot-instance to drive down platform cost. </li>
          <li> EvoCloud also reduces Engineering cycles by providing core built-in tools and
          application catalogs to speed-up app composition. </li>
        </P1>
      </div>
      <img src="/images/card-cilium.webp" alt="" className="" />
    </div>
  );
}
