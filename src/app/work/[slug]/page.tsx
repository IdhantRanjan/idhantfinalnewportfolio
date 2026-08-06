import { notFound } from "next/navigation";
import { work } from "@/data/items";
import PlainDetail from "@/components/PlainDetail";

export function generateStaticParams() {
  return work.map((i) => ({ slug: i.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = work.find((i) => i.slug === slug);
  if (!item) notFound();
  return <PlainDetail item={item} />;
}
