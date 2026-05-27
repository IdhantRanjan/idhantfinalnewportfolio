"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const work = [
  {
    title: "swe @ plasnomic",
    description: "nda. building prism.",
    tag: "software engineer",
  },
  {
    title: "commissioner @ city of naperville",
    description: "serve on the riverwalk commission. manage $3m/year in spending.",
    tag: "commissioner",
  },
  {
    title: "student advisory board @ ipsd 204",
    description: "executive officer. advise board of education. 26,000 students.",
    tag: "executive officer",
  },
];

export default function WorkPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Work</h1>

        <div className={`card-grid${hoveredIndex !== null ? " has-hover" : ""}`}>
          {work.map((w, i) => (
            <div
              key={w.title}
              className={`card-item${hoveredIndex === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className="card-title">{w.title}</p>
              <p className="card-desc">{w.description}</p>
              <p className="card-tag">{w.tag}</p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
