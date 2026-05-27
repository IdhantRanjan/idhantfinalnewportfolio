import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const awards = [
  {
    title: "ijas state competition – gold",
    description: "neurovox: ai based voice detection for parkinsons",
  },
  {
    title: "presidential volunteer service award – gold",
    description: "president of the united states",
  },
  {
    title: "executive data science capstone",
    description: "johns hopkins university",
  },
  {
    title: "national finalist, pta reflections",
    description: "national pta",
  },
  {
    title: "national rank: 18th, national french competition",
    description: "american association of teachers of french",
  },
  {
    title: "ijas district 9 poster session gold",
    description: "regional ijas",
  },
  {
    title: "ijas state poster session gold",
    description: "ijas",
  },
  {
    title: "ijas state paper session gold",
    description: "ijas",
  },
];

const volunteering = [
  {
    title: "build-a-biz",
    role: "president",
    description: "financial literacy non-profit. ~$5k in funding. 3k+ students impacted.",
  },
  {
    title: "surgical volunteer @ edward-elmhurst",
    role: "volunteer",
    description: "assist surgeons and hospital staff. 150+ hours.",
  },
  {
    title: "alzheimer's foundation of america",
    role: "vice president",
    description: "lead membership growth and engagement, promote awareness.",
  },
];

export default function RecognitionPage() {
  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Recognition</h1>
        <p className="page-subtitle">awards, honors, and time spent volunteering.</p>

        <section>
          <h2 className="section-heading">Awards</h2>
          <ul>
            {awards.map((a) => (
              <li key={a.title}>
                <strong>{a.title}</strong>
                <br />
                <span className="item-desc">{a.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="section-heading">Volunteering</h2>
          <ul>
            {volunteering.map((v) => (
              <li key={v.title}>
                <strong>{v.title}</strong>
                <span className="role-tag">{v.role}</span>
                <br />
                <span className="item-desc">{v.description}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
