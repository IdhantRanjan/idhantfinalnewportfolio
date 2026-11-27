"use client";

import { useEffect, useRef, useState } from "react";

type Instance = { toggle(): boolean; stop(): void };

type DuetRobots = {
  start: (
    canvas: HTMLCanvasElement,
    opts: {
      cols?: number;
      rows?: number;
      colors?: string[];
      lineHeight?: number;
      alphaGamma?: number;
      onFail?: () => void;
      onTick?: (t: number, loop: number, scene: number, name: string) => void;
    }
  ) => Instance;
};

declare global {
  interface Window {
    DuetRobots?: DuetRobots;
  }
}

const SRC = "/duet-robots.js";

/* Two arms working together, ray-marched tiny and drawn as characters.
   Falls back to nothing at all if WebGL is unavailable. */
export default function HandoverMark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instRef = useRef<Instance | null>(null);
  const capRef = useRef("fig. 1 — handover");
  const [cap, setCap] = useState("fig. 1 — handover");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    function boot() {
      if (cancelled || !canvasRef.current || !window.DuetRobots) return;
      instRef.current = window.DuetRobots.start(canvasRef.current, {
        cols: 104,
        rows: 34,
        colors: ["#ecdcd4", "#d98c70", "#9fb0c4"],
        // the alpha ramp assumes dark glyphs on cream; on a dark ground the
        // low buckets vanish, so lift them
        alphaGamma: 0.42,
        lineHeight: 1.02,
        onFail: () => setFailed(true),
        // fires every frame, so only touch state when the caption changes.
        // si is the scene index, so the figure number tracks the scene.
        onTick: (_t, _loop, si, name) => {
          const next = `fig. ${si + 1} \u2014 ${name}`;
          if (next !== capRef.current) {
            capRef.current = next;
            setCap(next);
          }
        },
      });
    }

    if (window.DuetRobots) {
      boot();
    } else {
      let el = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
      if (!el) {
        el = document.createElement("script");
        el.src = SRC;
        el.async = true;
        document.body.appendChild(el);
      }
      el.addEventListener("load", boot, { once: true });
      el.addEventListener("error", () => setFailed(true), { once: true });
    }

    return () => {
      cancelled = true;
      instRef.current?.stop();
      instRef.current = null;
    };
  }, []);

  if (failed) return null;

  return (
    <figure className="fig">
      <button
        className="fig-btn"
        type="button"
        aria-label="pause animation"
        onClick={() => instRef.current?.toggle()}
      >
        <canvas ref={canvasRef} />
      </button>
      <figcaption>{cap}</figcaption>
    </figure>
  );
}
