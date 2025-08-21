"use client";

import React, { useState } from "react";
import { FaDatabase, FaAppStore, FaCode, FaServer, FaThList } from "react-icons/fa";
import { DiPostgresql, DiMysql, DiMongodb } from "react-icons/di";
import { SiRedis, SiMariadb, SiSqlite, SiApachecassandra, SiCockroachlabs, SiNeo4J, SiInfluxdb } from "react-icons/si";
import { SiWordpress, SiDrupal, SiJoomla, SiNextcloud, SiGhost, SiDiscourse, SiOdoo, SiMatomo } from "react-icons/si";
import { SiVaultwarden } from "react-icons/si";
import { SiGitlab, SiJenkins, SiSonarqube, SiSentry, SiDocker, SiKubernetes, SiNginx, SiApache, SiProxmox, SiWireguard, SiOpenvpn, SiCaddy } from "react-icons/si";

import H1 from "@/components/ui/headers/H1";
import Button2 from "@/components/ui/buttons/cta/Button2";
import SectionCard from "@/components/general/SectionCard";
import P1 from "@/components/ui/paragraphs/P1";
import { PTop } from "@/components/ui/paragraphs/CardParagraphs";

type Service = {
  name: string;
  desc: string;
  icon: React.ReactNode;
};

type ServicesByCategory = {
  [key: string]: Service[];
};

// ---- Services grouped by categories ----
const servicesByCategory: ServicesByCategory = {
  Databases: [
    { name: "PostgreSQL", desc: "Open source object-relational database.", icon: <DiPostgresql className="text-muted-foreground"/> },
    { name: "MySQL", desc: "The world’s most popular open source database.", icon: <DiMysql className="text-muted-foreground"/> },
    { name: "MongoDB", desc: "NoSQL document database for modern applications.", icon: <DiMongodb className="text-muted-foreground"/> },
    { name: "Redis", desc: "In-memory key-value data store.", icon: <SiRedis className="text-muted-foreground"/> },
    { name: "MariaDB", desc: "Community-developed fork of MySQL.", icon: <SiMariadb className="text-muted-foreground"/> },
    { name: "SQLite", desc: "Lightweight serverless SQL database.", icon: <SiSqlite className="text-muted-foreground"/> },
    { name: "Cassandra", desc: "Highly scalable NoSQL database.", icon: <SiApachecassandra className="text-muted-foreground"/> },
    { name: "CockroachDB", desc: "Distributed SQL database.", icon: <SiCockroachlabs className="text-muted-foreground"/> },
    { name: "Neo4j", desc: "Graph database for connected data.", icon: <SiNeo4J className="text-muted-foreground"/> },
    { name: "InfluxDB", desc: "Time series database for metrics/events.", icon: <SiInfluxdb className="text-muted-foreground"/> },
  ],

  Applications: [
    { name: "Wordpress", desc: "The most popular open-source website platform.", icon: <SiWordpress className="text-muted-foreground"/> },
    { name: "Wordpress-Multisites", desc: "Run multiple sites from one installation.", icon: <SiWordpress className="text-muted-foreground"/> },
    { name: "Ghost", desc: "Powerful publishing platform for creators.", icon: <SiGhost className="text-muted-foreground"/> },
    { name: "Nextcloud", desc: "Self-hosted content collaboration platform.", icon: <SiNextcloud className="text-muted-foreground"/> },
    { name: "Vaultwarden", desc: "Lightweight self-hosted password manager.", icon: <SiVaultwarden className="text-muted-foreground"/> },
    { name: "Drupal", desc: "Open-source CMS for enterprises.", icon: <SiDrupal className="text-muted-foreground"/> },
    { name: "Joomla", desc: "Another open-source CMS alternative.", icon: <SiJoomla className="text-muted-foreground"/> },
    { name: "Matomo", desc: "Self-hosted web analytics platform.", icon: <SiMatomo className="text-muted-foreground"/> },
    { name: "Odoo", desc: "Business apps suite including CRM & ERP.", icon: <SiOdoo className="text-muted-foreground"/> },
    { name: "Discourse", desc: "Modern forum/discussion platform.", icon: <SiDiscourse className="text-muted-foreground"/> },
  ],

  Development: [
    { name: "GitLab", desc: "DevOps lifecycle tool.", icon: <SiGitlab className="text-muted-foreground"/> },
    { name: "Jenkins", desc: "Automation server for CI/CD.", icon: <SiJenkins className="text-muted-foreground"/> },
    { name: "SonarQube", desc: "Code quality and security tool.", icon: <SiSonarqube className="text-muted-foreground"/> },
    { name: "Sentry", desc: "Application error monitoring.", icon: <SiSentry className="text-muted-foreground"/> },
    { name: "Harbor", desc: "Cloud-native registry for Docker images.", icon: <SiDocker className="text-muted-foreground"/> },
  ],

  "Hosting & Infrastructure": [
    { name: "Docker", desc: "Container runtime platform.", icon: <SiDocker className="text-muted-foreground"/> },
    { name: "Kubernetes", desc: "Orchestration system for containers.", icon: <SiKubernetes className="text-muted-foreground"/> },
    { name: "Traefik", desc: "Modern HTTP reverse proxy & load balancer.", icon: <FaServer className="text-muted-foreground"/> },
    { name: "Caddy", desc: "Web server with auto HTTPS.", icon: <SiCaddy className="text-muted-foreground"/> },
    { name: "NGINX", desc: "High-performance web server & proxy.", icon: <SiNginx className="text-muted-foreground"/> },
    { name: "Apache", desc: "Popular open-source HTTP server.", icon: <SiApache className="text-muted-foreground"/> },
    { name: "Proxmox", desc: "Virtualization platform.", icon: <SiProxmox className="text-muted-foreground"/> },
    { name: "OpenVPN", desc: "Secure VPN server solution.", icon: <SiOpenvpn className="text-muted-foreground"/> },
    { name: "WireGuard", desc: "Modern fast VPN protocol.", icon: <SiWireguard className="text-muted-foreground"/> },
    // { name: "HAProxy", desc: "High availability load balancer.", icon: <SiHaproxy className="text-muted-foreground"/> },
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

  const filteredServices = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

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
          placeholder="Search service by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
        />

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <SectionCard
              key={service.name}
              className="p-4 flex-row items-start justify-start"
            >
              <div className="text-3xl">{service.icon}</div>
              <div>
                <PTop className="text-left text-white">{service.name}</PTop>
                <P1 className="text-left text-muted-foreground">
                  {service.desc}
                </P1>
              </div>
            </SectionCard>
          ))}
        </div>
      </div>
    </div>
  );
}
