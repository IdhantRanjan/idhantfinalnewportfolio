"use client";

import { useEffect, useRef, useState } from "react";

type Block = { type: "p"; html: string } | { type: "ul"; items: string[] };

export default function EditPage() {
  const [blocks, setBlocks] = useState<Block[] | null>(null);
  const [status, setStatus] = useState("");
  const [dirty, setDirty] = useState(false);
  const [local, setLocal] = useState(false);
  const live = useRef<Block[]>([]);

  useEffect(() => {
    setLocal(["localhost", "127.0.0.1"].includes(window.location.hostname));
    fetch("/api/home")
      .then((r) => r.json())
      .then((d) => {
        setBlocks(d.blocks);
        live.current = d.blocks;
      })
      .catch(() => setStatus("could not load content"));
  }, []);

  function edit(i: number, j: number | null, html: string) {
    const next = structuredClone(live.current);
    const b = next[i];
    if (b.type === "ul" && j !== null) b.items[j] = html;
    else if (b.type === "p") b.html = html;
    live.current = next;
    setDirty(true);
    setStatus("");
  }

  async function save() {
    setStatus("saving…");
    const res = await fetch("/api/home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blocks: live.current }),
    });
    if (res.ok) {
      setDirty(false);
      setStatus("saved to src/data/home.json");
    } else {
      const e = await res.json().catch(() => ({}));
      setStatus(`failed: ${e.error ?? res.status}`);
    }
  }

  if (!blocks) return <main><p>loading…</p></main>;

  // the save endpoint refuses in production; don't offer editing there either
  if (!local)
    return (
      <main>
        <p>the visual editor only runs locally. start the dev server and open /edit.</p>
      </main>
    );

  return (
    <>
      <style>{`
        .bar{position:fixed;top:0;left:0;right:0;display:flex;align-items:center;gap:14px;
             padding:10px 16px;background:#fafafa;border-bottom:1px solid #e6e6e6;z-index:20;
             font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;color:#666}
        .bar button{font:inherit;cursor:pointer;padding:5px 11px;border-radius:3px;
             border:1px solid #bbb;background:#fff;color:#111}
        .bar button:disabled{opacity:.4;cursor:default}
        main{padding-top:68px}
        [contenteditable]{outline:none;border-radius:2px}
        [contenteditable]:hover{background:#f4f4f4}
        [contenteditable]:focus{background:#fffbe6;box-shadow:0 0 0 2px #ffe89c}
      `}</style>

      <div className="bar">
        <strong style={{ color: "#111" }}>visual editor</strong>
        <span>click any line, type, then save</span>
        <span style={{ flex: 1 }} />
        <span>{status}</span>
        <button onClick={save} disabled={!dirty}>
          {dirty ? "save" : "saved"}
        </button>
      </div>

      <main>
        {blocks.map((b, i) =>
          b.type === "ul" ? (
            <ul key={i}>
              {b.items.map((item, j) => (
                <li
                  key={j}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => edit(i, j, (e.target as HTMLElement).innerHTML)}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          ) : (
            <p
              key={i}
              contentEditable
              suppressContentEditableWarning
              onInput={(e) => edit(i, null, (e.target as HTMLElement).innerHTML)}
              dangerouslySetInnerHTML={{ __html: b.html }}
            />
          )
        )}
      </main>
    </>
  );
}
