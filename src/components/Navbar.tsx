"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  // State untuk mengontrol menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    // Tutup menu saat berpindah halaman
    setIsMenuOpen(false);
  }, [pathname]);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.history.pushState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === "/") {
      window.history.pushState(null, "", "/#contact");
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
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
                alt="Logo"
                className="h-10 w-10 rounded-full object-cover border-2 border-[#EA580C]"
              />
              <span className="text-xl font-extrabold text-[#7F1D1D]">
                Ands.<span className="text-[#EA580C]">Shop</span>
              </span>
            </Link>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#7D6356] hover:text-[#EA580C] focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" onClick={handleHomeClick} className={`px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/" ? "border-[#EA580C] text-[#EA580C]" : "border-transparent text-[#7D6356]"}`}>
              Home
            </Link>
            <Link href="/products" className={`px-1 pt-1 border-b-2 text-sm font-medium ${pathname.startsWith("/products") ? "border-[#EA580C] text-[#EA580C]" : "border-transparent text-[#7D6356]"}`}>
              Katalog Menu
            </Link>
            <a href="/#contact" onClick={handleContactClick} className="px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-[#7D6356]">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-[#F0E6DD] animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={handleHomeClick}
              className={`block px-3 py-4 rounded-md text-base font-medium ${pathname === "/" ? "bg-[#FFFBF7] text-[#EA580C]" : "text-[#7D6356]"}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`block px-3 py-4 rounded-md text-base font-medium ${pathname.startsWith("/products") ? "bg-[#FFFBF7] text-[#EA580C]" : "text-[#7D6356]"}`}
            >
              Katalog Menu
            </Link>
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="block px-3 py-4 rounded-md text-base font-medium text-[#7D6356]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}