import Link from "next/link";
import { docs, order } from "@/data/docs";

export default function WritingPage() {
  return (
    <main className="detail previously">
      <p className="back">
        <Link href="/">← back</Link>
      </p>

      <p>writing:</p>

      <ul>
        {order.map((slug) => (
          <li key={slug}>
            <Link href={`/writing/${slug}`}>{docs[slug].title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
