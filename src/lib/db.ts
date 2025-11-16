// Mock database - Replace with your real database (Prisma, MongoDB, etc.)
export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Yellow Sweater",
    price: 19.99,
    description:
      "Cozy and comfortable yellow sweater, perfect for casual wear and layering",
    image: "/img/product/product-1.jpg",
  },
  {
    id: "2",
    name: "Pink Light Jacket",
    price: 29.99,
    description:
      "Stylish lightweight pink jacket, ideal for spring and fall seasons",
    image: "/img/product/product-2.jpg",
  },
  {
    id: "3",
    name: "Fall Blouse",
    price: 39.99,
    description:
      "Elegant fall blouse with beautiful colors and comfortable fit",
    image: "/img/product/product-3.jpg",
  },
  {
    id: "4",
    name: "Striped Dress shirt",
    price: 9.99,
    description:
      "Classic striped dress shirt, versatile and perfect for professional or casual settings",
    image: "/img/product/product-4.jpg",
  },
  {
    id: "5",
    name: "Striped Yellow Shirt",
    price: 14.99,
    description:
      "Vibrant striped yellow shirt with modern style and comfortable fabric",
    image: "/img/product/product-5.jpg",
  },
  {
    id: "6",
    name: "Dotted Animal Shirt",
    price: 24.99,
    description:
      "Fun and playful dotted animal print shirt, great for casual everyday wear",
    image: "/img/product/product-6.jpg",
  },
  {
    id: "7",
    name: "White Blouse",
    price: 49.99,
    description:
      "Timeless white blouse with elegant design, perfect for both work and social occasions",
    image: "/img/product/product-7.jpg",
  },
  {
    id: "8",
    name: "California Sun Shirt",
    price: 34.99,
    description:
      "Bright and sunny California-inspired shirt, perfect for beach trips and warm weather",
    image: "/img/product/product-8.jpg",
  },
];

export async function getProducts(): Promise<Product[]> {
  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockProducts.find((p) => p.id === id) || null;
}
