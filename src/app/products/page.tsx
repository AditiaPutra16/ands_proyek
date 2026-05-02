"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/lib/data";
import Search from "./components/Search";


export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  
  const filteredProducts = dummyProducts.filter((product) => {
    const matchSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchCategory = 
      selectedCategory === "Semua" || product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <main className="min-h-screen bg-[#FFFBF7] pb-20">
      
      {/* 1. HEADER HALAMAN */}
      <section 
        className="relative text-white py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#EA580C] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/product/11.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#5C3D2E]/70 to-[#2A1B14]/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            Katalog <span className="text-[#EA580C]">Menu Lengkap</span>
          </h1>
          <p className="text-[#F0E6DD] max-w-2xl mx-auto text-lg font-light drop-shadow-sm">
            Jelajahi seluruh koleksi hidangan istimewa kami. Silakan gunakan fitur pencarian untuk menemukan makanan favorit Anda.
          </p>
        </div>
      </section>

      {/* 2. AREA PENCARIAN & FILTER (Menggunakan Komponen) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Kita melempar state dan setter-nya ke dalam komponen SearchBar */}
        <Search
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>

      {/* 3. GRID KATALOG PRODUK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#5C3D2E]">
            {selectedCategory === "Semua" ? "Semua Menu" : `Koleksi ${selectedCategory}`}
          </h2>
          {searchQuery && (
            <p className="text-[#7D6356] mt-2">
              Hasil pencarian untuk: <span className="font-bold text-[#EA580C]">"{searchQuery}"</span>
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-[#5C3D2E] mb-2">Waduh, Menu Tidak Ditemukan</h3>
            <p className="text-medium text-[#7D6356]">
              Kami tidak menemukan menu yang cocok dengan kata kunci "{searchQuery}". <br/> Coba gunakan kata kunci lain.
            </p>
          </div>
        )}
      </section>

    </main>
  );
}