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
    name: "Wireless Headphones",
    price: 19.99,
    description: "High-quality wireless headphones",
    image: "/img/product/headphones.jpg",
  },
  {
    id: "2",
    name: "USB-C Cable",
    price: 29.99,
    description: "Durable USB-C charging cable",
    image: "/img/product/cable.jpg",
  },
  {
    id: "3",
    name: "Portable Charger",
    price: 39.99,
    description: "20000mAh portable battery pack",
    image: "/img/product/charger.jpg",
  },
  {
    id: "4",
    name: "Phone Stand",
    price: 9.99,
    description: "Adjustable phone stand",
    image: "/img/product/stand.jpg",
  },
  {
    id: "5",
    name: "Screen Protector",
    price: 14.99,
    description: "Tempered glass screen protector",
    image: "/img/product/protector.jpg",
  },
  {
    id: "6",
    name: "Phone Case",
    price: 24.99,
    description: "Protective phone case",
    image: "/img/product/case.jpg",
  },
  {
    id: "7",
    name: "Keyboard",
    price: 49.99,
    description: "Mechanical wireless keyboard",
    image: "/img/product/keyboard.jpg",
  },
  {
    id: "8",
    name: "Mouse",
    price: 34.99,
    description: "Ergonomic wireless mouse",
    image: "/img/product/mouse.jpg",
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
