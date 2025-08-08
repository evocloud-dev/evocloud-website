import React from "react";
import Card, { Cards } from "@/components/general/Card";
import Tab, { Tabs } from "@/components/general/Tab";
import Carousel from "@/components/general/Carousel";
import { PTop, PBottom, PMid } from "@/components/ui/paragraphs/CardParagraphs";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";

export default function Features() {
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

        <H1 className="text-primary mb-10">EvoCloud Platform compared to OpenShift</H1>

        <Cards>
          <Card className="min-h-64">
            <PTop>Deployment Time</PTop>
            <PMid className="text-primary">40% ↓</PMid>
            <PBottom> Wealth Management (USA)</PBottom>
          </Card>
          <Card className="min-h-64">
            <PTop>Cost Savings</PTop>
            <PMid className="text-primary">63%</PMid>
            <PBottom> University of Edinburgh </PBottom>
          </Card>
          <Card className="min-h-64">
            <PTop>Fast Recovery</PTop>
            <PMid className="text-primary">Cloud</PMid>
            <PBottom> Home Automation (Australia)</PBottom>
          </Card>
        </Cards>

        <Tabs>
          <Tab href="#" active={false}>
            Simplify Infrastructure
          </Tab>
          <Tab href="#" active={true}>
            Save Costs
          </Tab>
          <Tab href="#" active={false}>
            Automate Workflows
          </Tab>
          <Tab href="#" active={false}>
            Enable AI
          </Tab>
          <Tab href="#" active={false}>
            Observe & Govern
          </Tab>
          <Tab href="#" active={false}>
            Modern Apps
          </Tab>
        </Tabs>

        <div className="flex items-center flex-col md:flex-row gap-4">
          <div className="">
            <H1 className="text-primary mb-4">10X Platform Engineering</H1>
            <P1 className="text-muted-foreground">
              Choreo provides a unified platform for managing infrastructure,
              pipelines, and deployments. This allows platform engineers to
              provide an internal developer platform that enables developers to
              focus on building digital experiences.
            </P1>
          </div>
          <img src="/images/card-cilium.webp" alt="" className="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          <div>
            <P1 className="font-bold text-primary">
              Run Where Your Data Lives:{" "}
            </P1>
            <P1 className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
              Deploy and manage Kubernetes anywhere (AWS, Azure, GCP, Vultr, or
              on any upstream-compatible Kubernetes infrastructure).
            </P1>
          </div>
          <div>
            <P1 className="font-bold text-primary">
              Kubernetes Stuff:{" "}
            </P1>
            <P1 className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
              Extend Kubernetes with fine-grained access controls,
              multi-environment support, and other capabilities–integrating over
              20+ CNCF projects under one control panel.
            </P1>
          </div>
          <div>
            <P1 className="font-bold text-primary">
              Multi-Environment Delivery:{" "}
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
