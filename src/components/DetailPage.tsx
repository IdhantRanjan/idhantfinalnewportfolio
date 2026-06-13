import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import type { DetailItem } from "@/data/items";

type Props = {
  item: DetailItem;
  backHref: string;
  backLabel: string;
};

export default function DetailPage({ item, backHref, backLabel }: Props) {
  return (
    <div className="layout">
      <SiteHeader />
      <main>
        <Link href={backHref} className="detail-back">
          ← {backLabel}
        </Link>

        <h1 className="page-title">{item.title}</h1>

        <div className="detail-meta">
          <span className="detail-tag">{item.tag}</span>
          {item.externalLink && (
            <a
              href={item.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
              style={{ fontSize: "14px" }}
            >
              {item.externalLinkLabel || item.externalLink}
            </a>
          )}
        </div>

        <p className="detail-overview">{item.overview}</p>

        {item.sections.map((s) => (
          <div key={s.heading} className="detail-section">
            <h2 className="section-heading">{s.heading}</h2>
            <hr />
            <p>{s.body}</p>
          </div>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
