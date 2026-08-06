import Link from "next/link";
import type { DetailItem } from "@/data/items";

export default function PlainDetail({ item }: { item: DetailItem }) {
  return (
    <main className="detail">
      <p className="back">
        <Link href="/">← back</Link>
      </p>

      <p>
        <strong>{item.title}</strong> — {item.description}.
        {item.externalLink && (
          <>
            {" "}
            <a href={item.externalLink} target="_blank" rel="noopener noreferrer">
              {item.externalLinkLabel || "link"}
            </a>
            .
          </>
        )}
      </p>

      <p>{item.overview}</p>

      {item.sections.map((s) => (
        <div key={s.heading}>
          <p className="detail-head">{s.heading}:</p>
          <p>{s.body}</p>
        </div>
      ))}

      <p className="back">
        <Link href="/">← back</Link>
      </p>
    </main>
  );
}
