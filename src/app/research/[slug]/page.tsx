import { notFound } from "next/navigation";
import { research } from "@/data/items";
import DetailPage from "@/components/DetailPage";

export function generateStaticParams() {
  return research.map((r) => ({ slug: r.slug }));
}

export default async function ResearchDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = research.find((r) => r.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/research" backLabel="research" />;
}
