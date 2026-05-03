import type { Metadata } from "next";
// 1. Ubah import dari Inter menjadi Poppins
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// 2. Konfigurasi font Poppins
// Kita memasukkan berbagai ketebalan (weight) dari tipis hingga sangat tebal
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap", // Memastikan teks tetap terlihat saat font sedang dimuat
});

export const metadata: Metadata = {
  title: "Ands.Bakery",
  description: "Temukan berbagai hidangan terbaik kami.",
  icons: {
    icon: "/assets/logo/logo.jpg",
    shortcut: "/assets/logo/logo.jpg",
    apple: "/assets/logo/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      {/* 3. Terapkan poppins.className ke dalam tag body */}
      <body
        className={`${poppins.className} antialiased selection:bg-[#EA580C] selection:text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
