"use client";

export type Track = {
  title: string;
  artist: string;
  image: string | null;
  color?: string; // fallback bg color when no image
};

const PLACEHOLDER_COLORS = [
  "#2a2a2a", "#1e2a3a", "#2a1e2a", "#1a2a1a",
  "#2a2218", "#18222a", "#2a1a18", "#221a2a",
  "#2a2a1a", "#1a1a2a", "#2a1a1a", "#1a2a2a",
];

function Tile({ track, index }: { track: Track; index: number }) {
  const bg = track.color ?? PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length];

  return (
    <div className="listen-tile">
      {track.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={track.image} alt={track.title} className="listen-tile-img" />
      ) : (
        <div className="listen-tile-placeholder" style={{ background: bg }}>
          ♪
        </div>
      )}
      <div className="listen-tile-overlay">
        <p className="listen-tile-track">{track.title}</p>
        <p className="listen-tile-artist">{track.artist}</p>
      </div>
    </div>
  );
}

export default function ListeningScroll({ tracks }: { tracks: Track[] }) {
  if (tracks.length === 0) {
    return (
      <p className="placeholder-note">what&apos;s on repeat shows up here.</p>
    );
  }

  // Split tracks into 3 rows, cycling through them
  const rows: Track[][] = [[], [], []];
  tracks.forEach((t, i) => rows[i % 3].push(t));

  // Pad each row to at least 8 items for smooth scrolling
  const padded = rows.map((row) => {
    while (row.length < 8) row = [...row, ...row];
    return row.slice(0, Math.max(8, row.length));
  });

  return (
    <div className="listen-scroll-section">
      {padded.map((row, rowIndex) => (
        <div key={rowIndex} className="scroll-row">
          <div className="scroll-track">
            {/* Duplicate tiles for seamless loop */}
            {[...row, ...row].map((track, i) => (
              <Tile key={`${rowIndex}-${i}`} track={track} index={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
