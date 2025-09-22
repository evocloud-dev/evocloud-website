"use client";

import React, { useState } from "react";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

const plans = [
  {
    key: "EvoCloud",
    title: "EvoCloud",
    price: "Free",
    recommended: "Testing",
    support: "Guides & Community",
  },
  {
    key: "VMWare",
    title: "VMWare",
    price: "$50/service/month",
    recommended: "Growth & Staging",
    support: "We will troubleshoot/fix your service directly",
  }
];

const rows = [
  { type: "header", label: "Features" },
  {
    type: "feature",
    label: "Pricing",
    values: ["Free", "$50/service/month"],
  },
  {
    type: "feature",
    label: "Recommended for",
    values: ["Testing", "Growth & Staging"],
  },
  {
    type: "feature",
    label: "Service support",
    values: [
      "Guides & Community",
      "We will troubleshoot/fix your service directly",
    ],
  },

  // --------------------
  { type: "section", label: "Resilience & Backups" },
  {
    type: "feature",
    label: "Minimum uptime",
    values: ["99.5%", "99.9%"],
  },
  {
    type: "feature",
    label: "Automated daily VM snapshots",
    values: ["—", "2 daily snapshots"],
  },
  {
    type: "feature",
    label: "Automated remote backups (Borg)",
    values: ["check", "check"],
  },
  {
    type: "feature",
    label: "External backups (S3)",
    values: ["check", "check"],
  },
  {
    type: "feature",
    label: "Manual backups",
    values: ["check", "check"],
  },
  {
    type: "feature",
    label: "Dedicated VM per service",
    values: ["check", "check"],
  },
  {
    type: "feature",
    label: "Priority queuing",
    values: ["check", "check"],
  },
  {
    type: "feature",
    label: "Retention",
    values: ["7 days retention", "14 days retention"],
  },

  // --------------------
  { type: "section", label: "Software & Infrastructure" },
  {
    type: "feature",
    label: "Language/Framework support",
    values: [
      "Limited",
      "Standard (Node, Python, PHP)",
    ],
  },
  {
    type: "feature",
    label: "Database options",
    values: ["SQLite", "Postgres & MySQL"],
  },
  {
    type: "feature",
    label: "Scalability",
    values: [
      "Single instance",
      "Horizontal scaling (manual)",
    ],
  },

  // --------------------
  { type: "section", label: "Deployment & Maintenance" },
  {
    type: "feature",
    label: "CI/CD integration",
    values: [
      "Manual deploys only",
      "GitHub/GitLab pipelines",
    ],
  },
  {
    type: "feature",
    label: "Zero-downtime deployments",
    values: ["—", "Basic rolling updates"],
  },
  {
    type: "feature",
    label: "Monitoring & alerts",
    values: [
      "Community docs",
      "Basic alerts (email)",
    ],
  },

  // --------------------
  { type: "section", label: "Security" },
  {
    type: "feature",
    label: "SSL/TLS certificates",
    values: [
      "Self-signed",
      "Auto Let's Encrypt",
    ],
  },
  {
    type: "feature",
    label: "Access control",
    values: ["Single user only", "Basic team roles",],
  },
  {
    type: "feature",
    label: "Compliance",
    values: ["—", "GDPR ready"],
  },
];

export default function Compare() {
  // Grab all section labels
  const sectionLabels: string[] = rows
    .filter(
      (r): r is { type: "section"; label: string } => r.type === "section"
    )
    .map((r) => r.label);

  // Shape of state: Record<sectionLabel, boolean>
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    sectionLabels.reduce<Record<string, boolean>>((acc, label) => {
      acc[label] = true; // all open by default
      return acc;
    }, {})
  );

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
  return (
    <div className="flex items-center justify-center bg-gray-100 text-primary-foreground px-4 py-6 md:px-4 md:py-16">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <div className="">
          <H1 className=" text-center text-primary mb-4">EvoCloud vs VMWare</H1>
          <P1 className="text-black text-center max-w-2xl mx-auto">
            EvoCloud provides great support - you can choose a support plan
            according to your needs, but for many use cases our Level 1 Support
            plan will be all you need.
          </P1>
        </div>

        <table className="min-w-[800px] w-full text-left bg-white border-border rounded-lg overflow-hidden shadow-sm shadow-primary/50">
          <thead>
            <tr>
              <th className="py-4 px-4 text-lg font-semibold w-1/3 text-tertiary">
                Features
              </th>
              {plans.map((p) => (
                <th
                  key={p.key}
                  className="py-4 px-4 text-center text-lg font-semibold text-tertiary"
                >
                  {p.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="[&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-[var(--border)]">
            {rows.map((row, i) => {
              // SECTION ROW
              if (row.type === "section") {
                const isOpen = openSections[row.label];
                return (
                  <tr
                    key={`section-${row.label}`}
                    className="bg-primary cursor-pointer"
                    onClick={() => toggleSection(row.label)}
                  >
                    <td
                      className="py-3 px-4 text-[var(--foreground)] font-semibold"
                      colSpan={plans.length + 1}
                    >
                      <span className="inline-flex items-center gap-2">
                        {isOpen ? (
                          <FaChevronDown className="w-4 h-4" />
                        ) : (
                          <FaChevronRight className="w-4 h-4" />
                        )}
                        {row.label}
                      </span>
                    </td>
                  </tr>
                );
              }

              // FEATURE ROW (only render if its section is open OR before any section)
              const prevSection = [...rows.slice(0, i)]
                .reverse()
                .find((r) => r.type === "section");
              const sectionLabel = prevSection?.label;
              const isVisible = !sectionLabel || openSections[sectionLabel]; // if no section yet, always show

              if (row.type === "feature" && isVisible) {
                return (
                  <tr
                    key={`feature-${row.label}`}
                    // className="bg-[var(--secondary)]"
                  >
                    <td className="py-3 px-4 text-black">
                      {row.label}
                    </td>
                    {(row?.values || []).map((val, idx) => (
                      <td
                        key={`${row.label}-${idx}`}
                        className="py-3 px-4 text-center"
                      >
                        {val === "check" ? (
                          <span className="inline-flex items-center justify-center rounded-full bg-tertiary text-[var(--accent-foreground)] w-6 h-6">
                            <FaCheckCircle />
                          </span>
                        ) : (
                          <span className="text-black">
                            {val}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              }

              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
