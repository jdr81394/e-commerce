import ShopClient from "./ShopClient";
import { getProducts } from "@/lib/db";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { page?: string; limit?: string; categories?: string };
}) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const limit = params.limit ? parseInt(params.limit) : 12;
  const categories = params.categories ? params.categories.split(",") : [];

  const paginatedData = await getProducts({ page, limit, categories });

  return <ShopClient paginatedData={paginatedData} />;
}
