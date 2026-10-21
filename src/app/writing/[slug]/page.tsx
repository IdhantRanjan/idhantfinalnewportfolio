import { notFound } from "next/navigation";
import Link from "next/link";
import { docs, order } from "@/data/docs";

export function generateStaticParams() {
  return order.map((slug) => ({ slug }));
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = docs[slug];
  if (!doc) notFound();

  return (
    <main className="detail essay">
      <p className="back">
        <Link href="/writing">← back</Link>
      </p>

      <p>
        <strong>{doc.title}</strong>
      </p>

      {doc.blocks.map((b, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
      ))}
    </main>
  );
}
