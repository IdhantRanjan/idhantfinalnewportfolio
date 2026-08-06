import { notFound } from "next/navigation";
import { projects } from "@/data/items";
import PlainDetail from "@/components/PlainDetail";

export function generateStaticParams() {
  return projects.map((i) => ({ slug: i.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = projects.find((i) => i.slug === slug);
  if (!item) notFound();
  return <PlainDetail item={item} />;
}
