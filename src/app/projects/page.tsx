import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const projects = [
  {
    title: "vocl",
    description: "emg based thought to speech",
    link: "https://www.vocl.dev/",
  },
  {
    title: "neumeric",
    description: "biological intelligence infrastructure",
    link: "https://neumeric.xyz/",
  },
  {
    title: "credix",
    description: "decentralized peer-to-peer microlending",
    link: "https://credix.framer.ai/",
  },
  {
    title: "orbyt",
    description: "automating compliance",
    link: null,
  },
  {
    title: "ar-x-finlit",
    description: "gen-z retention for canadian imperial bank of commerce",
    link: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">things I&apos;ve shipped, broken, or am still figuring out.</p>

        <ul>
          {projects.map((p) => (
            <li key={p.title}>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-with-arrow"
                >
                  {p.title}
                </a>
              ) : (
                <strong>{p.title}</strong>
              )}{" "}
              — <span className="item-desc">{p.description}</span>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}
