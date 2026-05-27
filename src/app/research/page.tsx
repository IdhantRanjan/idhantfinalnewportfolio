import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const research = [
  {
    title: "BOPCD @ Northwestern",
    description: "bayesian detection for change points in crypto prices",
  },
  {
    title: "HFT @ Mizzou",
    description: "researching the hft paradox in the us stock market",
  },
  {
    title: "EFGET @ NIU",
    description: "how surface modifications change transistor gm–gate voltage behavior",
  },
];

export default function ResearchPage() {
  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Research</h1>
        <p className="page-subtitle">a few problems i&apos;ve gotten paid to think about.</p>

        <ul>
          {research.map((r) => (
            <li key={r.title}>
              <span className="research-title">{r.title}</span>
              <br />
              <span className="research-description">{r.description}</span>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}
