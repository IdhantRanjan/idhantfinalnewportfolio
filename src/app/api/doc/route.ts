import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import doc from "@/data/fulfillment.json";

export async function GET() {
  return NextResponse.json(doc);
}

/** Dev-only writer. A deployed build can never be written to. */
export async function POST(req: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "editing is disabled in production" },
      { status: 403 }
    );
  }
  const body = await req.json();
  if (!body || !Array.isArray(body.blocks)) {
    return NextResponse.json({ error: "expected { blocks: [...] }" }, { status: 400 });
  }
  const file = path.join(process.cwd(), "src", "data", "fulfillment.json");
  await writeFile(
    file,
    JSON.stringify({ title: body.title ?? "untitled", blocks: body.blocks }, null, 2) + "\n",
    "utf8"
  );
  return NextResponse.json({ ok: true });
}
