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
  { id: "simplify-infrastructure", label: "Simplify Operations" },
  { id: "save-costs", label: "Cost-Efficient" },
  { id: "automate-workflows", label: "Promote Everything as Code" },
  { id: "enable-ai", label: "Self-Service & Self-Healing" },
  { id: "observe-and-govern", label: "Enforce Compliance" },
  { id: "modern-apps", label: "Support Modern Workloads" },
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
    <div className="flex items-center justify-center px-4 py-6 md:px-4 md:py-16">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <Carousel
          logos={[
            "https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_clearitt.webp",
            "https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_fator.webp",
            "https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_cutdry.webp",
            "https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_linqura.webp",
            "https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_ohio-state-university.webp",
            "https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_bis.webp",
            "https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_university-of-edinburgh.webp",
            "https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_zeomega.webp",
          ]}
          repeat={3}
        />

        <H1 className="text-primary mb-10">
          Build your IT Infrastructure on EvoCloud
        </H1>

        <Cards>
          <Card className="min-h-64">
            <PTop>Deployment Time</PTop>
            <PMid className="text-primary">40% ↓</PMid>
            <PBottom> Reduce Deployment Time and Speed-up Time to Market </PBottom>
          </Card>
          <Card className="min-h-64">
            <PTop>Cost Savings</PTop>
            <PMid className="text-primary">63%</PMid>
            <PBottom> Save on Cloud Cost and Engineering Cycles </PBottom>
          </Card>
          <Card className="min-h-64">
            <PTop>Multi-cloud Strategy</PTop>
            <PMid className="text-primary">Multi-Cloud</PMid>
            <PBottom> Risk Reduction and High Availability </PBottom>
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

        <H1 className="text-primary mb-10">
           Designed for Enterprise Use Cases
        </H1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          <div>
            <P1 className="font-bold text-primary">
              DNS, PKI, Dogtag Infrastructure:{" "}
            </P1>
            <P1 className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
              Deploy and manage Kubernetes anywhere (AWS, Azure, GCP, Vultr, or
              on any upstream-compatible Kubernetes infrastructure).
            </P1>
          </div>
          <div>
            <P1 className="font-bold text-primary">
              Multi-IaaS Kubernetes Platform:{" "}
            </P1>
            <P1 className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
              Extend Kubernetes with fine-grained access controls,
              multi-environment support, and other capabilities–integrating over
              20+ CNCF projects under one control panel.
            </P1>
          </div>
          <div>
            <P1 className="font-bold text-primary">
              Multi-Cloud, On-Premises, and Edge:{" "}
            </P1>
            <P1 className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
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
                    <P1 className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
                      Deploy and manage Kubernetes anywhere (AWS, Azure, GCP, Vultr, or
                      on any upstream-compatible Kubernetes infrastructure).
                    </P1>
                  </div>
                  <div>
                    <P1 className="font-bold text-primary">
                      Composable Modules and Self-Service:{" "}
                    </P1>
                    <P1 className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
                      Extend Kubernetes with fine-grained access controls,
                      multi-environment support, and other capabilities–integrating over
                      20+ CNCF projects under one control panel.
                    </P1>
                  </div>
                  <div>
                    <P1 className="font-bold text-primary">
                      Open Source and Extensible:{" "}
                    </P1>
                    <P1 className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
                      Deploy and promote applications on Kubernetes clusters across
                      multiple clouds and define continuous deployment pipelines.{" "}
                    </P1>
                  </div>
        </div>
      </div>
    </div>
  );
}
