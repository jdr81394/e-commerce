export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("Product ID:", id);
  return <div>Product Page: {id}</div>;
}
