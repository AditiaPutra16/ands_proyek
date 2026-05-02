"use client";
import { useState } from "react";

 // Tetap harus ada karena menggunakan event onChange

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Search({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["Semua", "Roti", "Pizza", "Dimsum"];
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-[#F0E6DD] flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
      {/* Input Pencarian */}
      <div className="relative w-full sm:w-96">
        <input
          type="text"
          placeholder="Cari menu makanan..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent text-[#5C3D2E] placeholder-gray-400"
        />
        <svg
          className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Hamburger / Dropdown Filter */}
      <div className="relative w-full md:w-auto">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full md:w-auto flex items-center justify-between gap-3 px-4 py-2 bg-[#F0E6DD] text-[#5C3D2E] rounded-lg font-medium hover:bg-[#EADDD7] transition-all border border-[#EADDD7]"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>Kategori: <span className="text-[#EA580C]">{selectedCategory}</span></span>
          </div>
          <svg 
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Menu Dropdown */}
        {isOpen && (
          <>
            {/* Overlay untuk menutup saat klik di luar menu */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            ></div>
            
            <div className="absolute right-0 mt-2 w-full md:w-48 bg-white border border-[#F0E6DD] rounded-xl shadow-xl z-20 py-2 animate-in fade-in zoom-in duration-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsOpen(false); // Tutup dropdown setelah memilih
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#EA580C]/10 text-[#EA580C] font-bold"
                      : "text-[#7D6356] hover:bg-[#FFFBF7] hover:text-[#EA580C]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
