"use client";

import React, { useState } from "react";
import H1 from "@/components/ui/headers/H1";
import Button2 from "@/components/ui/buttons/cta/Button2";
import SectionCard from "@/components/general/SectionCard";
import P1 from "@/components/ui/paragraphs/P1";
//import Badge1 from "@/components/ui/badges/Badge1";
//import { PTop } from "@/components/ui/paragraphs/CardParagraphs";

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
    <div className="flex items-center justify-center bg-gray-100 text-primary-foreground px-4 py-6 md:px-4 md:py-16">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <div className="">
          <H1 className=" text-center text-primary mb-4">Composable Applications, and Platform Runtimes for your most critical workloads.</H1>
          <P1 className="text-black text-center max-w-2xl mx-auto">
            Simply select compute resources and storage from the Infrastructure Provider that offers flexible pricing and superior performance to best meet your project requirements.
          </P1>
        </div>

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
          <table className="min-w-[800px] w-full text-left bg-white border-border rounded-lg overflow-hidden shadow-sm shadow-primary/50">
            <thead className="text-sm uppercase text-secondary-foreground">
              <tr>
                <th scope="col" className="px-6 py-3 text-tertiary">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-tertiary text-center">
                  CPUs
                </th>
                <th scope="col" className="px-6 py-3 text-tertiary text-center">
                  RAM
                </th>
                <th scope="col" className="px-6 py-3 text-tertiary text-center">
                  Storage
                </th>
                <th scope="col" className="px-6 py-3 text-tertiary text-center">
                  Cost/hour
                </th>
                <th scope="col" className="px-6 py-3 text-tertiary text-center">
                  Est. cost/month
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredPrices?.map((price) => (
                <tr key={price?.description} className="text-foreground">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-black whitespace-nowrap"
                  >
                    {price?.description}
                  </th>
                  <td className="px-6 py-4 text-black text-center">
                    {price?.cpus}
                  </td>
                  <td className="px-6 py-4 text-black text-center">
                    {price?.ram}
                  </td>
                  <td className="px-6 py-4 text-black text-center">
                    {price?.storage}
                  </td>
                  <td className="px-6 py-4 text-black font-semibold text-center">
                    {price?.costPerHour}
                  </td>
                  <td className="px-6 py-4 text-black font-semibold text-center">
                    {price?.estimatedCostPerMonth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
