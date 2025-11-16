import Navbar from "@/components/Navbar";
import { getProductById, Product } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product | null = await getProductById(id);

  if (!product) redirect("/404");

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-auto object-cover rounded"
          />
          <div className="md:w-1/2">
            <p className="text-xl text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
