"use client";

import { useState } from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real app, send to API
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", website: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
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
            <span className="text-gray-900 font-semibold">Contact</span>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info & Form */}
            <div>
              {/* Contact Info */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Info
                </h3>
                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <h6 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                      <i className="fa fa-map-marker text-lg"></i>
                      Address
                    </h6>
                    <p className="text-gray-600 ml-6">
                      New Brunswick, NJ 08901
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <h6 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                      <i className="fa fa-phone text-lg"></i>
                      Phone
                    </h6>
                    <div className="ml-6 space-y-1">
                      <p className="text-gray-600">732-991-9233</p>
                    </div>
                  </div>

                  {/* Support */}
                  <div>
                    <h6 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                      <i className="fa fa-headphones text-lg"></i>
                      Support
                    </h6>
                    <p className="text-gray-600 ml-6">jdr81394@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h5 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Message
                </h5>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    <p className="font-semibold">
                      Thank you! Your message has been sent.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  <input
                    type="url"
                    name="website"
                    placeholder="Website (optional)"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded transition disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24310.10447844808!2d-74.46573859999999!3d40.4862157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c6881e607b61%3A0x34f7a3eaf647ae8f!2sNew%20Brunswick%2C%20NJ%2008901!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full rounded-lg"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <InstagramSection />

      <Footer />
    </div>
  );
}
