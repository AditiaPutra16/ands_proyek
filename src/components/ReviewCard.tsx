// src/components/ReviewCard.tsx
import { Review } from "@/lib/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#F0E6DD] flex flex-col h-full hover:shadow-lg transition-all duration-300">
      
      {/* Bintang Rating (Menggunakan ikon SVG) */}
      <div className="flex text-[#EA580C] mb-4 space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-200'}`} 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Teks Komentar */}
      <p className="text-[#7D6356] italic mb-6 flex-grow leading-relaxed">
        "{review.comment}"
      </p>
      
      {/* Profil Pelanggan */}
      <div className="flex items-center mt-auto pt-4 border-t border-[#F0E6DD]/50">
        <img 
          src={review.avatarUrl} 
          alt={review.name} 
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#EADDD7]" 
        />
        <div>
          <h4 className="text-sm font-bold text-[#5C3D2E]">{review.name}</h4>
          <p className="text-xs text-[#EA580C] font-medium mt-0.5">{review.role}</p>
        </div>
      </div>
      
    </div>
  );
}