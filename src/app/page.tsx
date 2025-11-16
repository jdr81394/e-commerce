import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoriesSection from "@/components/CategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import ProductList from "@/components/ProductList";

export default async function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            New Collection
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our latest trends and exclusive designs
          </p>
          <a
            href="/shop"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesSection />

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            New Products
          </h2>
          <ProductList />
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

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

      {/* Footer */}
      <Footer />
    </div>
  );
}
