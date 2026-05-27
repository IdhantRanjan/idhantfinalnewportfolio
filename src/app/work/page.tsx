import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const work = [
  {
    title: "swe @ plasnomic",
    role: "software engineer",
    description: "nda. building prism.",
  },
  {
    title: "commissioner @ city of naperville",
    role: "commissioner",
    description: "serve on the riverwalk commission. manage $3m/year in spending.",
  },
  {
    title: "student advisory board @ ipsd 204",
    role: "board member",
    description: "advise board of education. 26,000 students.",
  },
];

export default function WorkPage() {
  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Work</h1>
        <p className="page-subtitle">where I&apos;ve actually shown up.</p>

        <ul>
          {work.map((w) => (
            <li key={w.title}>
              <strong>{w.title}</strong>
              <span className="role-tag">{w.role}</span>
              <br />
              <span className="item-desc">{w.description}</span>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}
