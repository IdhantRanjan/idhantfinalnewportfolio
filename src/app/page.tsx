import HandoverMark from "@/components/HandoverMark";
import home from "@/data/home.json";

type Block =
  | { type: "p"; html: string; cls?: string }
  | { type: "ul"; items: string[] };

export default function Home() {
  const blocks = home.blocks as Block[];
  return (
    <main className="home">
      <HandoverMark />
      {blocks.map((b, i) => {
        if (b.type === "ul")
          return (
            <ul key={i}>
              {b.items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
        return (
          <p
            key={i}
            className={b.cls}
            dangerouslySetInnerHTML={{ __html: b.html }}
          />
        );
      })}
    </main>
  );
}
