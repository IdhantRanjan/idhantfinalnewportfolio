"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const research = [
  {
    title: "BOPCD @ Northwestern",
    description: "bayesian detection for change points in crypto prices",
    tag: "researcher",
  },
  {
    title: "HFT @ Mizzou",
    description: "researching the hft paradox in the us stock market",
    tag: "researcher",
  },
  {
    title: "EFGET @ NIU",
    description: "how surface modifications change transistor gm–gate voltage behavior",
    link: "https://drive.google.com/file/d/1CFp8l556pllMaE0TpKhbYdBqIqSiA8JD/view?usp=sharing",
    tag: "researcher",
  },
  {
    title: "Deep Learning × ABM",
    description: "deep learning applications in agent based modeling — accepted to ESEE 2026",
    link: "https://esee2026ghent.be/",
    tag: "researcher",
  },
];

export default function ResearchPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Research</h1>

        <div className={`card-grid${hoveredIndex !== null ? " has-hover" : ""}`}>
          {research.map((r, i) => (
            <div
              key={r.title}
              className={`card-item${hoveredIndex === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className="card-title">
                {r.link ? (
                  <a href={r.link} target="_blank" rel="noopener noreferrer">
                    {r.title}
                  </a>
                ) : (
                  r.title
                )}
              </p>
              <p className="card-desc">{r.description}</p>
              <p className="card-tag">{r.tag}</p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
