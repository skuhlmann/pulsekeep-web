"use client";

import { useEffect, useRef } from "react";

const processSteps = [
  {
    title: "Audit",
    description: "Discover and map your systems",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    title: "Architect",
    description: "Design your backend and access layers",
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
  },
  {
    title: "Build",
    description: "Create tools, APIs, and infrastructure",
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Train",
    description: "Empower your team with documentation and workshops",
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
  },
];

export default function HowWeWork() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-progress");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-mono font-bold mb-6 text-white">
            How We Work
          </h2>
          <p className="text-xl text-slate-300">
            Pulsekeep is designed to empower—not replace—your team. We plug into
            your existing tools and workflows to make your data more accessible,
            visible, and useful.
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div
            ref={progressRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-magenta-500 transform -translate-x-1/2"
          >
            <div className="absolute top-0 left-0 w-full h-0 bg-teal-500 animate-progress" />
          </div>

          {/* Process steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div
                    className={`p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-colors duration-300 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-teal-500/10 rounded-lg text-teal-500">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-mono font-bold mb-2 text-white">
                          {step.title}
                        </h3>
                        <p className="text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-slate-900 rounded-full border-4 border-teal-500 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
