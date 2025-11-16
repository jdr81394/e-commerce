import { notFound } from "next/navigation";

export default function CatchAll({ params }: { params: { slug: string[] } }) {
  // Log unmatched routes for debugging/analytics
  const attemptedPath = `/${params?.slug?.join("/")}`;
  console.log(`[404] Unmatched route accessed: ${attemptedPath}`);
  notFound();
}
