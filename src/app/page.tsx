import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoriesSection from "@/components/CategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import ProductList from "@/components/ProductList";
import InstagramSection from "@/components/InstagramSection";

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
      <InstagramSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
