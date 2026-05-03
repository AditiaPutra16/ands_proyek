import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/lib/data";
import { dummyReviews } from "@/lib/data";
import ReviewCard from "@/components/ReviewCard";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import MarqueeSection from "@/sections/MarqueeSection";
import ReviewSection from "@/sections/ReviewSection";
import ProductSection from "@/sections/ProductSection";
import Footer from "@/components/Footer";

// export const metadata = {
//   title: "Home",
//   description: "Jelajahi seluruh koleksi hidangan istimewa kami.",
// };

export default function Home() {
  
  
  return (
    <main className="min-h-screen bg-[#FFFBF7]">

      <HeroSection/>

      <MarqueeSection/>

      <ProductSection />

      <ReviewSection />
    
      <ContactSection />

      <Footer />
      
    </main>
  );
}