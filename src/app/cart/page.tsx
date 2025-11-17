"use client";

import { useState } from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  rating: number;
}

export default function CartPage() {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const { updateItemQuantity, items, removeItem } = useCart();
  const router = useRouter();

  function updateQuantity(id: number, newQuantity: number) {
    if (newQuantity < 1) return;
    updateItemQuantity(id, newQuantity);
  }

  function applyCoupon() {
    if (couponCode.toLowerCase() === "save20") {
      setDiscount(0.2);
      alert("Coupon applied! 20% discount");
    } else if (couponCode.toLowerCase() === "save10") {
      setDiscount(0.1);
      alert("Coupon applied! 10% discount");
    } else {
      alert("Invalid coupon code");
      setDiscount(0);
    }
  }

  const handleCheckout = () => router.push("/checkout");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

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
            <span className="text-gray-900 font-semibold">Shopping cart</span>
          </nav>
        </div>
      </div>

      {/* Shop Cart Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {items.length > 0 ? (
            <>
              {/* Cart Table */}
              <div className="mb-12 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-bold">Product</th>
                      <th className="text-left py-4 px-4 font-bold">Price</th>
                      <th className="text-left py-4 px-4 font-bold">
                        Quantity
                      </th>
                      <th className="text-left py-4 px-4 font-bold">Total</th>
                      <th className="text-left py-4 px-4 font-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        {/* Product Info */}
                        <td className="py-6 px-4">
                          <div className="flex gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded"
                            />
                            <div>
                              <h6 className="font-semibold text-gray-900 mb-2">
                                {item.name}
                              </h6>
                              <div className="flex gap-1">
                                {Array.from({
                                  length: item?.rating as number,
                                }).map((_, i) => (
                                  <i
                                    key={i}
                                    className="fa fa-star text-yellow-400 text-sm"
                                  ></i>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Price */}
                        <td className="py-6 px-4 text-gray-900 font-semibold">
                          ${item.price.toFixed(2)}
                        </td>

                        {/* Quantity */}
                        <td className="py-6 px-4">
                          <div className="flex items-center border border-gray-300 rounded w-20">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value) || 1
                                )
                              }
                              className="flex-1 text-center border-0 bg-transparent focus:outline-none"
                            />
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </td>

                        {/* Total */}
                        <td className="py-6 px-4 text-gray-900 font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>

                        {/* Remove */}
                        <td className="py-6 px-4">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-500 hover:text-red-600 transition text-lg cursor-pointer"
                          >
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center">
                <button className="border-2 border-gray-900 text-gray-900 font-semibold py-3 rounded hover:bg-gray-900 hover:text-white transition cursor-pointer">
                  Continue Shopping
                </button>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Coupon */}
                <div className="lg:col-span-1">
                  <h6 className="text-lg font-bold text-gray-900 mb-4">
                    Discount codes
                  </h6>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Enter your coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                    />
                    <button
                      onClick={applyCoupon}
                      className="w-full bg-gray-900 text-white font-semibold py-3 rounded hover:bg-gray-800 transition cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    Try codes: <strong>save10</strong> or{" "}
                    <strong>save20</strong>
                  </p>
                </div>

                {/* Cart Total */}
                <div className="lg:col-span-2 lg:flex lg:justify-end">
                  <div className="bg-gray-50 p-6 rounded w-full lg:w-96">
                    <h6 className="text-lg font-bold text-gray-900 mb-6">
                      Cart total
                    </h6>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-gray-700">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount ({Math.round(discount * 100)}%)</span>
                          <span>-${discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-300 pt-4 flex justify-between text-lg font-bold text-gray-900">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-gray-900 text-white font-semibold py-3 rounded hover:bg-gray-800 transition cursor-pointer"
                    >
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <i className="fa fa-shopping-bag text-6xl text-gray-300 mb-4"></i>
              <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
              <a
                href="/shop"
                className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded hover:bg-gray-800 transition cursor-pointer"
              >
                Continue Shopping
              </a>
            </div>
          )}
        </div>
      </section>

      <InstagramSection />

      <Footer />
    </div>
  );
}
