"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { type Product, type PaginatedProducts } from "@/lib/db";
import InstagramSection from "@/components/InstagramSection";
import Link from "next/link";
import Pagination from "@/components/Pagination";

const CATEGORIES = [
  { value: "women", label: "Women's Fashion" },
  { value: "men", label: "Men's Fashion" },
  { value: "accessories", label: "Accessories" },
];

const SIZES = ["xxs", "xs", "xs-s", "s", "m", "m-l", "l", "xl", "onesize"];

const COLORS = [
  { value: "blacks", label: "Blacks" },
  { value: "whites", label: "Whites" },
  { value: "reds", label: "Reds" },
  { value: "greys", label: "Greys" },
  { value: "blues", label: "Blues" },
  { value: "beige", label: "Beige Tones" },
  { value: "greens", label: "Greens" },
  { value: "yellows", label: "Yellows" },
];

export default function ShopClient({
  paginatedData,
}: {
  paginatedData: PaginatedProducts;
}) {
  const { products, total, page, limit, totalPages } = paginatedData;

  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [currentPage, setCurrentPage] = useState(page);
  const [itemsPerPage, setItemsPerPage] = useState(limit);

  // Filter products (client-side filtering on paginated results)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        (product.category && selectedCategories.includes(product.category));
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const sizeMatch =
        selectedSizes.length === 0 ||
        (product.size &&
          selectedSizes.some((size) => product.size!.includes(size)));
      const colorMatch =
        selectedColors.length === 0 ||
        (product.color && selectedColors.includes(product.color));

      return categoryMatch && priceMatch && sizeMatch && colorMatch;
    });
  }, [products, selectedCategories, priceRange, selectedSizes, selectedColors]);

  function handlePageChange(page: number) {
    setCurrentPage(page);
    router.push(
      `/shop?page=${page}&limit=${itemsPerPage}&categories=${selectedCategories.join(
        ","
      )}`
    );
  }

  function handleLimitChange(newLimit: number) {
    setItemsPerPage(newLimit);
    setCurrentPage(1);
    router.push(
      `/shop?page=${page}&limit=${newLimit}&categories=${selectedCategories.join(
        ","
      )}`
    );
  }

  function toggleCategory(cat: string) {
    setCurrentPage(1);

    setSelectedCategories((prev) => {
      let newRouteCategories: string;
      if (prev.includes(cat)) {
        newRouteCategories = prev.filter((c) => c !== cat).join(",");
        router.push(
          `/shop?page=1&limit=${itemsPerPage}${
            newRouteCategories.length > 0
              ? `&categories=${newRouteCategories}`
              : ""
          }`
        );
        return prev.filter((c) => c !== cat);
      } else {
        newRouteCategories = [...prev, cat].join(",");
        router.push(
          `/shop?page=1&limit=${itemsPerPage}${
            newRouteCategories.length > 0
              ? `&categories=${newRouteCategories}`
              : ""
          }`
        );
        return [...prev, cat];
      }
    });
    console.log("selectedCategories: ", selectedCategories);
  }

  function toggleSize(size: string) {
    setCurrentPage(1);

    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  }

  function toggleColor(color: string) {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
    setCurrentPage(1);
  }

  return (
    <div>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              <i className="fa fa-home mr-1"></i>Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">Shop</span>
          </nav>
        </div>
      </div>

      {/* Shop Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-4">
                {/* Categories */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <label
                        key={cat.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.value)}
                          onChange={() => toggleCategory(cat.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">{cat.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Shop by Price
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Price Range
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={priceRange[0]}
                          onChange={(e) =>
                            setPriceRange([
                              Number(e.target.value),
                              priceRange[1],
                            ])
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                          placeholder="Min"
                        />
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={priceRange[1]}
                          onChange={(e) =>
                            setPriceRange([
                              priceRange[0],
                              Number(e.target.value),
                            ])
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full"
                    />
                    <div className="text-sm text-gray-600">
                      ${priceRange[0]} - ${priceRange[1]}
                    </div>
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Shop by Size
                  </h4>
                  <div className="space-y-2">
                    {SIZES.map((size) => (
                      <label
                        key={size}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => toggleSize(size)}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700 capitalize">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Shop by Color
                  </h4>
                  <div className="space-y-2">
                    {COLORS.map((color) => (
                      <label
                        key={color.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color.value)}
                          onChange={() => toggleColor(color.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">{color.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {total} Products
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Show:</label>
                    <select
                      value={itemsPerPage}
                      onChange={(e) =>
                        handleLimitChange(Number(e.target.value))
                      }
                      className="px-3 py-2 border border-gray-300 rounded text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-900"
                    >
                      <option value={6}>6</option>
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                      <option value={48}>48</option>
                    </select>
                  </div>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <>
                  {/* Pagination - Top */}
                  <div className="mb-6">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredProducts.map((product) => (
                      <ShopProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Pagination - Bottom */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No products found matching your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <InstagramSection />

      <Footer />
    </div>
  );
}

function ShopProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition duration-300"
          style={{
            backgroundImage: `url(${product.image || "/img/placeholder.jpg"})`,
          }}
        />

        {/* Label */}
        {product.label && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded text-white text-xs font-semibold ${
              product.label === "new"
                ? "bg-blue-600"
                : product.label === "sale"
                ? "bg-red-600"
                : "bg-gray-600"
            }`}
          >
            {product.label === "out-of-stock"
              ? "Out of Stock"
              : product.label.charAt(0).toUpperCase() + product.label.slice(1)}
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <div className="flex gap-3">
            <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition">
              <i className="fa fa-shopping-bag"></i>
            </button>
            <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition">
              <i className="fa fa-expand"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h6 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition line-clamp-2">
          {product.name}
        </h6>

        {/* Rating */}
        {product.rating && (
          <div className="flex gap-1 mb-3">
            {Array.from({ length: product.rating }).map((_, i) => (
              <i key={i} className="fa fa-star text-yellow-400 text-sm"></i>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
