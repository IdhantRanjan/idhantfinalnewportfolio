"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Block = { type: "p"; html: string };

export default function UntitledDoc() {
  const [blocks, setBlocks] = useState<Block[] | null>(null);
  const [title, setTitle] = useState("untitled");
  const [dirty, setDirty] = useState(false);
  const [status, setStatus] = useState("");
  const [editable, setEditable] = useState(false);
  const live = useRef<{ title: string; blocks: Block[] }>({ title: "untitled", blocks: [] });

  useEffect(() => {
    // editing only exists on localhost; the deployed page is read-only
    setEditable(
      ["localhost", "127.0.0.1"].includes(window.location.hostname)
    );
    fetch("/api/doc")
      .then((r) => r.json())
      .then((d) => {
        setBlocks(d.blocks);
        setTitle(d.title ?? "untitled");
        live.current = { title: d.title ?? "untitled", blocks: d.blocks };
      })
      .catch(() => setStatus("could not load"));
  }, []);

  function editBlock(i: number, html: string) {
    const next = structuredClone(live.current);
    next.blocks[i] = { type: "p", html };
    live.current = next;
    setDirty(true);
    setStatus("");
  }

  function editTitle(t: string) {
    live.current = { ...structuredClone(live.current), title: t };
    setDirty(true);
  }

  function addParagraph() {
    const next = structuredClone(live.current);
    next.blocks.push({ type: "p", html: "" });
    live.current = next;
    setBlocks(next.blocks);
    setDirty(true);
  }

  async function save() {
    setStatus("saving…");
    const res = await fetch("/api/doc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(live.current),
    });
    if (res.ok) {
      setDirty(false);
      setStatus("saved");
    } else {
      const e = await res.json().catch(() => ({}));
      setStatus(`failed: ${e.error ?? res.status}`);
    }
  }

  if (!blocks) return <main className="detail essay"><p>loading…</p></main>;

  return (
    <>
      {editable && (
        <>
          <style>{`
            .bar{position:fixed;top:0;left:0;right:0;display:flex;align-items:center;gap:14px;
                 padding:10px 16px;background:#fafafa;border-bottom:1px solid #e6e6e6;z-index:20;
                 font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;color:#666}
            .bar button{font:inherit;cursor:pointer;padding:5px 11px;border-radius:3px;
                 border:1px solid #bbb;background:#fff;color:#111}
            .bar button:disabled{opacity:.4;cursor:default}
            .detail{padding-top:72px}
            [contenteditable]{outline:none;border-radius:2px}
            [contenteditable]:hover{background:#f4f4f4}
            [contenteditable]:focus{background:#fffbe6;box-shadow:0 0 0 2px #ffe89c}
          `}</style>
          <div className="bar">
            <strong style={{ color: "#111" }}>doc editor</strong>
            <span>click the title or any paragraph and type</span>
            <span style={{ flex: 1 }} />
            <span>{status}</span>
            <button onClick={addParagraph}>+ paragraph</button>
            <button onClick={save} disabled={!dirty}>
              {dirty ? "save" : "saved"}
            </button>
          </div>
        </>
      )}

      <main className="detail essay">
        <p className="back">
          <Link href="/writing">← back</Link>
        </p>

        <p>
          <strong
            contentEditable={editable}
            suppressContentEditableWarning
            onInput={(e) => editTitle((e.target as HTMLElement).innerText)}
          >
            {title}
          </strong>
        </p>

        {blocks.map((b, i) => (
          <p
            key={i}
            contentEditable={editable}
            suppressContentEditableWarning
            onInput={(e) => editBlock(i, (e.target as HTMLElement).innerHTML)}
            dangerouslySetInnerHTML={{ __html: b.html }}
          />
        ))}
      </main>
    </>
  );
}
