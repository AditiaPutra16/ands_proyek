import Link from "next/link";
import { notFound } from "next/navigation";
import { dummyProducts } from "@/lib/data";

export const dynamicParams = true;

// Fungsi untuk membuat halaman dinamis
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. Await params karena di Next.js terbaru params adalah Promise
  const { slug } = await params;

  // 2. Cari produk berdasarkan slug dari URL
  const product = dummyProducts.find((p) => p.slug === slug);

  // 3. Jika produk tidak ditemukan, arahkan ke halaman 404 otomatis dari Next.js
  if (!product) {
    notFound();
  }

  // Pesan otomatis WhatsApp
  const waMessage = encodeURIComponent(
    `Halo, saya ingin memesan menu: ${product.name} (${product.price}). Apakah masih tersedia?`,
  );

  return (
    <main className="min-h-screen bg-[#FFFBF7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Tombol Kembali */}
        <Link
          href="/products"
          className="inline-flex items-center text-[#7D6356] hover:text-[#EA580C] font-medium mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali ke Katalog
        </Link>

        {/* Kontainer Detail Produk (2 Kolom di layar besar) */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#F0E6DD] overflow-hidden flex flex-col md:flex-row">
          {/* Kolom Kiri: Gambar Produk */}
          <div className="w-full md:w-1/2 h-72 sm:h-80 md:h-[400px] lg:h-[450px] relative bg-[#EADDD7] flex-shrink-0">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Kolom Kanan: Detail Informasi */}
          <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#5C3D2E] mb-4">
              {product.name}
            </h1>

            <span className="inline-block text-2xl font-bold text-[#14532D] bg-[#E8F5E9] px-4 py-2 rounded-xl w-max mb-6">
              {product.price}
            </span>

            <div className="w-full h-px bg-[#F0E6DD] mb-6"></div>

            <h3 className="text-lg font-bold text-[#5C3D2E] mb-2">
              Deskripsi Hidangan
            </h3>
            <p className="text-[#7D6356] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tombol Pesan (Diarahkan ke WhatsApp) */}
            <a
              href={`https://wa.me/6282214783810?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#EA580C] text-white font-bold rounded-xl hover:bg-[#C2410C] transition-all shadow-lg shadow-orange-200 hover:-translate-y-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
