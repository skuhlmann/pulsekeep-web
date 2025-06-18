"use client";

import { useState, useEffect, useRef } from "react";

const useCases = [
  {
    title: "DAO Reward System",
    description:
      "Map contributions across GitHub, Notion, Discord to automate contributor rewards",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    details:
      "Automate your DAO's reward system by tracking contributions across platforms, ensuring fair compensation and transparent recognition for all contributors.",
  },
  {
    title: "Remote Org Knowledge Hub",
    description: "Build a searchable internal knowledge graph",
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    details:
      "Create a centralized knowledge hub that connects information across your organization, making it easy to find and share insights.",
  },
  {
    title: "Learning Community Insights",
    description: "Track learner activity, retention, and cohort performance",
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    details:
      "Gain deep insights into your learning community's engagement, progress, and success metrics to optimize your educational programs.",
  },
  {
    title: "Open Source Projects",
    description: "Align scattered contributions into one unified ecosystem",
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
      "Bring together contributions from across the open source ecosystem, creating a cohesive and maintainable project structure.",
  },
];

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".use-case-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          card.classList.add("translate-y-0", "opacity-100");
          card.classList.remove("translate-y-8", "opacity-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold mb-16 text-center text-white">
          Use Cases
        </h2>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`use-case-card transform transition-all duration-700 translate-y-8 opacity-0 ${
                index % 3 === 0 ? "md:col-span-2" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative h-full group">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-magenta-500/5 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />

                {/* Card content */}
                <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 hover:border-teal-500/50 transition-colors duration-300 h-full">
                  <div className="flex items-start gap-4">
                    {/* Icon container with gradient background */}
                    <div className="p-3 bg-gradient-to-br from-teal-500/10 to-magenta-500/10 rounded-lg text-teal-500 group-hover:text-teal-400 transition-colors duration-300">
                      {useCase.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-mono font-bold mb-2 text-white group-hover:text-teal-400 transition-colors duration-300">
                        {useCase.title}
                      </h3>
                      <p className="text-slate-400 mb-4">
                        {useCase.description}
                      </p>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === index ? "max-h-32" : "max-h-0"
                        }`}
                      >
                        <p className="text-slate-500 text-sm">
                          {useCase.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-magenta-500/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
