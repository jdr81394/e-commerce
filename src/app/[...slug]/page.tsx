import { notFound } from "next/navigation";

export default async function CatchAll({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  // Log unmatched routes for debugging/analytics
  const { slug } = await params;
  const attemptedPath = `/${slug?.join("/")}`;
  console.log(`[404] Unmatched route accessed: ${attemptedPath}`);
  notFound();
}
