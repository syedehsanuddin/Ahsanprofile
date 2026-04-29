"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

// const projects = [
//   {
//     title: "Distributed Analytics Engine",
//     description:
//       "A high-throughput engine for data ingestion and analytics, leveraging concurrency patterns and intelligent caching layers.",
//     tech: ["Go", "Redis", "PostgreSQL", "Docker"],
//   },
//   {
//     title: "traq",
//     description:
//       "A minimalist job application tracker to bring order to the chaos of hunting.",
//     tech: ["Next.js", "Better Auth", "MongoDB"],
//   },
//   {
//     title: "PaperTrails",
//     description:
//       "A community blogging platform for sharing thoughts and technical deep dives.",
//     tech: ["MongoDB", "Express", "React", "Node.js"],
//   },
//   {
//     title: "AI Trip Planner",
//     description:
//       "An intelligent travel assistant utilizing the Gemini API to solve planning fatigue.",
//     tech: ["React Native", "Gemini API"],
//   },
// ];

const projects = [
  {
    id: "01",
    title: "CBBAIN - Manual Depth, Workflow Discipline",
    description: (
      <>
        CBBAIN was a manual-heavy phase where quality confidence came from deeply documented business workflows and deployment-time checks across connected real-estate flows.
      </>
    ),
    features: [
      "Created extensive manual test cases for multi-branch business workflows.",
      "Documented critical pre-release scenarios for other teams to execute before deployment.",
      "Worked through a period of mostly manual deployments with strict release checklists.",
      "Partnered with engineering and delivery teams to keep releases predictable.",
    ],
    tech: ["Manual Testing", "Workflow Documentation", "Regression Planning", "Release Validation"],
    links: [
      {
        icon: ExternalLink,
        label: "Link",
        href: "https://www.coldwellbanker.com/",
      },
    ],
  },
  {
    id: "02",
    title: "GORELO - Built from Scratch, MVP Team",
    description: (
      <>
        GORELO was built from scratch with teams in Australia, and I was part of the MVP team shaping quality while core product direction and implementation were still taking form.
      </>
    ),
    features: [
      "Contributed to MVP delivery as an early QA contributor in a fast-moving team.",
      "Scaled Selenium + NUnit automation around core MSP workflows.",
      "Covered complex journeys including contracts, billing, asset requisition, and RMM.",
      "Owned troubleshooting and regression stability through frequent product evolution.",
    ],
    tech: ["Selenium", "NUnit", "C#", "Azure DevOps", "Swagger"],
    links: [
      {
        icon: ExternalLink,
        label: "Link",
        href: "https://www.gorelo.io/",
      },
    ],
  },
  {
    id: "03",
    title: "LMX - Product Takeover and Coverage Expansion",
    description: (
      <>
        LMX marked a major ownership transition. We took over the product from a Germany-based team and steadily moved from partial coverage to broad API and UI confidence.
      </>
    ),
    features: [
      "Took testing ownership after handover and stabilized quality responsibilities.",
      "Expanded partial API and UI coverage toward complete endpoint-level confidence.",
      "Worked with partial product-owner responsibility while driving QA direction.",
      "Strengthened release confidence through deeper regression and scenario discipline.",
    ],
    tech: ["Playwright", "API Testing", "UI Automation", "Product Ownership", "Regression Strategy"],
    links: [
      {
        icon: ExternalLink,
        label: "Link",
        href: "https://www.gfk.com/home",
      },
    ],
  },
  {
    id: "04",
    title: "BX - Built from Scratch to Global Onboarding",
    description: (
      <>
        BX was built from scratch with business collaboration across Germany and Bulgaria. Being part of the core development and quality loop from day zero to MVP was a defining experience.
      </>
    ),
    features: [
      "Contributed from requirement gathering through MVP release as a core team member.",
      "Worked closely with cross-country business teams to shape realistic product behavior.",
      "Helped onboard around 600 users across 9 countries after launch.",
      "Learned that some business edge cases only reveal themselves in real end-user workflows.",
    ],
    tech: ["MVP Delivery", "Cross-Team Collaboration", "Product Discovery", "User Onboarding"],
    links: [
      {
        icon: ExternalLink,
        label: "Link",
        href: "https://www.gfk.com/home",
      },
    ],
  },
  {
    id: "05",
    title: "NSP Hunter - Crawling Data, Testing Ownership",
    description: (
      <>
        NSP Hunter (Non-Subsidized Price) was a crawling-data platform where I took testing ownership from another team in Pakistan and pushed broader UI confidence.
      </>
    ),
    features: [
      "Led QA ownership transition with active knowledge transfer and continuity planning.",
      "Covered majority UI test cases across key product workflows.",
      "Improved regression confidence through structured scenario execution.",
      "Aligned testing focus with evolving business priorities and crawl behavior changes.",
    ],
    tech: ["UI Testing", "Regression Testing", "Ownership Transition", "Test Strategy"],
    links: [
      {
        icon: ExternalLink,
        label: "Link",
        href: "https://www.gfk.com/home",
      },
    ],
  },
  {
    id: "06",
    title: "Personal Builds - Exploration Across Domains",
    description: (
      <>
        I keep building outside formal project boundaries too. Some builds are testing-focused, others are intentionally off-domain, all driven by exploration and learning.
      </>
    ),
    features: [
      "Built projects across education, content, and business use-cases for experimentation.",
      "Used side builds to test ideas in UX flow, delivery speed, and practical product behavior.",
      "Worked on both QA-aligned and non-QA concepts to stay versatile.",
      "Treated personal work as a continuous lab for learning and applied execution.",
    ],
    tech: ["Next.js", "Cross-Domain Exploration", "Product Thinking", "Continuous Learning"],
    links: [
      {
        icon: ExternalLink,
        label: "Link",
        href: "https://abrahamic-timeline.netlify.app/",
      },
    ],
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-10 px-6 max-w-2xl mx-auto">
      <FadeIn>
        <SectionHeading>The Build Journey</SectionHeading>
      </FadeIn>

      <div className="space-y-4 mt-4">
        {projects.map((project, i) => {
          const isOpen = activeIndex === i;
          const isLast = i === projects.length - 1;

          return (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div className="group relative">
                {/* Vertical Timeline Line - hidden on the very last item if you prefer, or adjusted height */}
                {!isLast && (
                  <div className="absolute left-[11px] top-8 bottom-[-32px] w-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
                )}

                <div className="flex gap-4">
                  {/* Number Bubble */}
                  <div className="relative flex-shrink-0 flex items-center justify-center h-6 w-6 mt-0.5">
                    <span className="font-mono text-[12px] text-accent-foreground select-none transition-all duration-300 group-hover:text-muted-foreground relative z-10 bg-secondary px-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/*<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-neutral-600 dark:group-hover:bg-neutral-400 transition-colors duration-300"></div>*/}
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 pb-2">
                    {/* Header / Click Trigger */}
                    <div
                      className="flex items-center justify-between mb-1 cursor-pointer select-none"
                      onClick={() => toggleProject(i)}
                    >
                      <h2 className="text-[14px] md:text-[14px] font-ibm_sans font-semibold text-secondary-foreground/80 tracking-tight transition-colors duration-300">
                        {project.title}
                      </h2>

                      <button
                        className={`text-base text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="1em"
                          width="1em"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>

                    <p className="text-sm font-ibm_sans text-muted-foreground leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        {/*<p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {project.description}
                        </p>*/}

                        <ul className="list-disc list-outside ml-4 mb-4 space-y-1 text-sm text-zinc-500">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium bg-secondary text-foreground rounded-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 py-2">
                          {project.links.find((t) => t.label === "Link") && (
                            <div className="flex items-center gap-2">
                              <ExternalLink className="h-4 w-4 text-muted-foreground" />
                              <p className="text-sm font-ibm_sans text-muted-foreground underline cursor-pointer">
                                <a
                                  href={
                                    project.links.find(
                                      (t) => t.label === "Link",
                                    )?.href
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Link
                                </a>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
