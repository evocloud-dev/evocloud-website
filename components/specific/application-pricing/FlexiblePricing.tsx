"use client";

import React, { useState } from "react";
import H1 from "@/components/ui/headers/H1";
import Button2 from "@/components/ui/buttons/cta/Button2";
import SectionCard from "@/components/general/SectionCard";
import P1 from "@/components/ui/paragraphs/P1";
import Badge1 from "@/components/ui/badges/Badge1";
import { PTop } from "@/components/ui/paragraphs/CardParagraphs";

type Price = {
  description: string;
  cpus: number | string;
  ram: number | string;
  storage: number | string;
  costPerHour: number | string;
  estimatedCostPerMonth: number | string;
};

type PricesByCategory = {
  [key: string]: Price[];
};

// ---- Services grouped by categories ----
const pricesByCategory: PricesByCategory = {
  "AWS Lightsail": [
    {
      description: "LI-MICRO-1C-1G",
      cpus: 1,
      ram: "1 GB",
      storage: "20 GB SSD",
      costPerHour: "$0.007",
      estimatedCostPerMonth: "$5",
    },
    {
      description: "LI-SMALL-2C-4G",
      cpus: 2,
      ram: "4 GB",
      storage: "80 GB SSD",
      costPerHour: "$0.045",
      estimatedCostPerMonth: "$35",
    },
    {
      description: "LI-MEDIUM-4C-8G",
      cpus: 4,
      ram: "8 GB",
      storage: "160 GB SSD",
      costPerHour: "$0.095",
      estimatedCostPerMonth: "$70",
    },
  ],

  "Digital Ocean": [
    {
      description: "Basic-1C-1G",
      cpus: 1,
      ram: "1 GB",
      storage: "25 GB SSD",
      costPerHour: "$0.007",
      estimatedCostPerMonth: "$5",
    },
    {
      description: "Basic-2C-4G",
      cpus: 2,
      ram: "4 GB",
      storage: "80 GB SSD",
      costPerHour: "$0.06",
      estimatedCostPerMonth: "$40",
    },
    {
      description: "CPU-Optimized-4C-8G",
      cpus: 4,
      ram: "8 GB",
      storage: "100 GB SSD",
      costPerHour: "$0.15",
      estimatedCostPerMonth: "$120",
    },
  ],

  VULTR: [
    {
      description: "Cloud Compute-1C-1G",
      cpus: 1,
      ram: "1 GB",
      storage: "25 GB SSD",
      costPerHour: "$0.004",
      estimatedCostPerMonth: "$3.50",
    },
    {
      description: "Cloud Compute-2C-4G",
      cpus: 2,
      ram: "4 GB",
      storage: "80 GB SSD",
      costPerHour: "$0.03",
      estimatedCostPerMonth: "$20",
    },
    {
      description: "High Frequency-4C-8G",
      cpus: 4,
      ram: "8 GB",
      storage: "128 GB NVMe SSD",
      costPerHour: "$0.10",
      estimatedCostPerMonth: "$80",
    },
  ],

  LINODE: [
    {
      description: "Nanode 1C-1G",
      cpus: 1,
      ram: "1 GB",
      storage: "25 GB SSD",
      costPerHour: "$0.0075",
      estimatedCostPerMonth: "$5",
    },
    {
      description: "Linode 2C-4G",
      cpus: 2,
      ram: "4 GB",
      storage: "80 GB SSD",
      costPerHour: "$0.03",
      estimatedCostPerMonth: "$20",
    },
    {
      description: "Linode 4C-8G",
      cpus: 4,
      ram: "8 GB",
      storage: "160 GB SSD",
      costPerHour: "$0.06",
      estimatedCostPerMonth: "$40",
    },
  ],

  SCALEWAY: [
    {
      description: "DEV1-S",
      cpus: 1,
      ram: "2 GB",
      storage: "20 GB SSD",
      costPerHour: "$0.006",
      estimatedCostPerMonth: "$2.99",
    },
    {
      description: "DEV1-M",
      cpus: 2,
      ram: "4 GB",
      storage: "40 GB SSD",
      costPerHour: "$0.012",
      estimatedCostPerMonth: "$5.99",
    },
    {
      description: "PRO2-L",
      cpus: 4,
      ram: "8 GB",
      storage: "120 GB SSD",
      costPerHour: "$0.04",
      estimatedCostPerMonth: "$23.99",
    },
  ],
};

// const allServices = Object.values(pricesByCategory).flat();

const tabs = [
  { name: "AWS Lightsail", icon: <></> },
  { name: "Digital Ocean", icon: <></> },
  { name: "VULTR", icon: <></> },
  { name: "LINODE", icon: <></> },
  { name: "SCALEWAY", icon: <></> },
];

export default function FlexiblePricing() {
  const [activeTab, setActiveTab] = useState(tabs?.[0].name);
  const [search, setSearch] = useState("");

  const prices = pricesByCategory[activeTab] || [];

  const filteredPrices = prices.filter((p) => {
    if (!search) return true;

    const target = search.toLowerCase();
    const descKey = p?.description?.toLowerCase();
    return descKey.includes(target);
  });

  return (
    <div className="flex items-center justify-center bg-linear-to-b from-accent to-primary px-4 py-6 md:px-4 md:py-16">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <H1 className="text-center">
          Flexible pricing to suit every requirement
        </H1>

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
          placeholder="Search price description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
        />

        <div className="relative overflow-x-auto rounded-2xl border border-border shadow-md">
          <table className="w-full text-sm text-left rtl:text-right bg-linear-to-b from-from to-to">
            <thead className="text-sm uppercase text-secondary-foreground">
              <tr>
                <th scope="col" className="px-6 py-3 text-primary">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-primary text-center">
                  CPUs
                </th>
                <th scope="col" className="px-6 py-3 text-primary text-center">
                  RAM
                </th>
                <th scope="col" className="px-6 py-3 text-primary text-center">
                  Storage
                </th>
                <th scope="col" className="px-6 py-3 text-primary text-center">
                  Cost/hour
                </th>
                <th scope="col" className="px-6 py-3 text-primary text-center">
                  Est. cost/month
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredPrices?.map((price) => (
                <tr key={price?.description} className="text-foreground">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-foreground whitespace-nowrap"
                  >
                    {price?.description}
                  </th>
                  <td className="px-6 py-4 text-foreground text-center">
                    {price?.cpus}
                  </td>
                  <td className="px-6 py-4 text-foreground text-center">
                    {price?.ram}
                  </td>
                  <td className="px-6 py-4 text-foreground text-center">
                    {price?.storage}
                  </td>
                  <td className="px-6 py-4 text-foreground font-semibold text-center">
                    {price?.costPerHour}
                  </td>
                  <td className="px-6 py-4 text-foreground font-semibold text-center">
                    {price?.estimatedCostPerMonth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white border-b border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div> */}

        {/* Services Grid */}
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        </div> */}
      </div>
    </div>
  );
}
