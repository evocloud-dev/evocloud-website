"use client";

import React, { useState } from "react";
import {
  FaAws,
  FaDatabase,
  FaDigitalOcean,
  FaAppStore,
  FaCode,
  FaGitlab,
  FaJava,
  FaServer,
  FaThList,
} from "react-icons/fa";

import {
    VscAzure,
    VscVscode,
} from "react-icons/vsc";

import {
    DiPostgresql,
    DiMysql,
    DiMongodb,
    DiGoogleCloudPlatform,
} from "react-icons/di";

import {
  SiRedis,
  SiBrave,
  SiMariadb,
  SiAnsible,
  SiTerraform,
  SiPacker,
  SiContainerd,
  SiDapr,
  SiFlux,
  SiHarbor,
  SiWordpress,
  SiTrivy,
  SiJoomla,
  SiHelm,
  SiCilium,
  SiDiscourse,
  SiOdoo,
  SiMatomo,
  SiVault,
  SiJenkins,
  SiSonarqube,
  SiDocker,
  SiKubernetes,
  SiCeph,
  SiProxmox,
  SiOracle,
  SiPodman,
} from "react-icons/si";

import H1 from "@/components/ui/headers/H1";
import Button2 from "@/components/ui/buttons/cta/Button2";
import SectionCard from "@/components/general/SectionCard";
import P1 from "@/components/ui/paragraphs/P1";
import Badge1 from "@/components/ui/badges/Badge1";
import { PTop } from "@/components/ui/paragraphs/CardParagraphs";

type Service = {
  name: string;
  desc: string;
  icon: React.ReactNode;
  badge: "Composition" | "Template" | "Plugin" | "Runtime" | "Addon";
  enterprise?: boolean;
};

type ServicesByCategory = {
  [key: string]: Service[];
};

// ---- Services grouped by categories ----
const servicesByCategory: ServicesByCategory = {
  Compositions: [
    {
      name: "CloudNativePG",
      desc: "A cloud-native, highly available, PostgreSQL database cluster with a primary/standby architecture.",
      icon: <DiPostgresql size={50} className="text-muted-foreground" />,
      badge: "Runtime",
      enterprise: true,
    },
    {
      name: "MySQL",
      desc: "The world’s most popular open source database.",
      icon: <DiMysql size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "MongoDB",
      desc: "NoSQL document database for modern applications.",
      icon: <DiMongodb size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Redis",
      desc: "In-memory key-value data store.",
      icon: <SiRedis size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "MariaDB",
      desc: "Community-developed fork of MySQL.",
      icon: <SiMariadb size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Ansible",
      desc: "Configuration management tool for application deployment and lifecycle management.",
      icon: <SiAnsible size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Terraform",
      desc: "Infrastructure automation tool for managing infrastructure lifecycle safely and efficiently.",
      icon: <SiTerraform  size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Packer",
      desc: "Machine image automation tool for creating golden images and multi-cloud machine images.",
      icon: <SiPacker size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
        name: "Vault",
        desc: "A Secret management platform to securely store, access, and manage secrets and other sensitive data.",
        icon: <SiVault  size={50} className="text-muted-foreground" />,
        badge: "Runtime",
    },
    {
      name: "Dapr",
      desc: "Distributed application runtime that provides building block APIs and components for cloud-native development.",
      icon: <SiDapr size={50} className="text-muted-foreground" />,
      badge: "Runtime",
      enterprise: true,
    },
    {
      name: "FluxCD",
      desc: "Flux is a set of controllers that provide a continuous and progressive delivery mechanism for Kubernetes.",
      icon: <SiFlux size={50} className="text-muted-foreground" />,
      badge: "Runtime",
      enterprise: true,
    },
  ],

  Applications: [
    {
      name: "VsCode",
      desc: "Open Source code editor and AI interacted development environment.",
      icon: <VscVscode size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Brave",
      desc: "HTML5 web client and browser with better privacy, faster webpage rendering, and easier navigation.",
      icon: <SiBrave size={50} className="text-muted-foreground" />,
      badge: "Addon",
    },
    {
      name: "Cilium CNI",
      desc: "Advanced cloud-native network interface with eBPF and Gateway API support.",
      icon: <SiCilium size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Helm",
      desc: "Package manager for Kubernetes application deployment and lifecycle management.",
      icon: <SiHelm size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Trivy",
      desc: "A security scanner tool for finding vulnerabilities on artifacts, container images, Kubernetes clusters, and more.",
      icon: <SiTrivy size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Joomla",
      desc: "Another open-source CMS alternative.",
      icon: <SiJoomla size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Matomo",
      desc: "Self-hosted web analytics platform.",
      icon: <SiMatomo size={50} className="text-muted-foreground" />,
      badge: "Addon",
    },
    {
      name: "Odoo",
      desc: "Business apps suite including CRM & ERP.",
      icon: <SiOdoo size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Discourse",
      desc: "Modern forum/discussion platform.",
      icon: <SiDiscourse size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
  ],

  Development: [
    {
      name: "Jenkins",
      desc: "Automation server for CI/CD.",
      icon: <SiJenkins size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "SonarQube",
      desc: "Code quality and security tool.",
      icon: <SiSonarqube size={50} className="text-muted-foreground" />,
      badge: "Addon",
    },
    {
      name: "OpenJDK",
      desc: "Open source implementation of the Java Platform Standard Edition.",
      icon: <FaJava size={50} className="text-muted-foreground" />,
      badge: "Addon",
    },
  ],

  "Hosting & Infrastructure": [
    {
      name: "Docker",
      desc: "A container runtime interface for building and running containerized applications on any hosts.",
      icon: <SiDocker size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
        name: "Containerd",
        desc: "A container runtime interface for containerized application lifecycle management on host systems.",
        icon: <SiContainerd size={50} className="text-muted-foreground" />,
        badge: "Runtime",
        enterprise: true,
    },
    {
        name: "Podman",
        desc: "A container runtime interface for building and running rootless and secured containerized applications.",
        icon: <SiPodman size={50} className="text-muted-foreground" />,
        badge: "Runtime",
    },
    {
      name: "Kubernetes",
      desc: "Container orchestration platform for automating, scaling, and managing microservices.",
      icon: <SiKubernetes size={50} className="text-muted-foreground" />,
      badge: "Runtime",
      enterprise: true,
    },
    {
      name: "AWS",
      desc: "Templates and composable modules for creating a PaaS and downstream EKS Cluster on AWS.",
      icon: <FaAws size={50} className="text-muted-foreground" />,
      badge: "Template",
    },
    {
      name: "GCP",
      desc: "Templates and composable modules for creating a PaaS and downstream GKE Cluster on GCP.",
      icon: <DiGoogleCloudPlatform size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Azure",
      desc: "Templates and composable modules for creating a PaaS and downstream AKS Cluster on Azure.",
      icon: <VscAzure size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Ceph Storage",
      desc: "Composite module for deploying a unified cloud-native storage solution based on Ceph.",
      icon: <SiCeph size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    //{
    //  name: "Proxmox",
    //  desc: "Coming soon...",
    //  icon: <SiProxmox size={50} className="text-muted-foreground" />,
    //  badge: "Composition",
    //},
    //{
    //  name: "OCI",
    //  desc: "Oracle Cloud coming soon...",
    //  icon: <SiOracle size={50} className="text-muted-foreground" />,
    //  badge: "Runtime",
    //},
    //{
    //  name: "DigitalOcean",
    //  desc: "Digital Ocean coming soon...",
    //  icon: <FaDigitalOcean size={50} className="text-muted-foreground" />,
    //  badge: "Runtime",
    //},
    {
        name: "GitLab",
        desc: "A platform for hosting code sources, artifact repositories, and running complex DevSecOps workflows.",
        icon: <FaGitlab size={50} className="text-muted-foreground" />,
        badge: "Runtime",
        enterprise: true,
    },
    {
        name: "Harbor",
        desc: "A platform for hosting OCI compliant artifacts and Helm charts.",
        icon: <SiHarbor size={50} className="text-muted-foreground" />,
        badge: "Runtime",
        enterprise: true,
    },
  ],
};

const allServices = Object.values(servicesByCategory).flat();

const tabs = [
  { name: "All Services", icon: <FaThList /> },
  { name: "Compositions", icon: <FaDatabase /> },
  { name: "Applications", icon: <FaAppStore /> },
  { name: "Development", icon: <FaCode /> },
  { name: "Hosting & Infrastructure", icon: <FaServer /> },
];

export default function AppCatalog() {
  const [activeTab, setActiveTab] = useState("All Services");
  const [search, setSearch] = useState("");

  const services =
    activeTab === "All Services"
      ? allServices
      : servicesByCategory[activeTab] || [];

  const filteredServices = services.filter((s) => {
    if (!search) return true;

    const target = search.toLowerCase();
    const nameKey = s.name.toLowerCase();
    const badgeKey = s.badge.toLowerCase();
    return nameKey.includes(target) || badgeKey.includes(target);
  });

  return (
    <div className="flex items-center justify-center bg-white text-primary-foreground px-4 py-6 md:px-4 md:py-16">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <H1 className="text-center">Why did we build App Catalog?</H1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Button2
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 ${
                activeTab === tab.name ? "bg-background text-white" : ""
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </Button2>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search service by name or badge type"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
        />

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <SectionCard
              key={service.name}
              className="p-4 flex-row items-start justify-start relative"
            >
              <Badge1
                type={service.badge}
                className="absolute top-[10px] right-[10px]"
              >
                {service.badge}
              </Badge1>
              <div className="text-3xl">{service.icon}</div>
              <div>
                <PTop className="text-left text-white">{service.name}</PTop>
                <P1 className="text-left text-muted-foreground mb-6 md:min-h-14">
                  {service.desc}
                </P1>
                {service.enterprise && (
                  <P1 className="text-left text-sm text-muted-foreground flex items-center gap-2">
                    <span>Integrated in:</span> <img className="w-8 h-8" src="/favicon-60x60.png" />
                  </P1>
                )}
              </div>
            </SectionCard>
          ))}
        </div>
      </div>
    </div>
  );
}
