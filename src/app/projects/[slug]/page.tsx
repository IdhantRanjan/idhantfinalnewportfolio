import { notFound } from "next/navigation";
import { projects } from "@/data/items";
import DetailPage from "@/components/DetailPage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = projects.find((p) => p.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/projects" backLabel="projects" />;
}
