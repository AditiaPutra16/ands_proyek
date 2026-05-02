import { Product } from "@/lib/types";
import Link from "next/link";


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {  
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#F0E6DD]">
      <div className="relative h-56 w-full bg-[#EADDD7]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#5C3D2E] mb-2">
          {product.name}
        </h3>
        <p className="text-[#7D6356] text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-[#14532D] bg-[#E8F5E9] px-2 py-1 rounded-md">
            {product.price}
          </span>
          <Link 
            href={`/products/${product.slug}`} // <-- Ubah bagian ini
            className="px-4 py-2 bg-[#7F1D1D] text-white text-sm font-medium rounded-md hover:bg-[#5C1515] transition-colors shadow-sm"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}