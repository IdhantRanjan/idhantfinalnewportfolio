"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { research } from "@/data/items";

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
              key={r.slug}
              className={`card-item${hoveredIndex === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/research/${r.slug}`} className="card-link">
                <p className="card-title">{r.title}</p>
                <p className="card-desc">{r.description}</p>
                <p className="card-tag">{r.tag}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
