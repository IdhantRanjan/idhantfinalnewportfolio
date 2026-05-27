import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ListeningScroll, { type Track } from "@/components/ListeningScroll";

type Book = { title: string; author: string; note?: string };

// ─── Fill these in ───────────────────────────────────────────────────────────
const readingNow: Book[] = [];

const readingDone: Book[] = [];

// Add your tracks here: { title, artist, image (URL or null), color (optional hex fallback) }
const listening: Track[] = [];
// ─────────────────────────────────────────────────────────────────────────────

export default function ExtraPage() {
  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Extra</h1>
        <p className="page-subtitle">books and music. a slow log, updated whenever.</p>

        {/* Reading */}
        <section>
          <h2 className="section-heading">Reading</h2>

          <p className="reading-section-heading">now</p>
          {readingNow.length > 0 ? (
            <ul className="book-list">
              {readingNow.map((b) => (
                <li key={b.title}>
                  <span className="book-title">{b.title}</span> — {b.author}
                  {b.note ? ` (${b.note})` : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p className="placeholder-note">nothing in the queue right now.</p>
          )}

          <p className="reading-section-heading">recently finished</p>
          {readingDone.length > 0 ? (
            <ul className="book-list">
              {readingDone.map((b) => (
                <li key={b.title}>
                  <span className="book-title">{b.title}</span> — {b.author}
                  {b.note ? ` (${b.note})` : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p className="placeholder-note">list coming soon.</p>
          )}
        </section>

        {/* Listening */}
        <section>
          <h2 className="section-heading">Listening</h2>
          <ListeningScroll tracks={listening} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
