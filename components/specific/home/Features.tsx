"use client";

import React, { useState, useEffect } from "react";
import Card, { Cards } from "@/components/general/Card";
import Tab, { Tabs } from "@/components/general/Tab";
import Carousel from "@/components/general/Carousel";
import { PTop, PBottom, PMid } from "@/components/ui/paragraphs/CardParagraphs";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";
import SimplifyInfrastructure from "@/components/specific/home/SimplifyInfrastructure";
import SaveCosts from "@/components/specific/home/SaveCosts";
import AutomateWorkflows from "@/components/specific/home/AutomateWorkflows";
import EnableAI from "@/components/specific/home/EnableAI";
import ObserveAndGovern from "@/components/specific/home/ObserveAndGovern";
import ModernApps from "@/components/specific/home/ModernApps";

const tabs = [
  { id: "simplify-infrastructure", label: "Simplify Operation" },
  { id: "save-costs", label: "Cost-Efficiency" },
  { id: "automate-workflows", label: "Everything as Code" },
  { id: "enable-ai", label: "Self-Service & Self-Healing" },
  { id: "observe-and-govern", label: "Enforce Compliance" },
  { id: "modern-apps", label: "Support for Modern Workloads" },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("simplify-infrastructure");

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && tabs.some((t) => t.id === hash)) {
        setActiveTab(hash);
      }
    };

    updateFromHash(); // initial load
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  const switchTabHandler = (id: string) => {
    setActiveTab(id);
    window.location.hash = id; // ✅ does not reset scroll
  };

  return (
    <div className="flex items-center justify-center px-4 py-6 md:px-4 md:py-16 bg-gray-100">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">

        <H1 className="text-primary-foreground mb-4">
          Solution and Ecosystem Partners
        </H1>
        <span className="text-secondary text-center">Innovation doesn’t happen in a silo. There is no need to re-invente the wheel. We build and optimize innovative solutions for enterprise use cases.</span>

        <Carousel className="bg-gray-100"
          logos={[
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/flux/stacked/color/flux-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/operatorframework/stacked/color/operatorframework-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/helm/stacked/color/helm-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/kyverno/stacked/color/kyverno-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/kubernetes/stacked/color/kubernetes-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/opentofu/stacked/color/opentofu-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/landscape/b63a614594d400f58a49d25a79eba24db98709a3/hosted_logos/ansible.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/dapr/stacked/color/dapr-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/karmada/stacked/color/karmada-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/cloudnativepg/stacked/color/cloudnativepg-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/cilium/stacked/color/cilium_stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/strimzi/stacked/color/strimzi-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/spire/stacked/color/spire-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/spiffe/stacked/color/spiffe-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/rook/stacked/color/rook-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/prometheus/stacked/color/prometheus-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/opentelemetry/stacked/color/opentelemetry-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/landscape/b63a614594d400f58a49d25a79eba24db98709a3/hosted_logos/grafana.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/podman/stacked/color/podman-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/nats/stacked/color/nats-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/coredns/stacked/color/coredns-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/headlamp/stacked/color/headlamp-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/harbor/stacked/color/harbor-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/landscape/b63a614594d400f58a49d25a79eba24db98709a3/hosted_logos/gitlab.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/crossplane/stacked/color/crossplane-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/projects/buildpacks/stacked/color/buildpacks-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/artwork/5ec97e4b653342ec2d1e4dd9aaf015c27431591c/other/cncf/stacked/color/cncf-stacked-color.svg",
            "https://raw.githubusercontent.com/cncf/landscape/b63a614594d400f58a49d25a79eba24db98709a3/hosted_logos/canonical-charmed-distribution-of-kubernetes.svg",
            "https://raw.githubusercontent.com/cncf/landscape/b63a614594d400f58a49d25a79eba24db98709a3/hosted_logos/ceph.svg",
            "https://raw.githubusercontent.com/cncf/landscape/b63a614594d400f58a49d25a79eba24db98709a3/hosted_logos/clickhouse.svg",
            "https://raw.githubusercontent.com/cncf/landscape/b63a614594d400f58a49d25a79eba24db98709a3/hosted_logos/ha-proxy-technologies-member.svg",
            "https://raw.githubusercontent.com/cncf/artwork/3e6dbd6b9f3fd3b03e848c10a9921ccc5b5dabf7/projects/capsule/stacked/color/capsule-stacked-color.svg",
          ]}
          repeat={3}
        />

        <H1 className="text-primary-foreground mb-10">
          Build your IT Infrastructure on EvoCloud
        </H1>

        <Cards>
          <Card className="min-h-64">
            <PTop className="text-secondary font-bold">Deployment Time</PTop>
            <PMid className="text-tertiary">40% ↓</PMid>
            <PBottom className="text-secondary"> Reduce Deployment Time and Speed-up Time to Market </PBottom>
          </Card>
          <Card className="min-h-64">
            <PTop className="text-secondary font-bold">Cost Savings</PTop>
            <PMid className="text-tertiary">63%</PMid>
            <PBottom className="text-secondary"> Save on Cloud Cost and Engineering Cycles </PBottom>
          </Card>
          <Card className="min-h-64">
            <PTop className="text-secondary font-bold">Multi-cloud Strategy</PTop>
            <PMid className="text-tertiary">Multi-Cloud</PMid>
            <PBottom className="text-secondary"> Risk Reduction and High Availability </PBottom>
          </Card>
        </Cards>

        <Tabs>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              href="#"
              onClick={() => switchTabHandler(tab.id)}
              active={activeTab === tab.id}
            >
              {tab.label}
            </Tab>
          ))}
        </Tabs>

        {activeTab === "simplify-infrastructure" && <SimplifyInfrastructure />}
        {activeTab === "save-costs" && <SaveCosts />}
        {activeTab === "automate-workflows" && <AutomateWorkflows />}
        {activeTab === "enable-ai" && <EnableAI />}
        {activeTab === "observe-and-govern" && <ObserveAndGovern />}
        {activeTab === "modern-apps" && <ModernApps />}

        <H1 className="text-primary-foreground mb-10">
           Designed for Enterprise Use Cases
        </H1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          <div>
            <P1 className="font-bold text-primary">
              DNS, PKI, Dogtag Infrastructure:{" "}
            </P1>
            <P1 className="text-lg font-normal text-secondary tracking-[0.128px] leading-relaxed">
              Deploy and manage Kubernetes anywhere (AWS, Azure, GCP, Vultr, or
              on any upstream-compatible Kubernetes infrastructure).
            </P1>
          </div>
          <div>
            <P1 className="font-bold text-primary">
              Multi-IaaS Kubernetes Platform:{" "}
            </P1>
            <P1 className="text-lg font-normal text-secondary tracking-[0.128px] leading-relaxed">
              Extend Kubernetes with fine-grained access controls,
              multi-environment support, and other capabilities–integrating over
              20+ CNCF projects under one control panel.
            </P1>
          </div>
          <div>
            <P1 className="font-bold text-primary">
              Multi-Cloud, On-Premise, and Edge:{" "}
            </P1>
            <P1 className="text-lg font-normal text-secondary tracking-[0.128px] leading-relaxed">
              Deploy and promote applications on Kubernetes clusters across
              multiple clouds and define continuous deployment pipelines.{" "}
            </P1>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                  <div>
                    <P1 className="font-bold text-primary">
                      Automated Workloads and GitOps Enabled:{" "}
                    </P1>
                    <P1 className="text-lg font-normal text-secondary tracking-[0.128px] leading-relaxed">
                      Deploy and manage Kubernetes anywhere (AWS, Azure, GCP, Vultr, or
                      on any upstream-compatible Kubernetes infrastructure).
                    </P1>
                  </div>
                  <div>
                    <P1 className="font-bold text-primary">
                      Composable Modules and Self-Service:{" "}
                    </P1>
                    <P1 className="text-lg font-normal text-secondary tracking-[0.128px] leading-relaxed">
                      Extend Kubernetes with fine-grained access controls,
                      multi-environment support, and other capabilities–integrating over
                      20+ CNCF projects under one control panel.
                    </P1>
                  </div>
                  <div>
                    <P1 className="font-bold text-primary">
                      Open Source and Extensible:{" "}
                    </P1>
                    <P1 className="text-lg font-normal text-secondary tracking-[0.128px] leading-relaxed">
                      Deploy and promote applications on Kubernetes clusters across
                      multiple clouds and define continuous deployment pipelines.{" "}
                    </P1>
                  </div>
        </div>
      </div>
    </div>
  );
}
