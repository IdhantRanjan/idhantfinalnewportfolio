"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { projects } from "@/data/items";

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
              key={p.slug}
              className={`card-item${hoveredIndex === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/projects/${p.slug}`} className="card-link">
                <p className="card-title">{p.title}</p>
                <p className="card-desc">{p.description}</p>
                <p className="card-tag">{p.tag}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
