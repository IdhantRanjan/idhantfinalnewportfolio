"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const awards = [
  { title: "ijas state competition – gold", description: "neurovox: ai based voice detection for parkinsons" },
  { title: "presidential volunteer service award – gold", description: "president of the united states" },
  { title: "executive data science capstone", description: "johns hopkins university" },
  { title: "national finalist, pta reflections", description: "national pta" },
  { title: "national rank: 18th, national french competition", description: "american association of teachers of french" },
  { title: "ijas district 9 poster session gold", description: "regional ijas" },
  { title: "ijas state poster session gold", description: "ijas" },
  { title: "ijas state paper session gold", description: "ijas" },
];

const volunteering = [
  { title: "build-a-biz", description: "financial literacy non-profit. ~$5k in funding. 3k+ students impacted.", tag: "president" },
  { title: "surgical volunteer @ edward-elmhurst", description: "assist surgeons and hospital staff. 150+ hours.", tag: "volunteer" },
  { title: "alzheimer's foundation of america", description: "lead membership growth and engagement, promote awareness.", tag: "vice president" },
];

export default function RecognitionPage() {
  const [hoveredAward, setHoveredAward] = useState<number | null>(null);
  const [hoveredVol, setHoveredVol] = useState<number | null>(null);

  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Recognition</h1>

        <h2 className="section-heading">Awards</h2>
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

        <h2 className="section-heading" style={{ marginTop: 42 }}>Volunteering</h2>
        <div className={`card-grid${hoveredVol !== null ? " has-hover" : ""}`}>
          {volunteering.map((v, i) => (
            <div
              key={v.title}
              className={`card-item${hoveredVol === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHoveredVol(i)}
              onMouseLeave={() => setHoveredVol(null)}
            >
              <p className="card-title">{v.title}</p>
              <p className="card-desc">{v.description}</p>
              <p className="card-tag">{v.tag}</p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
