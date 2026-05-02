"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // 1. Efek untuk menangani scroll otomatis jika URL mengandung #contact saat halaman dimuat
  useEffect(() => {
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  // 2. Fungsi khusus untuk mengklik Home & Logo (Membersihkan URL dari #contact)
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault(); 
      window.history.pushState(null, "", "/"); // Hapus hash dari URL
      window.scrollTo({ top: 0, behavior: "smooth" }); // Gulir ke atas
    }
  };

  // 3. Fungsi khusus untuk mengklik Contact (Menambahkan #contact ke URL)
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === "/") {
      // Jika di Home: Ubah URL jadi /#contact lalu scroll
      window.history.pushState(null, "", "/#contact");
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Jika di halaman lain: Paksa pindah ke Home membawa hash
      router.push("/#contact");
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-[#F0E6DD] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center"> 
            <Link href="/" onClick={handleHomeClick} className="flex items-center gap-3">
              <img
                src="/assets/logo/logo.jpg"
                alt="Logo KulinerKita"
                className="h-10 w-10 rounded-full object-cover border-2 border-[#EA580C]"
              />
              <span className="text-xl font-extrabold text-[#7F1D1D] hidden sm:block">
                Ands.<span className="text-[#EA580C]">Shop</span>
              </span>
            </Link>
          </div>

          {/* Link Navigasi Desktop */}
          <div className="hidden sm:flex sm:space-x-8">            
            <Link
              href="/"
              onClick={handleHomeClick}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "border-[#EA580C] text-[#EA580C]"
                  : "border-transparent text-[#7D6356] hover:text-[#EA580C] hover:border-[#EA580C]"
              }`}
            >
              Home
            </Link>
            
            <Link
              href="/products"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/products")
                  ? "border-[#EA580C] text-[#EA580C]"
                  : "border-transparent text-[#7D6356] hover:text-[#EA580C] hover:border-[#EA580C]"
              }`}
            >
              Katalog Menu
            </Link>

            {/* Tombol Contact - Perhatikan href berubah jadi /#contact */}
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-[#7D6356] hover:text-[#EA580C] hover:border-[#EA580C] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center sm:hidden">
            <span className="text-sm text-[#7D6356]">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
}