import ShopClient from "./ShopClient";
import { getProducts } from "@/lib/db";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: {
    page?: string;
    limit?: string;
    categories?: string;
    sizes?: string;
    colors?: string;
  };
}) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const limit = params.limit ? parseInt(params.limit) : 12;
  const categories = params.categories ? params.categories.split(",") : [];
  const sizes = params.sizes ? params.sizes.split(",") : [];
  const colors = params.colors ? params.colors.split(",") : [];

  const paginatedData = await getProducts({
    page,
    limit,
    categories,
    sizes,
    colors,
  });

  return <ShopClient paginatedData={paginatedData} />;
}
