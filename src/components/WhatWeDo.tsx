"use client";

import { useState } from "react";

const services = [
  {
    title: "Data Mapping",
    description:
      "Identify and unify your data sources into a single source of truth.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    details:
      "Our data mapping process involves comprehensive analysis of your existing data infrastructure, identifying key sources, and creating a unified schema that serves as your single source of truth.",
  },
  {
    title: "MCP, API & Server Layer",
    description:
      "Build internal and external APIs to access and interact with your data.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    details:
      "We design and implement robust API layers that enable seamless data access and interaction, both internally and externally, with proper authentication and rate limiting.",
  },
  {
    title: "Custom Applications",
    description:
      "Dashboards, internal tools, AI agents and systems tailored to your use case.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    details:
      "From interactive dashboards to specialized internal tools, we build custom applications that perfectly match your organization's unique requirements and workflows.",
  },
  {
    title: "Training & Enablement",
    description:
      "We teach your team how to build, extend, and leverage your data tools.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    details:
      "We provide comprehensive training and documentation to ensure your team can effectively use, maintain, and extend the tools we build together.",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold mb-16 text-center text-white">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative group ${
                index % 2 === 0 ? "md:translate-y-12" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-magenta-500/10 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
              <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 hover:border-teal-500/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg text-teal-500">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-bold mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{service.description}</p>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? "max-h-32" : "max-h-0"
                      }`}
                    >
                      <p className="text-slate-500 text-sm">
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
