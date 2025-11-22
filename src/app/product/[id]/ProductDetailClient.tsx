"use client";

import { useState } from "react";
import type { Product } from "@/lib/db";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (product.label === "out-of-stock") return;
    if (selectedSize === null) {
      toast.error("Please select a size");
      return;
    }
    addItem({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          {product.label && (
            <div
              className={`absolute top-4 left-4 px-4 py-2 rounded-lg text-white text-sm font-bold z-10 ${
                product.label === "new"
                  ? "bg-blue-600"
                  : product.label === "sale"
                  ? "bg-red-600"
                  : "bg-gray-600"
              }`}
            >
              {product.label === "out-of-stock"
                ? "Out of Stock"
                : product.label.toUpperCase()}
            </div>
          )}
          <img
            src={product.image || "/img/placeholder.jpg"}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          {/* Category */}
          {product.category && (
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full uppercase">
                {product.category}
              </span>
            </div>
          )}

          {/* Product Name */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <i key={i} className="fa fa-star text-yellow-400 text-lg"></i>
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                ({product.rating}.0)
              </span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-2xl text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.originalPrice && (
              <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <div className="mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Size Selection */}
          {product.size && product.size.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`cursor-pointer  px-4 py-2 border-2 rounded uppercase text-sm font-semibold transition ${
                      selectedSize === size
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 hover:border-gray-900"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color */}
          {product.color && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase">
                Color
              </h3>
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 bg-gray-100 rounded text-gray-800 capitalize">
                  {product.color}
                </span>
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => handleAddToCart()}
              disabled={product.label === "out-of-stock"}
              className={`cursor-pointer flex-1 px-6 py-4 rounded-lg font-semibold text-lg transition ${
                product.label === "out-of-stock"
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              <i className="fa fa-shopping-cart mr-2"></i>
              {product.label === "out-of-stock"
                ? "Out of Stock"
                : "Add to Cart"}
            </button>
            {/* Favorite button removed */}
          </div>

          {/* Product Info */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Product Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Product ID:</span>
                <span className="font-semibold text-gray-900">
                  {product.id}
                </span>
              </div>
              {product.category && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold text-gray-900 capitalize">
                    {product.category}
                  </span>
                </div>
              )}
              {product.size && product.size.length > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Available Sizes:</span>
                  <span className="font-semibold text-gray-900 uppercase">
                    {product.size.join(", ")}
                  </span>
                </div>
              )}
              {product.label && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold text-gray-900 capitalize">
                    {product.label}
                  </span>
                </div>
              )}
              {selectedSize && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Selected Size:</span>
                  <span className="font-semibold text-gray-900 uppercase">
                    {selectedSize}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
