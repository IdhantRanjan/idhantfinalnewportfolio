import home from "@/data/home.json";

type Block =
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] };

export default function Home() {
  const blocks = home.blocks as Block[];
  return (
    <main>
      {blocks.map((b, i) =>
        b.type === "ul" ? (
          <ul key={i}>
            {b.items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        ) : (
          <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
        )
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mark" src="/dots.gif" alt="" />
    </main>
  );
}
