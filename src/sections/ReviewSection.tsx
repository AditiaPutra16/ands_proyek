import ReviewCard from "@/components/ReviewCard";
import { dummyReviews } from "@/lib/data";

export default function ReviewSection() {
  return (    
          <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-[#F0E6DD]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#7F1D1D] mb-4">
                  Apa Kata Mereka?
                </h2>
                <div className="w-24 h-1 bg-[#EA580C] mx-auto rounded-full mb-6"></div>
                <p className="text-[#7D6356] max-w-2xl mx-auto text-lg">
                  Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman mereka yang sudah mencicipi hidangan khas kami.
                </p>
              </div>
              
              {/* Grid Review Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dummyReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </section> 
    ); 
}