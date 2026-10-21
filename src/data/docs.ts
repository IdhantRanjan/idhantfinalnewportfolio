import fulfillment from "./fulfillment.json";
import sansOutcome from "./sans-outcome.json";

export type Doc = { title: string; blocks: { type: "p"; html: string }[] };

export const docs: Record<string, Doc> = {
  "sans-outcome": sansOutcome as Doc,
  fulfillment: fulfillment as Doc,
};

/** newest first — the order the writing index lists them in */
export const order = ["sans-outcome", "fulfillment"];
