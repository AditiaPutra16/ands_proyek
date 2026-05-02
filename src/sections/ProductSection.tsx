import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/lib/data";

export default function ProductSection() {
    const featuredProducts = dummyProducts.filter((product) => product.isFeatured === true);
    return (
        <section id="featured" className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#7F1D1D] mb-4">
                    Menu Andalan Kami
                  </h2>
                  <div className="w-24 h-1 bg-[#EA580C] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
    );
}