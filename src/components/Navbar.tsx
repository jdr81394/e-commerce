"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  }

  function handleCartNavigate() {
    router.push("/cart");
  }

  function cursorToggle() {
    // router.push("/cart");
  }

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="py-4 flex justify-between items-center">
            {/* Logo */}
            <div>
              <a href="/" className="text-2xl font-bold text-gray-900">
                ASHION
              </a>
            </div>

            {/* Navigation (hidden on mobile) */}
            <nav className="hidden md:flex md:flex-1 md:mx-8">
              <ul className="flex gap-8">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/shop"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right Section: Cart Icon + Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              {/* Cart Button - visible on all screen sizes */}
              <button
                onClick={() => handleCartNavigate()}
                className="hidden md:block relative text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <i className="fa fa-shopping-bag text-lg"></i>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-gray-900"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <i className="fa fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4 px-4">
          <nav className="mb-4">
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-700 hover:text-gray-900">
                  Shop
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-700 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleCartNavigate();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                  <i className="fa fa-shopping-bag"></i>
                  <span>Cart</span>
                  {totalItems > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
