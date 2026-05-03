import { Product, Review } from "./types";

export const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Dimsum Spicy Mentai Hantaran (16 pcs)",
    category: "Dimsum",
    slug: "dimsum-spicy-mentai-hantaran-16-pcs",
    description:
      "Dimsum ayam yang lembut, gurih, wangi, dengan saus spicy mentai creamy serta tobiko grade A kemudian dilakukan  blow torch untuk memberikan kesan smoky.",
    price: "Rp 70.000",
    imageUrl: "/assets/product/5.jpg",
    isFeatured: true,
  },
  {
    id: 12,
    name: "Dimsum Spicy Mentai(5 pcs)",
    category: "Dimsum",
    slug: "dimsum-spicy-mentai-5-pcs",
    description:
      "Dimsum ayam yang lembut, gurih, wangi, dengan saus spicy mentai creamy serta tobiko grade A kemudian dilakukan  blow torch untuk memberikan kesan smoky.",
    price: "Rp 23.000",
    imageUrl: "/assets/product/18.jpg",
    isFeatured: false,
  },
  {
    id: 13,
    name: "Dimsum Original (5 pcs)",
    category: "Dimsum",
    slug: "dimsum-original-5-pcs",
    description: "Dimsum ayam yang lembut, gurih, wangi, dengan saus pedas.",
    price: "Rp 18.000",
    imageUrl: "/assets/product/19.jpg",
    isFeatured: false,
  },
  {
    id: 14,
    name: "Dimsum Original Frozen (10 pcs)",
    category: "Dimsum",
    slug: "dimsum-original-frozen-10-pcs",
    description:
      "Dikemas dengan vacum sealer,sehingga tahan lama untuk disimpan dan dapat dikonsumsi kapan saja.",
    price: "Rp 36.000",
    imageUrl: "/assets/product/20.png",
    isFeatured: false,
  },
  {
    id: 2,
    name: "Reguler Signature Pizza",
    category: "Pizza",
    slug: "reguler-signature-pizza",
    description:
      "Pizza dengan saus bolognese, saur tomat dengan toping sosis bratwurst, smoked beef, onion, keju mozzarella, serta aregano  yang memberikan kesan aromatik.",
    price: "Rp 70.000",
    imageUrl: "/assets/product/12.jpg",
    isFeatured: true,
  },
  {
    id: 11,
    name: "Personal Signature Pizza",
    category: "Pizza",
    slug: "personal-signature-pizza",
    description:
      "Pizza dengan saus bolognese, saur tomat dengan toping sosis bratwurst, smoked beef, onion, keju mozzarella, serta aregano  yang memberikan kesan aromatik.",
    price: "Rp 25.000",
    imageUrl: "/assets/product/13.png",
    isFeatured: false,
  },
  {
    id: 3,
    name: "Chocolate Bun",
    category: "Roti",
    slug: "chocolate-bun",
    description: "Roti lembut isi selai cokelat.",
    price: "Rp 7.000",
    imageUrl: "/assets/product/4.jpg",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Kaya Bun",
    category: "Roti",
    slug: "kaya-bun",
    description: "Roti lembut isi selai sarikaya.",
    price: "Rp 7.000",
    imageUrl: "/assets/product/15.png",
    isFeatured: false,
  },
  {
    id: 5,
    name: "Milk Cheese Bun",
    category: "Roti",
    slug: "milk-cheese-bun",
    description:
      "Roti lembut isi krim susu keju dengan taburan keju cheddar parutan.",
    price: "Rp 9.000",
    imageUrl: "/assets/product/2.jpg",
    isFeatured: true,
  },
  {
    id: 6,
    name: "Blueberry Cream Cheese Bun",
    category: "Roti",
    slug: "blueberry-cream-cheese-bun",
    description: "Roti lembut isi krim susu keju dan selai blueberry.",
    price: "Rp 9.000",
    imageUrl: "/assets/product/3.jpg",
    isFeatured: false,
  },
  {
    id: 7,
    name: "Classic Cheese Bun",
    category: "Roti",
    slug: "classic-cheese-bun",
    description: "Roti lembut isi parutan keju cheddar.",
    price: "Rp 7.000",
    imageUrl: "/assets/product/9.jpg",
    isFeatured: false,
  },
  {
    id: 8,
    name: "Chinnamol Roll",
    category: "Roti",
    slug: "chinnamol-roll",
    description:
      "Roti gulung lembut diisi dengan gula aren dan kayu manis dan saus keju susu.",
    price: "Rp 20.000/pack isi 2 pcs",
    imageUrl: "/assets/product/1.jpg",
    isFeatured: false,
  },
  {
    id: 9,
    name: "Smoked Beef Bun",
    category: "Roti",
    slug: "smoked-beef-bun",
    description:
      "Roti lembut dengan smoke beef, saus bolognese, saus tomat, mayonnaise, parutan keju, serta taburan organo.",
    price: "Rp 10.000",
    imageUrl: "/assets/product/16.jpg",
    isFeatured: false,
  },
  {
    id: 10,
    name: "Sausage Bun",
    category: "Roti",
    slug: "sausage-bun",
    description:
      "Roti lembut dengan sosis sapi, saus tomat, mayonnaise, dan taburan parsley.",
    price: "Rp 10.000",
    imageUrl: "/assets/product/17.jpg",
    isFeatured: false,
  },
];

export const dummyReviews: Review[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pecinta Kuliner",
    comment:
      "Rotinya juara banget! Teksturnya super empuk dan seratnya halus. Wanginya harum semerbak, dan manisnya pas banget, nggak bikin eneg. Cocok banget buat teman ngopi di pagi atau sore hari. Keluarga di rumah langsung ketagihan, besok pasti pesan lagi!",
    rating: 5,
    avatarUrl:
      "https://ui-avatars.com/api/?name=Budi+Santoso&background=EA580C&color=fff&bold=true",
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Ibu Rumah Tangga",
    comment:
      "Pizzanya sangat recommended! Adonannya crunchy di luar tapi tetap empuk di dalam. Topping-nya benar-benar melimpah dan nggak pelit keju sama sekali. Dimakan pas masih hangat rasanya luar biasa mantap, serasa makan di restoran Italia bintang lima.",
    rating: 5,
    avatarUrl:
      "https://ui-avatars.com/api/?name=Siti+Aminah&background=EA580C&color=fff&bold=true",
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Food Blogger",
    comment:
      "Jujur ini salah satu dimsum terenak yang pernah saya coba. Ukurannya besar-besar, isian ayam sangat padat, kenyal, dan juicy—bukan tipe dimsum yang kebanyakan tepung. Makin sempurna dicocol pakai sausnya yang asam pedas gurih. Wajib coba!",
    rating: 5,
    avatarUrl:
      "https://ui-avatars.com/api/?name=Andi+Wijaya&background=EA580C&color=fff&bold=true",
  },
];
