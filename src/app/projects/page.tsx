"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const projects = [
  {
    title: "vocl",
    description: "emg based thought to speech",
    link: "https://www.vocl.dev/",
    tag: "creator",
  },
  {
    title: "neumeric",
    description: "biological intelligence infrastructure",
    link: "https://neumeric.xyz/",
    tag: "creator",
  },
  {
    title: "credix",
    description: "decentralized peer-to-peer microlending",
    link: "https://credix.framer.ai/",
    tag: "creator",
  },
  {
    title: "orbyt",
    description: "automating compliance",
    link: null,
    tag: "creator",
  },
  {
    title: "ar-x-finlit",
    description: "gen-z retention for canadian imperial bank of commerce",
    link: null,
    tag: "creator",
  },
  {
    title: "airaware",
    description: "ml pipeline forecasting campus air quality in real time @ LewisU",
    link: "https://airaware-lewis.vercel.app/",
    tag: "creator",
  },
];

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Projects</h1>

        <div className={`card-grid${hoveredIndex !== null ? " has-hover" : ""}`}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`card-item${hoveredIndex === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className="card-title">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </p>
              <p className="card-desc">{p.description}</p>
              <p className="card-tag">{p.tag}</p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
