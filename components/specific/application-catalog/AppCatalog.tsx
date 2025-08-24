"use client";

import React, { useState } from "react";
import {
  FaDatabase,
  FaAppStore,
  FaCode,
  FaServer,
  FaThList,
} from "react-icons/fa";
import { DiPostgresql, DiMysql, DiMongodb } from "react-icons/di";
import {
  SiRedis,
  SiMariadb,
  SiSqlite,
  SiApachecassandra,
  SiCockroachlabs,
  SiNeo4J,
  SiInfluxdb,
} from "react-icons/si";
import {
  SiWordpress,
  SiDrupal,
  SiJoomla,
  SiNextcloud,
  SiGhost,
  SiDiscourse,
  SiOdoo,
  SiMatomo,
} from "react-icons/si";
import { SiVaultwarden } from "react-icons/si";
import {
  SiGitlab,
  SiJenkins,
  SiSonarqube,
  SiSentry,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiApache,
  SiProxmox,
  SiWireguard,
  SiOpenvpn,
  SiCaddy,
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
  Databases: [
    {
      name: "PostgreSQL",
      desc: "Open source object-relational database.",
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
      name: "SQLite",
      desc: "Lightweight serverless SQL database.",
      icon: <SiSqlite size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Cassandra",
      desc: "Highly scalable NoSQL database.",
      icon: <SiApachecassandra size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "CockroachDB",
      desc: "Distributed SQL database.",
      icon: <SiCockroachlabs size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Neo4j",
      desc: "Graph database for connected data.",
      icon: <SiNeo4J size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "InfluxDB",
      desc: "Time series database for metrics/events.",
      icon: <SiInfluxdb size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
  ],

  Applications: [
    {
      name: "Wordpress",
      desc: "The most popular open-source website platform.",
      icon: <SiWordpress size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Wordpress-Multisites",
      desc: "Run multiple sites from one installation.",
      icon: <SiWordpress size={50} className="text-muted-foreground" />,
      badge: "Addon",
    },
    {
      name: "Ghost",
      desc: "Powerful publishing platform for creators.",
      icon: <SiGhost size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Nextcloud",
      desc: "Self-hosted content collaboration platform.",
      icon: <SiNextcloud size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Vaultwarden",
      desc: "Lightweight self-hosted password manager.",
      icon: <SiVaultwarden size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "Drupal",
      desc: "Open-source CMS for enterprises.",
      icon: <SiDrupal size={50} className="text-muted-foreground" />,
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
      name: "GitLab",
      desc: "DevOps lifecycle tool.",
      icon: <SiGitlab size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
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
      name: "Sentry",
      desc: "Application error monitoring.",
      icon: <SiSentry size={50} className="text-muted-foreground" />,
      badge: "Addon",
    },
    {
      name: "Harbor",
      desc: "Cloud-native registry for Docker images.",
      icon: <SiDocker size={50} className="text-muted-foreground" />,
      badge: "Addon",
    },
  ],

  "Hosting & Infrastructure": [
    {
      name: "Docker",
      desc: "Container runtime platform.",
      icon: <SiDocker size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Kubernetes",
      desc: "Orchestration system for containers.",
      icon: <SiKubernetes size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Traefik",
      desc: "Modern HTTP reverse proxy & load balancer.",
      icon: <FaServer size={50} className="text-muted-foreground" />,
      badge: "Template",
    },
    {
      name: "Caddy",
      desc: "Web server with auto HTTPS.",
      icon: <SiCaddy size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "NGINX",
      desc: "High-performance web server & proxy.",
      icon: <SiNginx size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Apache",
      desc: "Popular open-source HTTP server.",
      icon: <SiApache size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "Proxmox",
      desc: "Virtualization platform.",
      icon: <SiProxmox size={50} className="text-muted-foreground" />,
      badge: "Composition",
    },
    {
      name: "OpenVPN",
      desc: "Secure VPN server solution.",
      icon: <SiOpenvpn size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
    {
      name: "WireGuard",
      desc: "Modern fast VPN protocol.",
      icon: <SiWireguard size={50} className="text-muted-foreground" />,
      badge: "Runtime",
    },
  ],
};

const allServices = Object.values(servicesByCategory).flat();

const tabs = [
  { name: "All Services", icon: <FaThList /> },
  { name: "Databases", icon: <FaDatabase /> },
  { name: "Applications", icon: <FaAppStore /> },
  { name: "Development", icon: <FaCode /> },
  { name: "Hosting & Infrastructure", icon: <FaServer /> },
];

export default function AppCatalog() {
  const [activeTab, setActiveTab] = useState("Applications");
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
    <div className="flex items-center justify-center bg-linear-to-b from-accent to-primary px-4 py-6 md:px-4 md:py-16">
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
                    <span>Supported by:</span> <img className="w-8 h-8" src="/favicon-60x60.png" />
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
