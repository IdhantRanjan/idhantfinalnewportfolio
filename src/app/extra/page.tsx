"use client";

import { useState, useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ListeningScroll, { type Track } from "@/components/ListeningScroll";

type Book = {
  title: string;
  author: string;
  note?: string;
};

const readingNow: Book[] = [
  { title: "The Critique of Pure Reason", author: "Kant" },
  { title: "Party of One: The Rise of Xi Jinping and China's Superpower Future", author: "Richard McGregor" },
  { title: "The Age of Prediction", author: "TBD" },
  { title: "Power & Prediction", author: "TBD" },
];

const readingFinished: Book[] = [
  { title: "Being and Time", author: "Heidegger" },
  { title: "Blood Meridian", author: "Cormac McCarthy", note: "violence as metaphysics; the Judge is a philosophical argument" },
  { title: "Reasons and Persons", author: "Derek Parfit" },
  { title: "Correction", author: "Thomas Bernhard", note: "a man destroys his life's work the moment it's finished; obsession as epistemology" },
  { title: "Ficciones", author: "Borges" },
  { title: "The Conscious Mind", author: "David Chalmers" },
  { title: "Austerlitz", author: "W.G. Sebald", note: "memory, identity, architecture — prose that moves like a photograph fading" },
  { title: "Gödel, Escher, Bach", author: "Hofstadter" },
  { title: "The Order of Things", author: "Foucault", note: "how knowledge structures itself without telling you it's doing so" },
  { title: "Stoner", author: "John Williams" },
  { title: "Pale Fire", author: "Nabokov", note: "unreliable narration as philosophy; the commentary is the novel" },
  { title: "On the Genealogy of Morality", author: "Nietzsche" },
  { title: "The Waves", author: "Virginia Woolf", note: "consciousness as pure form; no plot, just minds" },
  { title: "Critique of Pure Reason", author: "Kant" },
  { title: "Never Let Me Go", author: "Ishiguro" },
  { title: "The Human Condition", author: "Hannah Arendt", note: "labor, work, action — what it means to be a political being" },
  { title: "2666", author: "Bolaño", note: "five novels inside one; violence and literature as the same question" },
  { title: "The Structure of Scientific Revolutions", author: "Kuhn" },
  { title: "What We Owe to Each Other", author: "T.M. Scanlon" },
  { title: "Speedboat", author: "Renata Adler", note: "fragmented, cold, ahead of everything — the anti-novel" },
  { title: "The Myth of Sisyphus", author: "Camus" },
  { title: "Simulacra and Simulation", author: "Baudrillard", note: "the map precedes the territory; reads like prophecy now" },
  { title: "If on a Winter's Night a Traveler", author: "Calvino", note: "metafiction as form; the reader is the protagonist" },
  { title: "Remainder", author: "Tom McCarthy" },
  { title: "Naming and Necessity", author: "Kripke", note: "modal logic as philosophy; how reference actually works" },
  { title: "The Precipice", author: "Toby Ord" },
  { title: "Totality and Infinity", author: "Levinas", note: "ethics as first philosophy; the face of the other as the origin of obligation" },
  { title: "Philosophical Investigations", author: "Wittgenstein" },
  { title: "The Recognitions", author: "William Gaddis", note: "forgery, authenticity, meaning — the most ambitious American novel almost nobody's read" },
  { title: "Phenomenology of Perception", author: "Merleau-Ponty", note: "the body knows before the mind does" },
];

// Sample listening data — replace with real Spotify data
const sampleListening: Track[] = [
  { title: "Nightcall", artist: "Kavinsky", image: null, color: "#1a1a2e" },
  { title: "Electric Feel", artist: "MGMT", image: null, color: "#2a1a2e" },
  { title: "Take On Me", artist: "a-ha", image: null, color: "#1a2a2a" },
  { title: "Resonance", artist: "HOME", image: null, color: "#2a2a1a" },
  { title: "Crystalize", artist: "Lindsey Stirling", image: null, color: "#1e2a3a" },
  { title: "Neon", artist: "John Carpenter", image: null, color: "#2a1e1a" },
  { title: "Drive", artist: "Incubus", image: null, color: "#1a2a1e" },
  { title: "Midnight City", artist: "M83", image: null, color: "#2a1a1e" },
  { title: "Fade Away", artist: "Tycho", image: null, color: "#1a1e2a" },
  { title: "Such Great Heights", artist: "The Postal Service", image: null, color: "#2a2a0a" },
];

export default function ExtraPage() {
  const [stats, setStats] = useState<{
    booksRead: number;
    currentlyReading: number;
    spotifyMinutes?: number;
    spotifyPlaycount?: number;
  }>({ booksRead: 42, currentlyReading: 4 });

  useEffect(() => {
    // TODO: Fetch real Spotify stats once credentials are in env vars
    // For now, using placeholder values
  }, []);

  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">Extra</h1>

        {/* GitHub Contributions */}
        <section>
          <h2 className="section-heading">GitHub</h2>
          <div className="stats-placeholder">
            <p style={{ color: "var(--muted)", fontSize: "14px" }}>
              GitHub contributions tracker — coming soon. follow my work on{" "}
              <a href="https://github.com/IdhantRanjan" target="_blank" rel="noopener noreferrer" className="link-with-arrow">
                github.com/IdhantRanjan
              </a>
            </p>
          </div>
        </section>

        {/* Reading */}
        <section>
          <h2 className="section-heading">Reading</h2>

          <h3 className="reading-subheader">now</h3>
          {readingNow.length > 0 ? (
            <ul className="book-list">
              {readingNow.map((b) => (
                <li key={b.title}>
                  <span className="book-title">{b.title}</span> — {b.author}
                  {b.note ? <span className="book-note">{b.note}</span> : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p className="placeholder-note">nothing in the queue right now.</p>
          )}

          <h3 className="reading-subheader">recently finished</h3>
          {readingFinished.length > 0 ? (
            <ul className="book-list">
              {readingFinished.map((b) => (
                <li key={b.title}>
                  <span className="book-title">{b.title}</span> — {b.author}
                  {b.note ? <span className="book-note">{b.note}</span> : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p className="placeholder-note">list coming soon.</p>
          )}
        </section>

        {/* Spotify */}
        <section>
          <h2 className="section-heading">Spotify</h2>
          <div className="spotify-stats">
            <div className="stat-card">
              <p className="stat-number">{stats.spotifyMinutes || "—"}</p>
              <p className="stat-label">minutes listened this year</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">{stats.spotifyPlaycount || "—"}</p>
              <p className="stat-label">plays in 2026</p>
            </div>
          </div>
        </section>

        {/* Listening */}
        <section>
          <h2 className="section-heading">Listening</h2>
          <p style={{ color: "var(--muted)", fontSize: "13px", marginBottom: "16px" }}>
            (sample tiles — add your real top tracks from Spotify)
          </p>
          <ListeningScroll tracks={sampleListening} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
