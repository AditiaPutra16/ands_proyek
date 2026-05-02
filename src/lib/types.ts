export interface Product {
  id: number | string;
  name: string;
  category: string;
  slug: string;
  description: string;
  price: string;
  imageUrl: string;
  isFeatured: boolean;
}

export interface Review {
  id: number | string;
  name: string;
  role: string;
  comment: string;
  rating: number; // Skala 1-5
  avatarUrl: string;
}