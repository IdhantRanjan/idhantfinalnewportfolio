import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type Thought = {
  date: string;
  title: string;
  summary: string;
  href: string;
};

const thoughts: Thought[] = [
  {
    date: "May 1, 2026",
    title: "social contract",
    summary: "on what we owe each other once intelligence stops being scarce.",
    href: "/thoughts/social-contract",
  },
];

const thoughtsByYear = thoughts.reduce<Record<string, Thought[]>>((acc, t) => {
  const year = t.date.split(",").pop()?.trim() ?? "—";
  (acc[year] ||= []).push(t);
  return acc;
}, {});

export default function ThoughtsPage() {
  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Thoughts</h1>
        <p className="page-subtitle">
          essays, half-formed ideas, occasional rants. published when finished, not before.
        </p>

        {Object.entries(thoughtsByYear).map(([year, entries]) => (
          <section key={year}>
            <p className="year-divider">{year}</p>
            {entries.map((t) => (
              <article key={t.title} className="thought-entry">
                <p className="thought-date">{t.date}</p>
                <div className="thought-content">
                  <h2 className="thought-title">
                    <a href={t.href}>{t.title}</a>
                  </h2>
                  <p className="thought-summary">{t.summary}</p>
                  <p className="thought-read">
                    <a href={t.href} className="link-with-arrow">
                      Read
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}
