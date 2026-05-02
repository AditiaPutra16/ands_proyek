import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[500px] md:h-[650px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/product/7.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#2A1B14]/95 via-[#5C3D2E]/80 to-transparent/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <span className="inline-block py-1 px-3 rounded-full bg-[#14532D]/20 text-[#E8F5E9] border border-[#14532D]/50 text-sm font-semibold tracking-wider mb-4 backdrop-blur-sm">
          ✨ RASA TERBAIK
        </span>

        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-7xl leading-tight drop-shadow-md">
          Cari Mood Booster? <br />
          <span className="text-[#EA580C]">Cek Menu Andalan Kami!</span>
        </h1>

        <p className="mt-4 text-base text-[#F0E6DD] sm:text-lg md:mt-6 md:text-xl max-w-xl drop-shadow-sm font-light">
          Manjakan dirimu dengan menu andalan kami. Bahan kualitas tinggi, rasa bintang lima, dan pastinya aman di kantong.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 sm:py-4 sm:text-lg border border-transparent font-medium rounded-lg text-white bg-[#EA580C] hover:bg-[#C2410C] transition-all shadow-lg shadow-orange-900/50 hover:shadow-orange-900/80 hover:-translate-y-1"
          >
            Lihat Semua Menu
          </Link>
          <Link
            href="#featured"
            className="inline-flex items-center justify-center px-8 py-3 sm:py-4 sm:text-lg border border-[#F0E6DD] font-medium rounded-lg text-white hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Menu Andalan
          </Link>
        </div>
      </div>
    </section>
  );
}
