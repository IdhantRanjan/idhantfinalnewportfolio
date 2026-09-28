import Link from "next/link";

export default function WritingPage() {
  return (
    <main className="detail previously">
      <p className="back">
        <Link href="/">← back</Link>
      </p>

      <p>writing:</p>

      <ul>
        <li>
          <Link href="/thoughts/cost-of-knowing">
            the cost of knowing is approaching zero
          </Link>
        </li>
        <li>
          <Link href="/thoughts/blank-spot">
            we are approaching the end of the blank spot
          </Link>
        </li>
        <li>
          <Link href="/thoughts/becoming-useful">
            a generalist&apos;s guide to becoming useful
          </Link>
        </li>
      </ul>
    </main>
  );
}
