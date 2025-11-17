// Mock database - Replace with your real database (Prisma, MongoDB, etc.)
export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string;
  rating?: number;
  label?: string;
  category?: string;
  size?: string[];
  color?: string;
  originalPrice?: number;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Yellow Sweater",
    price: 19.99,
    description:
      "Cozy and comfortable yellow sweater, perfect for casual wear and layering",
    image: "/img/product/product-1.jpg",
    rating: 5,
    label: "new",
    category: "women",
    size: ["s", "m", "l", "xl"],
    color: "yellows",
  },
  {
    id: 2,
    name: "Pink Light Jacket",
    price: 29.99,
    description:
      "Stylish lightweight pink jacket, ideal for spring and fall seasons",
    image: "/img/product/product-2.jpg",
    rating: 5,
    category: "women",
    size: ["xs", "s", "m", "l"],
    color: "reds",
  },
  {
    id: 3,
    name: "Fall Blouse",
    price: 39.99,
    description:
      "Elegant fall blouse with beautiful colors and comfortable fit",
    image: "/img/product/product-3.jpg",
    rating: 5,
    label: "sale",
    category: "women",
    size: ["s", "m", "l", "xl"],
    color: "beige",
  },
  {
    id: 4,
    name: "Striped Dress shirt",
    price: 9.99,
    description:
      "Classic striped dress shirt, versatile and perfect for professional or casual settings",
    image: "/img/product/product-4.jpg",
    rating: 5,
    category: "men",
    size: ["s", "m", "l", "xl"],
    color: "blues",
  },
  {
    id: 5,
    name: "Striped Yellow Shirt",
    price: 14.99,
    description:
      "Vibrant striped yellow shirt with modern style and comfortable fabric",
    image: "/img/product/product-5.jpg",
    rating: 5,
    category: "men",
    size: ["s", "m", "l", "xl"],
    color: "yellows",
  },
  {
    id: 6,
    name: "Dotted Animal Shirt",
    price: 24.99,
    description:
      "Fun and playful dotted animal print shirt, great for casual everyday wear",
    image: "/img/product/product-6.jpg",
    rating: 5,
    category: "women",
    size: ["xs", "s", "m", "l"],
    color: "whites",
  },
  {
    id: 7,
    name: "White Blouse",
    price: 49.99,
    description:
      "Timeless white blouse with elegant design, perfect for both work and social occasions",
    image: "/img/product/product-7.jpg",
    rating: 5,
    label: "new",
    category: "women",
    size: ["xs", "s", "m", "l", "xl"],
    color: "whites",
  },
  {
    id: 8,
    name: "California Sun Shirt",
    price: 34.99,
    description:
      "Bright and sunny California-inspired shirt, perfect for beach trips and warm weather",
    image: "/img/product/product-8.jpg",
    rating: 5,
    category: "men",
    size: ["s", "m", "l", "xl"],
    color: "yellows",
  },
  {
    id: 9,
    name: "Furry hooded parka",
    price: 59,
    image: "/img/shop/shop-1.jpg",
    rating: 5,
    label: "new",
    category: "women",
    size: ["xs", "s", "m", "l"],
    color: "black",
  },
  {
    id: 10,
    name: "Flowy striped skirt",
    price: 49,
    image: "/img/shop/shop-2.jpg",
    rating: 5,
    category: "women",
    size: ["s", "m", "l", "xl"],
    color: "whites",
  },
  {
    id: 11,
    name: "Croc-effect bag",
    price: 59,
    image: "/img/shop/shop-3.jpg",
    rating: 5,
    category: "accessories",
    size: ["onesize"],
    color: "blacks",
  },
  {
    id: 12,
    name: "Dark wash Xavi jeans",
    price: 59,
    image: "/img/shop/shop-4.jpg",
    rating: 5,
    category: "women",
    size: ["xs", "s", "m", "l", "xl"],
    color: "blues",
  },
  {
    id: 13,
    name: "Ankle-cuff sandals",
    price: 49,
    originalPrice: 59,
    image: "/img/shop/shop-5.jpg",
    rating: 5,
    label: "sale",
    category: "accessories",
    size: ["xs", "s", "m", "l"],
    color: "beige",
  },
  {
    id: 14,
    name: "Contrasting sunglasses",
    price: 59,
    image: "/img/shop/shop-6.jpg",
    rating: 5,
    category: "accessories",
    size: ["onesize"],
    color: "blacks",
  },
  {
    id: 15,
    name: "Circular pendant earrings",
    price: 59,
    image: "/img/shop/shop-7.jpg",
    rating: 5,
    category: "accessories",
    size: ["onesize"],
    color: "reds",
  },
  {
    id: 16,
    name: "Cotton T-Shirt",
    price: 59,
    image: "/img/shop/shop-8.jpg",
    rating: 5,
    label: "out-of-stock",
    category: "men",
    size: ["s", "m", "l", "xl"],
    color: "whites",
  },
  {
    id: 17,
    name: "Water resistant zips backpack",
    price: 49,
    originalPrice: 59,
    image: "/img/shop/shop-9.jpg",
    rating: 5,
    label: "sale",
    category: "accessories",
    size: ["onesize"],
    color: "blacks",
  },
];

export async function getProducts(): Promise<Product[]> {
  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockProducts;
}

export async function getProductById(id: number): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockProducts.find((p) => p.id === id) || null;
}
