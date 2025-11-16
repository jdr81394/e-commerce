"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
                    href="/women"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Women's
                  </a>
                </li>
                <li>
                  <a
                    href="/men"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Men's
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

            {/* Right Section: Auth + Icons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="/login"
                className="text-gray-700 hover:text-gray-900 text-sm"
              >
                Login
              </a>
              <a
                href="/register"
                className="text-gray-700 hover:text-gray-900 text-sm"
              >
                Register
              </a>
              <button
                onClick={() => router.push("/favorites")}
                className="text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <i className="fa fa-heart text-lg"></i>
              </button>
              <button
                onClick={() => handleCartNavigate()}
                className="relative text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <i className="fa fa-shopping-bag text-lg"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

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
                <a href="/women" className="text-gray-700 hover:text-gray-900">
                  Women's
                </a>
              </li>
              <li>
                <a href="/men" className="text-gray-700 hover:text-gray-900">
                  Men's
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
            </ul>
          </nav>
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <a
              href="/login"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </>
  );
}
