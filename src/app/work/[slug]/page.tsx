import { notFound } from "next/navigation";
import { work } from "@/data/items";
import DetailPage from "@/components/DetailPage";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/work" backLabel="work" />;
}
