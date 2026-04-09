"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  image: string;
  alt: string;
};

const projects: Project[] = [
  {
    title: "Nova Finance Landing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    alt: "Analytics dashboard on a laptop for a fintech website",
  },
  {
    title: "Luma Mobile Product UI",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    alt: "Mobile app interface prototype on smartphone screens",
  },
  {
    title: "Harbor Coffee Rebrand",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80",
    alt: "Coffee brand packaging and cup photography",
  },
  {
    title: "Peak Health Dashboard",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
    alt: "Doctor reviewing healthcare dashboard data on a tablet",
  },
  {
    title: "Zento Analytics Dashboard",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80",
    alt: "Data analyst working with a metrics dashboard on laptop",
  },
  {
    title: "Arc Studio Campaign Site",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    alt: "Creative team brainstorming campaign visuals and strategy",
  },
];

export function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(5,10,26,0.98),rgba(4,8,21,0.98))] px-5 py-5 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-6"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-cyan-300">
            Portfolio
          </p>
          <h2 className="mt-3 text-[2rem] font-black leading-tight text-white sm:text-[2.45rem]">
            Selected Projects
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="hidden text-sm font-medium text-cyan-300 transition hover:text-cyan-200 sm:inline-flex"
        >
          {showAll ? "Show Less" : "View All"}
          <span className="ml-2">{showAll ? "↑" : "→"}</span>
        </button>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/5 shadow-[0_10px_35px_rgba(0,0,0,0.25)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={540}
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110 sm:h-44"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-4">
                <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-cyan-200 sm:text-base">
                  {project.title}
                </h3>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {project.title.includes("Mobile") ? "UI/UX" : project.title.includes("Coffee") ? "Branding" : "Web Design"}
                </span>
              </div>
            </article>
          ))}

        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="mt-2 inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200 sm:hidden"
        >
          {showAll ? "Show Less" : "View All"}
          <span className="ml-2">{showAll ? "↑" : "→"}</span>
        </button>
      </div>
    </section>
  );
}
