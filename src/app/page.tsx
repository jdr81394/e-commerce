import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoriesSection from "@/components/CategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import ProductList from "@/components/ProductList";

export default async function Home() {
  return (
    <div>
      <Header />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <a
                key={i}
                href="https://github.com/jdr81394"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-32 rounded overflow-hidden"
              >
                <img
                  src={`/img/instagram/insta-${i + 1}.jpg`}
                  alt={`Instagram image ${i + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Overlay: appears on hover and shows GitHub username (replace placeholder) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-200">
                  <span className="text-white text-sm">@jdr81394</span>
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
