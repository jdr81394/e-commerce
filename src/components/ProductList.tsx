import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/db";

interface ProductListProps {
  title?: string;
}

export default async function ProductList({
  title = "New Products",
}: ProductListProps) {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-6">
      {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products
            .slice(0, 6)
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}
