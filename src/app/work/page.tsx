"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { work } from "@/data/items";

const workItems = work.filter((w) => w.type === "work");
const volunteerItems = work.filter((w) => w.type === "volunteer");

export default function WorkPage() {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [hoveredVol, setHoveredVol] = useState<number | null>(null);

  return (
    <div className="layout">
      <SiteHeader />
      <main>
        <h1 className="page-title">Work</h1>

        <div className={`card-grid${hoveredWork !== null ? " has-hover" : ""}`}>
          {workItems.map((w, i) => (
            <div
              key={w.slug}
              className={`card-item${hoveredWork === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHoveredWork(i)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <Link href={`/work/${w.slug}`} className="card-link">
                <p className="card-title">{w.title}</p>
                <p className="card-desc">{w.description}</p>
                <p className="card-tag">{w.tag}</p>
              </Link>
            </div>
          ))}
        </div>

        <h2 className="section-heading" style={{ marginTop: "48px" }}>Volunteering</h2>

        <div className={`card-grid${hoveredVol !== null ? " has-hover" : ""}`}>
          {volunteerItems.map((w, i) => (
            <div
              key={w.slug}
              className={`card-item${hoveredVol === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHoveredVol(i)}
              onMouseLeave={() => setHoveredVol(null)}
            >
              <Link href={`/work/${w.slug}`} className="card-link">
                <p className="card-title">{w.title}</p>
                <p className="card-desc">{w.description}</p>
                <p className="card-tag">{w.tag}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
