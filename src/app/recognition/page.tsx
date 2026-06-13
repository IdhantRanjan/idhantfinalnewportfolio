"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const awards = [
  {
    title: "Pete Conrad Scholar — 1st Place Global",
    description: "Conrad Challenge (VOCL) · 1 of 5,000 teams · 2026",
  },
  {
    title: "Blue Ocean Entrepreneurship Competition",
    description: "Top 10 of 23,300 global / 2nd in North America (VOCL) · 2026",
  },
  {
    title: "Accepted Paper — IIAI CDEF 2026",
    description: "top 2.5%, IEEE publication · presenting in Japan · 2026",
  },
  {
    title: "Accepted Paper — IEEE ICCSIC 2026",
    description: "Adaptive Feature Importance Scoring for Heterogeneous Graphs",
  },
  {
    title: "Accepted Paper — European Society for Ecological Economics 2026",
    description: "ML + ABM for Degrowth Policy",
  },
  {
    title: "ISEF Semi-Finalist",
    description: "Top 10 in Illinois (VOCL) · 2026",
  },
  {
    title: "Illinois Junior Academy of Science",
    description: "2× Gold Award",
  },
  {
    title: "2nd Place — Illinois Personal Finance Challenge State Finals",
    description: "Illinois State Treasurer · 2026",
  },
  {
    title: "4th Place — ARISE National Aerial Robotics Championship",
    description: "2025",
  },
  {
    title: "National Merit Semifinalist",
    description: "2026 (pending)",
  },
  {
    title: "Presidential Volunteer Service Award — Gold",
    description: "USK4W · 2024",
  },
];

export default function RecognitionPage() {
  const [hoveredAward, setHoveredAward] = useState<number | null>(null);

  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Recognition</h1>

        <div className={`card-grid${hoveredAward !== null ? " has-hover" : ""}`}>
          {awards.map((a, i) => (
            <div
              key={a.title}
              className={`card-item${hoveredAward === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHoveredAward(i)}
              onMouseLeave={() => setHoveredAward(null)}
            >
              <p className="card-title">{a.title}</p>
              <p className="card-desc">{a.description}</p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
