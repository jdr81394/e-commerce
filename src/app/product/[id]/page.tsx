import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductDetailClient from "./ProductDetailClient";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  if (!product) notFound();

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <i className="fa fa-home mr-1"></i>Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </nav>
        </div>
      </div>

      <ProductDetailClient product={product} />

      <Footer />
    </>
  );
}
