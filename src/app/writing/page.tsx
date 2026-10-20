import Link from "next/link";
import doc from "@/data/fulfillment.json";

export default function WritingPage() {
  return (
    <main className="detail previously">
      <p className="back">
        <Link href="/">← back</Link>
      </p>

      <p>writing:</p>

      <ul>
        <li>
          <Link href="/writing/fulfillment">{doc.title}</Link>
        </li>
      </ul>
    </main>
  );
}
