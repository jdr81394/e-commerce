"use client";

import { useState } from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CheckoutForm {
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  postcode: string;
  phone: string;
  email: string;
  password: string;
  createAccount: boolean;
  notes: boolean;
  orderNotes: string;
  paymentMethod: string;
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
    password: "",
    createAccount: false,
    notes: false,
    orderNotes: "",
    paymentMethod: "check",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Order submitted:", formData);
      // In a real app, send to API
      alert("Order placed successfully!");
    } finally {
      setLoading(false);
    }
  }

  const cartItems = [
    { id: 1, name: "Chain bucket bag", price: 300.0, qty: 1 },
    { id: 2, name: "Zip-pockets pebbled tote briefcase", price: 170.0, qty: 1 },
    { id: 3, name: "Black jean", price: 170.0, qty: 1 },
    { id: 4, name: "Cotton shirt", price: 110.0, qty: 1 },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const total = subtotal;

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
            <span className="text-gray-900 font-semibold">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Checkout Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Coupon Section */}
          <div className="mb-8 p-4 bg-gray-50 rounded border border-gray-200">
            <h6 className="flex items-center gap-2 text-sm font-semibold text-gray-900">
              <i className="fa fa-tag"></i>
              <a href="#" className="text-blue-600 hover:underline">
                Have a coupon? Click here to enter your code.
              </a>
            </h6>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Billing Details */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Billing Details
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 mb-2"
                  />
                  <input
                    type="text"
                    name="apartment"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                {/* City, State, Postcode */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Postcode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>

                {/* Create Account */}
                <label className="flex items-center gap-3 mt-6">
                  <input
                    type="checkbox"
                    name="createAccount"
                    checked={formData.createAccount}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    Create an account?
                  </span>
                </label>
                {formData.createAccount && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Account Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                )}

                {/* Order Notes */}
                <label className="flex items-center gap-3 mt-6">
                  <input
                    type="checkbox"
                    name="notes"
                    checked={formData.notes}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    Special notes for delivery
                  </span>
                </label>
                {formData.notes && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Order Notes
                    </label>
                    <textarea
                      name="orderNotes"
                      placeholder="Note about your order, e.g., special note for delivery"
                      value={formData.orderNotes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="border border-gray-200 rounded-lg p-6 sticky top-4">
                <h5 className="text-xl font-bold text-gray-900 mb-6">
                  Your Order
                </h5>

                {/* Products */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between mb-4 pb-2 border-b border-gray-200 font-semibold text-gray-900">
                    <span>Product</span>
                    <span>Total</span>
                  </div>
                  <ul className="space-y-3">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between text-sm text-gray-600"
                      >
                        <span>{item.name}</span>
                        <span>${(item.price * item.qty).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Totals */}
                <div className="mb-6 space-y-2 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-3 mb-6">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="check"
                      checked={formData.paymentMethod === "check"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-900">Check Payment</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === "paypal"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-900">PayPal</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={formData.paymentMethod === "credit"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-900">Credit Card</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded transition disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Place Order"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">
            Follow us on Instagram
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <a
                key={i}
                href="#"
                className="relative h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded overflow-hidden group"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition">
                  <i className="fa fa-instagram text-white text-2xl"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
